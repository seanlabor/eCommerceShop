"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, User } from "lucide-react"
import { useCartStore } from "@/lib/store"
import { CartSidebar } from "@/components/cart-sidebar"

export default function HomePage() {
  const { toggleCart, getTotalItems } = useCartStore()

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-end xl:justify-between">
          <div className="hidden xl:block"></div> {/* Spacer for layout */}
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

      {/* Side Panel */}
      <div className="fixed left-0 top-0 h-full w-56 bg-[#fafafa] z-10 hidden xl:block">
        <div className="p-6">
          {/* Logo in sidebar */}
          <div className="text-lg font-serif text-[#000000] leading-tight mb-8">
            <div>Holzmanufaktur</div>
            <div>Holzkopf</div>
          </div>

          <h3 className="text-xl font-semibold text-[#000000] mb-8">Explore</h3>
          <div className="space-y-4">
            <Link
              href="/surfboard-wandhalterung"
              className="block p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer group"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-[#ea0025] rounded-sm flex-shrink-0"></div>
                <span className="text-[#333333] text-sm font-serif">Surfboard Wandhalterung</span>
              </div>
              <p className="text-[#878787] text-xs leading-relaxed ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 max-h-0 group-hover:max-h-20 overflow-hidden">
                Vertikale Wandhalterung aus charaktervollem Eichenholz.
              </p>
            </Link>

            <Link
              href="/seifenhalter"
              className="block p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer group"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-[#333333] rounded-sm flex-shrink-0"></div>
                <span className="text-[#333333] text-sm font-serif">Seifenhalter</span>
              </div>
              <p className="text-[#878787] text-xs leading-relaxed ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 max-h-0 group-hover:max-h-20 overflow-hidden">
                Aus alten Barriquefässern gefertigt.
              </p>
            </Link>

            <Link
              href="/pflanzenuntersetzer"
              className="block p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer group"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-[#878787] rounded-sm flex-shrink-0"></div>
                <span className="text-[#333333] text-sm font-serif">Pflanzenuntersetzer</span>
              </div>
              <p className="text-[#878787] text-xs leading-relaxed ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 max-h-0 group-hover:max-h-20 overflow-hidden">
                Handarbeit aus alten Weinfässern.
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 xl:ml-56">
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-serif text-[#000000] leading-tight mb-6">Holzmanufaktur Holzkopf</h1>
          <p className="text-xl text-[#878787] max-w-2xl mx-auto">
            Handgefertigte Holzprodukte aus nachhaltigen Materialien – jedes Stück ein Unikat mit Geschichte.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/surfboard-wandhalterung" className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-[#f3f3f3] overflow-hidden">
                <Image
                  src="/violin-main.png"
                  alt="Surfboard Wandhalterung"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-[#000000] mb-2">Surfboard Wandhalterung</h3>
                <p className="text-[#878787] text-sm mb-4">Vertikale Wandhalterung aus charaktervollem Eichenholz.</p>
                <p className="text-lg font-semibold text-[#000000]">€89.99</p>
              </div>
            </div>
          </Link>

          <Link href="/seifenhalter" className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-[#f3f3f3] overflow-hidden flex items-center justify-center">
                <Image
                  src="/seifenschale-transparent.png"
                  alt="Seifenhalter"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-[#000000] mb-2">Seifenhalter</h3>
                <p className="text-[#878787] text-sm mb-4">Aus alten Barriquefässern gefertigt.</p>
                <p className="text-lg font-semibold text-[#000000]">€24.99</p>
              </div>
            </div>
          </Link>

          <Link href="/pflanzenuntersetzer" className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-[#f3f3f3] overflow-hidden flex items-center justify-center">
                <Image
                  src="/plant-untersetzer-transparent.png"
                  alt="Pflanzenuntersetzer"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-[#000000] mb-2">Pflanzenuntersetzer</h3>
                <p className="text-[#878787] text-sm mb-4">Handarbeit aus alten Weinfässern.</p>
                <p className="text-lg font-semibold text-[#000000]">€19.99</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar />
    </div>
  )
}
