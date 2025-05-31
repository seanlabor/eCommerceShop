'use client'

import Image from "next/image"
import Link from "next/link"
import { Search, User, ChevronLeft, ChevronRight } from "lucide-react"
import { useCartStore } from "@/lib/store"
import { CartSidebar } from "@/components/cart-sidebar"
import { ProductForm } from "@/components/product-form"

interface ProductClientProps {
  product: {
    id: string
    name: string
    price: number
    image: string
    sizes: string[]
    description: string
    short_description: string
    attributes: {
      id: number
      name: string
      options: string[]
    }[]
    images: {
      id: number
      src: string
      alt: string
    }[]
    meta_data: {
      key: string
      value: any
    }[]
  }
}

export function ProductClient({ product }: ProductClientProps) {
  const { toggleCart, getTotalItems } = useCartStore()

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-end xl:justify-between">
          <div className="hidden xl:block"></div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#333333] hover:text-[#000000] transition-colors font-serif">
              Home
            </Link>
            <a href="#" className="text-[#333333] hover:text-[#000000] transition-colors font-serif">
              FAQ
            </a>
            <a href="#" className="text-[#333333] hover:text-[#000000] transition-colors font-serif">
              Versand
            </a>
            <a href="#" className="text-[#333333] hover:text-[#000000] transition-colors font-serif">
              Kontakt
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-[#878787] cursor-pointer hover:text-[#333333] transition-colors" />
            <div className="relative cursor-pointer" onClick={toggleCart}>
              <svg
                className="w-5 h-5 text-[#878787] hover:text-[#333333] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.68 4.32a2 2 0 001.92 2.68h9.56a2 2 0 001.92-2.68L16 13"
                />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#ea0025] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </div>
            <User className="w-5 h-5 text-[#878787] cursor-pointer hover:text-[#333333] transition-colors" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Product Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={1000}
                className="w-full h-full object-contain scale-110"
              />
            </div>

            {/* Image Navigation */}
            {product.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                <button className="bg-gray-500 bg-opacity-50 text-white p-2 rounded hover:bg-gray-600 hover:bg-opacity-60 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="bg-gray-500 bg-opacity-50 text-white p-2 rounded hover:bg-gray-600 hover:bg-opacity-60 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-serif text-[#000000] leading-tight mb-4">{product.name}</h1>
              <p className="text-2xl font-semibold text-[#000000] mb-6">€{product.price}</p>
              <ProductForm product={product} />
            </div>

            {/* Product Highlights */}
            {product.attributes && product.attributes.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#000000]">Produkt-Highlights:</h3>
                <div className="space-y-2 text-[#878787] text-sm">
                  {product.attributes.map((attr) => (
                    <div key={attr.id} className="flex items-start space-x-2">
                      <span className="text-green-600 font-semibold">✓</span>
                      <span>{attr.name}: {attr.options.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Product Description */}
            {product.description && (
              <div className="space-y-4 text-[#878787] leading-relaxed">
                <h3 className="text-lg font-semibold text-[#000000]">Beschreibung:</h3>
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
              </div>
            )}

            {/* Short Description */}
            {product.short_description && (
              <div className="bg-[#f3f3f3] p-4 rounded-lg">
                <div 
                  className="text-[#000000] font-semibold text-center"
                  dangerouslySetInnerHTML={{ __html: product.short_description }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar />
    </div>
  )
} 