import { NextRequest, NextResponse } from 'next/server';
import { generateSitemap } from '../../../../../scripts/generateSitemap';

export async function POST(request: NextRequest) {
  try {
    // You might want to add authentication here to prevent unauthorized sitemap generation
    const result = await generateSitemap();
    
    return NextResponse.json({
      success: true,
      message: 'Sitemap generated successfully',
      productCount: result.productCount,
      categoryCount: result.categoryCount
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate sitemap',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Use POST method to generate sitemap',
    endpoints: {
      generate: 'POST /api/sitemap/generate',
      view: 'GET /sitemap.xml'
    }
  });
}