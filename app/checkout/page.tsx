"use client"

import { CheckoutPage } from "@/components/checkout-page"
import { useRouter } from "next/navigation"

export default function CheckoutPageRoute() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <CheckoutPage onBack={() => router.push("/")} />
    </div>
  )
}
