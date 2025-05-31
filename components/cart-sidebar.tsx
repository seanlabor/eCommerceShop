"use client"

import { useCartStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function CartSidebar() {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore()
  const router = useRouter()

  const handleCheckout = () => {
    toggleCart() // Close the cart sidebar
    router.push("/checkout") // Navigate to checkout page
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleCart} />
      <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-semibold">Warenkorb ({items.length})</h2>
            <Button variant="ghost" size="sm" onClick={toggleCart}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500">Ihr Warenkorb ist leer</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 border-b pb-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      {item.size && <p className="text-xs text-gray-500">Größe: {item.size}</p>}
                      <p className="text-sm font-semibold">€{item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)}>
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Gesamt:</span>
                <span>€{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="space-y-2">
                <Button className="w-full bg-[#000000] hover:bg-[#333333]" onClick={handleCheckout}>
                  Zur Kasse
                </Button>
                <Button variant="outline" className="w-full" onClick={clearCart}>
                  Warenkorb leeren
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
