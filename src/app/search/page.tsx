import { getAllProducts } from "../actions";

interface SearchProps {
  searchParams: { [key: string]: string | undefined };
}

const Search = async ({ searchParams }: SearchProps) => {
  console.log("Search page loading...");
  
  try {
    const products = await getAllProducts();
    console.log("Products fetched:", products?.length || 0);
    
    return (
      <section className="pt-14 px-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Search Page</h1>
        <p>Query: {searchParams.q || 'None'}</p>
        <p>Products found: {products?.length || 0}</p>
        
        {products && products.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Products:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.slice(0, 6).map((product) => (
                <div key={product._id.toString()} className="border p-4 rounded">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-gray-600">{product.category}</p>
                  <p className="text-green-600">₹{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    );
  } catch (error) {
    console.error("Error in search page:", error);
    return (
      <section className="pt-14 px-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p>Failed to load search page: {error instanceof Error ? error.message : 'Unknown error'}</p>
      </section>
    );
  }
};

export default Search;