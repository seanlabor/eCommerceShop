"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, User, ChevronLeft, ChevronRight } from "lucide-react"
import { useCartStore } from "@/lib/store"
import { CartSidebar } from "@/components/cart-sidebar"
import { ProductForm } from "@/components/product-form"

const product = {
  id: "surfboard-wandhalterung",
  name: "Surfboard Wandhalterung",
  price: 89.99,
  image: "/violin-main.png",
  sizes: ["1", "2", "3", "4", "5"],
}

export default function SurfboardWandhalterungPage() {
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
            <div className="p-3 rounded-lg bg-[#f3f3f3] transition-colors cursor-pointer group">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-[#ea0025] rounded-sm flex-shrink-0"></div>
                <span className="text-[#333333] text-sm font-serif font-semibold">Surfboard Wandhalterung</span>
              </div>
              <p className="text-[#878787] text-xs leading-relaxed ml-6 opacity-100 transition-opacity duration-200 max-h-20 overflow-hidden">
                Vertikale Wandhalterung aus charaktervollem Eichenholz.
              </p>
            </div>

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
                alt="Surfboard Wandhalterung"
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
            {/* Product Title and Price */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-serif text-[#000000] leading-tight mb-4">
                Surfboard Wandhalterung
              </h1>
              <p className="text-2xl font-semibold text-[#000000] mb-6">€{product.price}</p>

              {/* Add to Cart and Quantity - moved here */}
              <ProductForm product={product} />
            </div>

            {/* Product Highlights */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#000000]">Produkt-Highlights:</h3>
              <div className="space-y-2 text-[#878787] text-sm">
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 font-semibold">✓</span>
                  <span>Massives Eichenholz – robust, langlebig & mit natürlicher Holzmaserung</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 font-semibold">✓</span>
                  <span>Platzsparendes Design – vertikale Wandmontage für optimale Raumnutzung</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 font-semibold">✓</span>
                  <span>Schutz für dein Board – gepolsterte Auflageflächen gegen Kratzer & Druckstellen</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 font-semibold">✓</span>
                  <span>Minimalistische Ästhetik – skandinavisch inspirierte Linien für stilvolle Innenräume</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 font-semibold">✓</span>
                  <span>
                    Vielseitig einsetzbar – geeignet für Surfboards und Directionals, sicherer Halt für alle Boardtypen
                  </span>
                </div>
              </div>
            </div>

            {/* Product Description */}
            <div className="space-y-4 text-[#878787] leading-relaxed">
              <h3 className="text-lg font-semibold text-[#000000]">Beschreibung:</h3>
              <p>
                Bring Ordnung in deinen Surfbereich und zeig dein Brett von seiner besten Seite – mit unserer
                hochwertigen Surfboard-Wandhalterung aus massivem Eichenholz. Ob im Wohnzimmer, in der Garage, im
                Surfshop oder im Ferienhaus: Diese vertikale Halterung bietet nicht nur eine sichere, aufrechte
                Aufbewahrung, sondern setzt dein Surfboard auch stilvoll in Szene.
              </p>
              <p>
                Die natürliche Holzmaserung und das klare, reduzierte Design machen sie zum ästhetischen Highlight in
                jedem Raum. Dank der gepolsterten Auflageflächen bleibt dein Board gut geschützt – vor Kratzern, Dellen
                oder Abrieb.
              </p>
              <p>
                Ideal für alle, die ihre Ausrüstung lieben und ihren Lifestyle leben – entwickelt von Surfern für
                Surfer.
              </p>
              <p>
                Egal ob du auf der Welle reitest oder mit deinem Directional durch den Wind gleitest – diese Halterung
                ist die perfekte Lösung für jedes Surf- und jedes Kitesurfsetup.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="aspect-[4/3] bg-[#f3f3f3] rounded-lg overflow-hidden">
                  <Image
                    src="/material-tree.png"
                    alt="Eichenholz Quelle"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#000000] mb-2">Material</h3>
                  <p className="text-[#878787] text-sm">
                    Charaktervolles Eichenholz aus nachhaltiger lokaler Forstwirtschaft
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="aspect-[4/3] bg-[#f3f3f3] rounded-lg overflow-hidden">
                  <Image
                    src="/finishing-hands.png"
                    alt="Handwerkliche Bearbeitung"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#000000] mb-2">Verarbeitung</h3>
                  <p className="text-[#878787] text-sm">
                    Handwerkliche Bearbeitung mit natürlicher Öl-Wachs-Oberfläche
                  </p>
                </div>
              </div>
            </div>

            {/* Perfect for section */}
            <div className="space-y-3">
              <h3 className="font-semibold text-[#000000]">Perfekt für:</h3>
              <div className="space-y-1 text-[#878787] text-sm">
                <div>• Surfbrett-Aufbewahrung für Wellenreiten & Kitesurfen</div>
                <div>• Wohnräume, Garagen, Surfshops und Ferienhäuser</div>
                <div>• Dekoration mit Funktion – für Surf-Lifestyle und Kitesurf-Fans</div>
                <div>• Geschenkidee für Surfer und Kiter</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-[#f3f3f3] p-4 rounded-lg">
              <p className="text-[#000000] font-semibold text-center">
                Jetzt bestellen und dein Surfboard stilvoll & sicher präsentieren!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar />
    </div>
  )
}
