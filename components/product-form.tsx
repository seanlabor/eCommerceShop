"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCartStore } from "@/lib/store"
import { ShoppingCart, Check } from "lucide-react"

interface ProductFormProps {
  product: {
    id: string
    name: string
    price: number
    image: string
    sizes: string[]
  }
}

export function ProductForm({ product }: ProductFormProps) {
  const [selectedQuantity, setSelectedQuantity] = useState<string>("")
  const [isAdded, setIsAdded] = useState(false)
  const { addItem } = useCartStore()

  const handleAddToCart = () => {
    if (!selectedQuantity) return

    const quantity = Number.parseInt(selectedQuantity)

    // Add the item with the selected quantity
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    }

    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        onClick={handleAddToCart}
        disabled={!selectedQuantity}
        className="bg-[#2563eb] text-white px-8 py-3 hover:bg-[#1d4ed8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isAdded ? (
          <>
            <Check className="w-4 h-4 mr-2" />
            Hinzugefügt!
          </>
        ) : (
          <>
            <ShoppingCart className="w-4 h-4 mr-2" />
            In den Warenkorb
          </>
        )}
      </Button>
      <Select value={selectedQuantity} onValueChange={setSelectedQuantity}>
        <SelectTrigger className="w-full sm:w-32 border-[#cdcdcd]">
          <SelectValue placeholder="Anzahl" />
        </SelectTrigger>
        <SelectContent>
          {product.sizes.map((quantity) => (
            <SelectItem key={quantity} value={quantity}>
              {quantity}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
