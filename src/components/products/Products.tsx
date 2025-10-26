import Link from "next/link";
import { Images } from "./Images";
import { EnrichedProducts } from "@/types/types";
import dynamic from "next/dynamic";
import { Skeleton } from "../ui/skeleton";
import { Wishlists, getTotalWishlist } from "@/app/(carts)/wishlist/action";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";

const WishlistButton = dynamic(() => import("../cart/WishlistButton"), {
  loading: () => <Skeleton className="w-5 h-5" />,
});

const DeleteButton = dynamic(() => import("../cart/DeleteButton"), {
  loading: () => <Skeleton className="w-5 h-5" />,
});

const ProductCartInfo = dynamic(() => import("../cart/ProductCartInfo"), {
  loading: () => <Skeleton className="w-24 h-8" />,
});

export const Products = async ({
  products,
  extraClassname = "",
}: {
  products: EnrichedProducts[];
  extraClassname: string;
}) => {
  const session: Session | null = await getServerSession(authOptions);
  const hasMissingQuantity = products.some((product) => !product.quantity);
  const wishlist =
    hasMissingQuantity && session?.user ? await getTotalWishlist() : undefined;

  const gridClassname = [
    "grid gap-x-3.5 gap-y-6 sm:gap-y-9",
    extraClassname === "colums-mobile" && "grid-cols-auto-fill-110",
    extraClassname === "cart-ord-mobile" && "grid-cols-1",
    "sm:grid-cols-auto-fill-250",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={gridClassname}>
      {products.map((product, index) => {
        const {
          _id,
          category,
          quantity,
          productId,
          image,
          name,
          price,
          purchased,
        } = product;
        const productLink = `/${category}/${quantity ? productId : _id}`;
        const containerClassname = [
          "flex justify-between border border-solid border-border-light rounded-md overflow-hidden shadow-sm bg-card",
          extraClassname === "cart-ord-mobile"
            ? "flex-row sm:flex-col mb-4"
            : "flex-col",
        ]
          .filter(Boolean)
          .join(" ");
        const linkClassname =
          extraClassname === "cart-ord-mobile"
            ? "w-5/12 sm:w-full hover:scale-105 transition-all flex-shrink-0"
            : "hover:scale-105 transition-all";
        const infoClassname = [
          extraClassname === "cart-ord-mobile" ? "w-7/12 sm:w-full flex-1" : "",
          "flex justify-between flex-col gap-3 p-4 bg-card z-10",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <div className={containerClassname} key={index}>
            <Link href={productLink} className={linkClassname}>
              <Images
                image={image}
                name={name}
                width={400}
                height={400}
                priority={index === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1154px) 33vw, (max-width: 1536px) 25vw, 20vw"
              />
            </Link>
            <div className={infoClassname}>
              <div className="flex justify-between items-start w-full mb-2">
                <Link href={productLink} className="flex-1 pr-2">
                  <h2 className="text-sm font-semibold leading-tight">{name}</h2>
                </Link>
                {quantity ? (
                  purchased ? (
                    quantity > 1 && <span className="text-sm font-medium">{quantity}</span>
                  ) : (
                    <DeleteButton product={product} />
                  )
                ) : (
                  <WishlistButton
                    session={session}
                    productId={JSON.stringify(_id)}
                    wishlistString={JSON.stringify(wishlist)}
                  />
                )}
              </div>
              {!purchased && (
                <div className="text-base font-semibold text-primary mb-2">
                  ₹{quantity ? (price * quantity).toFixed(2) : price}
                </div>
              )}
              {quantity !== undefined && <ProductCartInfo product={product} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};
