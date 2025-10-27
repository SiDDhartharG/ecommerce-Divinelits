const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

// Import ProductCategory from shared constants
const { ProductCategory } = require('../src/constants/index.js');

// Function to generate sitemap
const generateSitemap = async () => {
  try {
    console.log('🔄 Generating sitemap...');

    // Import database functions - connect to real database only
    let products = [];

    try {
      // Try to connect to database and fetch real products
      const mongoose = require('mongoose');
      
      console.log('🔍 Checking for MONGODB_URI...');
      // Check if MONGODB_URI exists in process.env
      if (process.env.MONGODB_URI) {
        console.log('✅ MONGODB_URI found, attempting to connect...');
        await mongoose.connect(process.env.MONGODB_URI);
        
        // Define Product schema similar to your existing model
        const ProductSchema = new mongoose.Schema({
          name: { type: String, required: true },
          category: { type: String, required: true },
          status: { type: String, required: true },
          description: String,
          price: Number,
          image: [String],
          variants: Array,
          sizes: [String],
          discount: { type: Number, default: 0 }
        });
        
        const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);
        
        // Fetch visible products
        products = await Product.find({ status: 'VISIBLE' }).select('_id category name').lean();
        console.log(`📦 Found ${products.length} products in database`);
        
        // Close the connection
        await mongoose.connection.close();
      } else {
        console.log('❌ MONGODB_URI not found in environment variables');
        console.log('💡 Make sure to set MONGODB_URI in your .env.local file');
        throw new Error('MONGODB_URI not found');
      }
    } catch (dbError) {
      console.error('❌ Database connection failed:', dbError.message);
      console.error('💡 Please ensure:');
      console.error('   - MONGODB_URI is set in your .env.local file');
      console.error('   - MongoDB server is running and accessible');
      console.error('   - Network connection is available');
      throw new Error(`Sitemap generation requires database connection: ${dbError.message}`);
    }
    
    // Define static pages (removed cart and wishlist as they're user-specific)
    const staticPages = [
      {
        url: '',
        changefreq: 'daily',
        priority: '1.0',
        description: 'Homepage'
      },
      {
        url: '/search',
        changefreq: 'weekly', 
        priority: '0.7',
        description: 'Search page'
      }
    ];

    // Define categories from ProductCategory enum
    const categories = [
      { name: ProductCategory.CANDLES, slug: encodeURIComponent(ProductCategory.CANDLES), priority: '0.8' },
      { name: ProductCategory.GIFT_BOX, slug: encodeURIComponent(ProductCategory.GIFT_BOX), priority: '0.8' },
      { name: ProductCategory.NAMED_GIFT, slug: encodeURIComponent(ProductCategory.NAMED_GIFT), priority: '0.8' }
    ];

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://divinelits.com';
    const currentDate = new Date().toISOString().split('T')[0];

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Add static pages
    staticPages.forEach(page => {
      sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });

    // Add category pages
    categories.forEach(category => {
      sitemap += `
  <url>
    <loc>${baseUrl}/${category.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${category.priority}</priority>
  </url>`;
    });

    // Add product pages with appropriate frequency based on category
    products.forEach(product => {
      // Determine change frequency based on product category
      let changefreq = 'monthly'; // default
      let priority = '0.6'; // default
      
      switch(product.category) {
        case ProductCategory.CANDLES:
          changefreq = 'weekly'; // Popular category, might get updated more
          priority = '0.7';
          break;
        case ProductCategory.GIFT_BOX:
          changefreq = 'monthly'; // Seasonal, less frequent changes
          priority = '0.6';
          break;
        case ProductCategory.NAMED_GIFT:
          changefreq = 'monthly'; // Personalized, stable content
          priority = '0.6';
          break;
        default:
          changefreq = 'monthly';
          priority = '0.6';
      }

      const encodedCategory = encodeURIComponent(product.category);
      
      sitemap += `
  <url>
    <loc>${baseUrl}/${encodedCategory}/${product._id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    });

    sitemap += `
</urlset>`;

    // Write sitemap to public directory
    const publicDir = path.join(process.cwd(), 'public');
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    
    fs.writeFileSync(sitemapPath, sitemap);
    
    console.log(`✅ Sitemap generated successfully!`);
    console.log(`📊 Statistics:`);
    console.log(`   - ${staticPages.length} static pages`);
    console.log(`   - ${categories.length} category pages`);
    console.log(`   - ${products.length} product pages`);
    console.log(`   - Data source: Database`);
    console.log(`📍 Sitemap saved to: ${sitemapPath}`);
    
    return {
      success: true,
      staticPageCount: staticPages.length,
      categoryCount: categories.length,
      productCount: products.length,
      dataSource: 'database'
    };

  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    throw error;
  }
};

// Export for use in other files
module.exports = { generateSitemap };

// Run directly if this script is executed
if (require.main === module) {
  generateSitemap()
    .then(() => {
      console.log('🎉 Sitemap generation completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Sitemap generation failed:', error);
      process.exit(1);
    });
}