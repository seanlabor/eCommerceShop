import { getProductBySlug, getProducts } from '@/lib/woocommerce'
import { ProductClient } from './ProductClient'
import { notFound } from 'next/navigation'

// Generate static params for all products
export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

// Server Component
export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug)

  // If product not found, show 404
  if (!product) {
    notFound()
  }

  // Find sizes from attributes or use default sizes
  const sizeAttribute = product.attributes?.find(attr => 
    attr.name.toLowerCase() === 'size' || 
    attr.name.toLowerCase() === 'größe' ||
    attr.name.toLowerCase() === 'groesse'
  )
  const sizes = sizeAttribute?.options || ['Standard']

  // Convert WooCommerce product data to the format expected by the client
  const productData = {
    id: String(product.id),
    name: product.name,
    price: parseFloat(product.price),
    image: product.images[0]?.src || '/placeholder.png',
    sizes,
    description: product.description,
    short_description: product.short_description,
    attributes: product.attributes,
    images: product.images,
    meta_data: product.meta_data,
  }

  return <ProductClient product={productData} />
} 