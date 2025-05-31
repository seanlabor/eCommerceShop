"use client"

import { useState } from "react"
import { useCartStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, CreditCard, Truck, Shield, Check } from "lucide-react"
import Image from "next/image"

interface CheckoutPageProps {
  onBack: () => void
}

interface BillingData {
  firstName: string
  lastName: string
  email: string
  address: string
  city: string
  postalCode: string
  country: string
}

interface ShippingData extends BillingData {
  company?: string
}

export function CheckoutPage({ onBack }: CheckoutPageProps) {
  const { items, getTotalPrice, clearCart } = useCartStore()
  const [step, setStep] = useState<"billing" | "shipping" | "payment" | "confirmation">("billing")
  const [sameAsShipping, setSameAsShipping] = useState(true)
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal" | "bank" | "">("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderNumber, setOrderNumber] = useState("")

  const [billingData, setBillingData] = useState<BillingData>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "DE",
  })

  const [shippingData, setShippingData] = useState<ShippingData>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "DE",
    company: "",
  })

  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  })

  const shippingCost = 9.99
  const tax = getTotalPrice() * 0.19 // 19% MwSt
  const totalWithShipping = getTotalPrice() + shippingCost + tax

  const validateBilling = () => {
    return (
      billingData.firstName &&
      billingData.lastName &&
      billingData.email &&
      billingData.address &&
      billingData.city &&
      billingData.postalCode
    )
  }

  const validateShipping = () => {
    if (sameAsShipping) return true
    return (
      shippingData.firstName &&
      shippingData.lastName &&
      shippingData.address &&
      shippingData.city &&
      shippingData.postalCode
    )
  }

  const validatePayment = () => {
    if (paymentMethod === "paypal" || paymentMethod === "bank") return true
    return cardData.number && cardData.expiry && cardData.cvv && cardData.name
  }

  const processOrder = async () => {
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate order number
    const orderNum = `WC-${Date.now()}`
    setOrderNumber(orderNum)

    // Clear cart and show confirmation
    clearCart()
    setStep("confirmation")
    setIsProcessing(false)
  }

  const handleNextStep = () => {
    if (step === "billing" && validateBilling()) {
      setStep("shipping")
    } else if (step === "shipping" && validateShipping()) {
      setStep("payment")
    } else if (step === "payment" && validatePayment()) {
      processOrder()
    }
  }

  if (step === "confirmation") {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-green-600 mb-2">Bestellung erfolgreich!</h1>
          <p className="text-gray-600">Vielen Dank für Ihre Bestellung</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Bestelldetails</h2>
          <div className="space-y-2 text-left">
            <div className="flex justify-between">
              <span>Bestellnummer:</span>
              <span className="font-mono">{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span>Gesamtbetrag:</span>
              <span className="font-semibold">€{totalWithShipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>E-Mail:</span>
              <span>{billingData.email}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Sie erhalten in Kürze eine Bestätigungs-E-Mail mit allen Details zu Ihrer Bestellung.
        </p>

        <Button onClick={onBack} className="bg-[#000000] hover:bg-[#333333]">
          Zurück zum Shop
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={onBack} className="mr-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück
        </Button>
        <h1 className="text-2xl font-bold">Kasse</h1>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center mb-8">
        {["billing", "shipping", "payment"].map((stepName, index) => (
          <div key={stepName} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step === stepName
                  ? "bg-[#000000] text-white"
                  : index < ["billing", "shipping", "payment"].indexOf(step)
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600"
              }`}
            >
              {index + 1}
            </div>
            <span className="ml-2 text-sm font-medium capitalize">{stepName}</span>
            {index < 2 && <div className="w-12 h-0.5 bg-gray-200 mx-4" />}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {step === "billing" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Rechnungsadresse</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Vorname *</Label>
                  <Input
                    id="firstName"
                    value={billingData.firstName}
                    onChange={(e) => setBillingData({ ...billingData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nachname *</Label>
                  <Input
                    id="lastName"
                    value={billingData.lastName}
                    onChange={(e) => setBillingData({ ...billingData, lastName: e.target.value })}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={billingData.email}
                    onChange={(e) => setBillingData({ ...billingData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="country">Land *</Label>
                  <Select
                    value={billingData.country}
                    onValueChange={(value) => setBillingData({ ...billingData, country: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DE">Deutschland</SelectItem>
                      <SelectItem value="AT">Österreich</SelectItem>
                      <SelectItem value="CH">Schweiz</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div></div> {/* Empty div to maintain grid layout */}
                <div className="md:col-span-2">
                  <Label htmlFor="address">Adresse *</Label>
                  <Input
                    id="address"
                    value={billingData.address}
                    onChange={(e) => setBillingData({ ...billingData, address: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="city">Stadt *</Label>
                  <Input
                    id="city"
                    value={billingData.city}
                    onChange={(e) => setBillingData({ ...billingData, city: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode">PLZ *</Label>
                  <Input
                    id="postalCode"
                    value={billingData.postalCode}
                    onChange={(e) => setBillingData({ ...billingData, postalCode: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {step === "shipping" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Lieferadresse</h2>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sameAsShipping"
                  checked={sameAsShipping}
                  onCheckedChange={(checked) => setSameAsShipping(checked as boolean)}
                />
                <Label htmlFor="sameAsShipping">Gleiche Adresse wie Rechnungsadresse</Label>
              </div>

              {!sameAsShipping && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="shippingFirstName">Vorname *</Label>
                    <Input
                      id="shippingFirstName"
                      value={shippingData.firstName}
                      onChange={(e) => setShippingData({ ...shippingData, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="shippingLastName">Nachname *</Label>
                    <Input
                      id="shippingLastName"
                      value={shippingData.lastName}
                      onChange={(e) => setShippingData({ ...shippingData, lastName: e.target.value })}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="company">Firma (optional)</Label>
                    <Input
                      id="company"
                      value={shippingData.company}
                      onChange={(e) => setShippingData({ ...shippingData, company: e.target.value })}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="shippingAddress">Adresse *</Label>
                    <Input
                      id="shippingAddress"
                      value={shippingData.address}
                      onChange={(e) => setShippingData({ ...shippingData, address: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="shippingCity">Stadt *</Label>
                    <Input
                      id="shippingCity"
                      value={shippingData.city}
                      onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="shippingPostalCode">PLZ *</Label>
                    <Input
                      id="shippingPostalCode"
                      value={shippingData.postalCode}
                      onChange={(e) => setShippingData({ ...shippingData, postalCode: e.target.value })}
                    />
                  </div>
                </div>
              )}

              <div className="border rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-gray-600" />
                  <div>
                    <h3 className="font-semibold">Standard Versand</h3>
                    <p className="text-sm text-gray-600">3-5 Werktage • €{shippingCost.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === "payment" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Zahlungsmethode</h2>

              <div className="space-y-3">
                <div
                  className={`border rounded-lg p-4 cursor-pointer ${
                    paymentMethod === "card" ? "border-[#000000] bg-gray-50" : "border-gray-200"
                  }`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-5 h-5" />
                    <span className="font-medium">Kreditkarte</span>
                  </div>
                </div>

                <div
                  className={`border rounded-lg p-4 cursor-pointer ${
                    paymentMethod === "paypal" ? "border-[#000000] bg-gray-50" : "border-gray-200"
                  }`}
                  onClick={() => setPaymentMethod("paypal")}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-blue-600 rounded"></div>
                    <span className="font-medium">PayPal</span>
                  </div>
                </div>

                <div
                  className={`border rounded-lg p-4 cursor-pointer ${
                    paymentMethod === "bank" ? "border-[#000000] bg-gray-50" : "border-gray-200"
                  }`}
                  onClick={() => setPaymentMethod("bank")}
                >
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5" />
                    <span className="font-medium">Banküberweisung</span>
                  </div>
                </div>
              </div>

              {paymentMethod === "card" && (
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="cardName">Name auf der Karte *</Label>
                    <Input
                      id="cardName"
                      value={cardData.name}
                      onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="cardNumber">Kartennummer *</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={cardData.number}
                      onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="expiry">Ablaufdatum *</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      value={cardData.expiry}
                      onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV *</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={cardData.cvv}
                      onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => {
                if (step === "shipping") setStep("billing")
                else if (step === "payment") setStep("shipping")
              }}
              disabled={step === "billing"}
            >
              Zurück
            </Button>
            <Button
              onClick={handleNextStep}
              disabled={
                (step === "billing" && !validateBilling()) ||
                (step === "shipping" && !validateShipping()) ||
                (step === "payment" && !validatePayment()) ||
                isProcessing
              }
              className="bg-[#000000] hover:bg-[#333333]"
            >
              {isProcessing ? "Wird verarbeitet..." : step === "payment" ? "Jetzt kaufen" : "Weiter"}
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg sticky top-6">
            <h3 className="text-lg font-semibold mb-4">Bestellübersicht</h3>

            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{item.name}</h4>
                    {item.size && <p className="text-xs text-gray-500">Größe: {item.size}</p>}
                    <p className="text-sm">Menge: {item.quantity}</p>
                  </div>
                  <span className="text-sm font-semibold">€{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Zwischensumme:</span>
                <span>€{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Versand:</span>
                <span>€{shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>MwSt. (19%):</span>
                <span>€{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold border-t pt-2">
                <span>Gesamt:</span>
                <span>€{totalWithShipping.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
