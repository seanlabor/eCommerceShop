"use client"

import Image from "next/image"
import { Search, User, ChevronLeft, ChevronRight, Twitter, Facebook, Instagram } from "lucide-react"
import { useCartStore } from "@/lib/store"
import { CartSidebar } from "@/components/cart-sidebar"
import { ProductForm } from "@/components/product-form"

const product = {
  id: "fiddlerman-ob1",
  name: "Fiddlerman OB1",
  price: 299.99,
  image: "/violin-main.png",
  sizes: ["1/4", "1/2", "3/4", "4/4"],
}

export default function Component() {
  const { toggleCart, getTotalItems } = useCartStore()

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-end xl:justify-between">
          <div className="hidden xl:block"></div> {/* Spacer for layout */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#333333] hover:text-[#000000] transition-colors">
              vollens
            </a>
            <a href="#" className="text-[#333333] hover:text-[#000000] transition-colors">
              guitars
            </a>
            <a href="#" className="text-[#333333] hover:text-[#000000] transition-colors">
              packaging
            </a>
            <a href="#" className="text-[#333333] hover:text-[#000000] transition-colors">
              about us
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

      {/* Side Panel */}
      <div className="fixed left-0 top-0 h-full w-56 bg-[#fafafa] z-10 hidden xl:block">
        <div className="p-6">
          {/* Logo in sidebar */}
          <div className="text-lg font-bold text-[#000000] leading-tight mb-8">
            <div>Holzmanufaktur</div>
            <div>Holzkopf</div>
          </div>

          <h3 className="text-xl font-semibold text-[#000000] mb-8">Explore</h3>
          <div className="space-y-4">
            <div className="p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer group">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-[#ea0025] rounded-sm flex-shrink-0"></div>
                <span className="text-[#333333] text-sm font-serif">Surfboard Wandhalterung</span>
              </div>
              <p className="text-[#878787] text-xs leading-relaxed ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 max-h-0 group-hover:max-h-20 overflow-hidden">
                Vertikale Wandhalterung aus charaktervollem Eichenholz.
              </p>
            </div>

            <div className="p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer group">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-[#333333] rounded-sm flex-shrink-0"></div>
                <span className="text-[#333333] text-sm font-serif">Seifenhalter</span>
              </div>
              <p className="text-[#878787] text-xs leading-relaxed ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 max-h-0 group-hover:max-h-20 overflow-hidden">
                Aus alten Barriquefässern gefertigt.
              </p>
            </div>

            <div className="p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer group">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-[#878787] rounded-sm flex-shrink-0"></div>
                <span className="text-[#333333] text-sm font-serif">Pflanzenuntersetzer</span>
              </div>
              <p className="text-[#878787] text-xs leading-relaxed ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 max-h-0 group-hover:max-h-20 overflow-hidden">
                Handarbeit aus alten Weinfässern.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 xl:ml-56">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Product Image */}
          <div className="relative">
            {/* Side Navigation */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 hidden 2xl:block">
              <div className="flex flex-col space-y-8 text-[#878787] text-sm">
                <div className="transform -rotate-90 whitespace-nowrap">team</div>
                <div className="transform -rotate-90 whitespace-nowrap">packaging</div>
                <div className="transform -rotate-90 whitespace-nowrap">manufacturing</div>
              </div>
            </div>

            <div className="aspect-square bg-[#f3f3f3] rounded-lg overflow-hidden">
              <Image
                src="/violin-main.png"
                alt="Fiddlerman OB1 Violin"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              <button className="bg-gray-500 bg-opacity-50 text-white p-2 rounded hover:bg-gray-600 hover:bg-opacity-60 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="bg-gray-500 bg-opacity-50 text-white p-2 rounded hover:bg-gray-600 hover:bg-opacity-60 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="space-y-8 relative">
            {/* Social Icons */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden xl:flex flex-col space-y-4">
              <Twitter className="w-5 h-5 text-[#878787] cursor-pointer hover:text-[#333333] transition-colors" />
              <Facebook className="w-5 h-5 text-[#878787] cursor-pointer hover:text-[#333333] transition-colors" />
              <Instagram className="w-5 h-5 text-[#878787] cursor-pointer hover:text-[#333333] transition-colors" />
            </div>

            {/* Product Title and Price */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-serif text-[#000000] leading-tight mb-4">Fiddlerman OB1</h1>
              <p className="text-2xl font-semibold text-[#000000]">€{product.price}</p>
            </div>

            {/* Product Description */}
            <div className="space-y-4 text-[#878787] leading-relaxed">
              <p>
                The Fiddlerman Orchestra Beginner-1 (or OB1) is one of our top recommendations for beginners on a
                budget. It is well crafted from aged tonewoods, finished with a beautiful dark brown varnish, set up
                here in our shop to perfection.
              </p>
              <p>
                Every Fiddlerman violin is set up and tested in our workshop to make sure it passes our rigorous
                10-point inspection. Our incredibly talented team is here to help answer any questions you have, and
                make sure your instrument arrives safely.
              </p>
            </div>

            {/* Add to Cart and Size */}
            <ProductForm product={product} />

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="aspect-[4/3] bg-[#f3f3f3] rounded-lg overflow-hidden">
                  <Image
                    src="/material-tree.png"
                    alt="European spruce source"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#000000] mb-2">Material</h3>
                  <p className="text-[#878787] text-sm">European spruce soundpost from "Alpine Tone Wood"</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="aspect-[4/3] bg-[#f3f3f3] rounded-lg overflow-hidden">
                  <Image
                    src="/finishing-hands.png"
                    alt="Hand finishing process"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#000000] mb-2">Finishing</h3>
                  <p className="text-[#878787] text-sm">Spirit-based durable dark brown finish (no thick lacquer)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar />
    </div>
  )
}
