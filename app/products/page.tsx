import { getProducts } from '@/lib/woocommerce'
import Link from 'next/link'
import Image from 'next/image'

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="min-h-screen bg-[#fafafa] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-serif text-[#000000] mb-8">Unsere Produkte</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-[#f3f3f3] overflow-hidden">
                  <Image
                    src={product.images[0]?.src || '/placeholder.png'}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-serif text-[#000000] mb-2">{product.name}</h2>
                  <div 
                    className="text-[#878787] text-sm mb-4 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: product.short_description }}
                  />
                  <p className="text-lg font-semibold text-[#000000]">€{parseFloat(product.price).toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 