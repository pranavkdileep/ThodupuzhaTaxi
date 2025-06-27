import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Clock, IndianRupee, PhoneOutgoing, PlusCircle } from "lucide-react"
import { useEffect, useState } from "react"

interface PricingDetail {
  durationDistance: string
  price: string
}

interface ExtraCharge {
  label: string
  price: string
}

export interface Taxi {
  id: string
  name: string
  images: string[]
  imageAlt: string
  description: string
  pricing: PricingDetail[]
  extraCharges: ExtraCharge[]
}

interface TaxiCardProps {
  taxi: Taxi
  whatsappNumber: string
}

export function TaxiCard({ taxi, whatsappNumber }: TaxiCardProps) {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    if (taxi.images.length <= 1) return
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % taxi.images.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [taxi.images.length])

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev - 1 + taxi.images.length) % taxi.images.length)
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev + 1) % taxi.images.length)
  }
  const whatsappMessage = "Hello, I'd like to book a taxi from, please give me a call back"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <Card className="w-full max-w-md bg-card text-card-foreground border-border shadow-lg overflow-hidden flex flex-col">
      <CardHeader className="p-0">
        <div className="relative w-full h-56 sm:h-64 group">
          {taxi.images.map((img, idx) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-500 ${idx === currentImage ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={img}
                alt={taxi.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
          {taxi.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                aria-label="Previous image"
                type="button"
              >
                &#8592;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                aria-label="Next image"
                type="button"
              >
                &#8594;
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {taxi.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={e => { e.stopPropagation(); setCurrentImage(idx) }}
                    className={`w-2 h-2 rounded-full ${idx === currentImage ? "bg-white" : "bg-white/50"} transition-colors`}
                    aria-label={`Go to image ${idx + 1}`}
                    type="button"
                  />
                ))}
              </div>
            </>
          )}
        </div>
    
        <div className="p-6">
          <CardTitle className="text-3xl font-bold text-primary flex items-center">
            <Car size={28} className="mr-3 text-primary/80" />
            {taxi.name}
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-2 text-base">{taxi.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-4 flex-grow">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary/90 border-b border-primary/30 pb-2">
              Standard Rates
            </h3>
            <ul className="space-y-2 text-sm">
              {taxi.pricing.map((item, index) => (
                <li key={index} className="flex justify-between items-center py-1">
                  <span className="flex items-center">
                    <Clock size={16} className="inline mr-2 text-primary/70" />
                    {item.durationDistance}
                  </span>
                  <span className="font-semibold text-base">
                    <IndianRupee size={15} className="inline mr-1" />
                    {item.price.replace("Rs. ", "").replace("/-", "")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {taxi.extraCharges.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary/90 border-b border-primary/30 pb-2">
                Additional Charges
              </h3>
              <ul className="space-y-2 text-sm">
                {taxi.extraCharges.map((item, index) => (
                  <li key={index} className="flex justify-between items-center py-1">
                    <span className="flex items-center">
                      <PlusCircle size={16} className="inline mr-2 text-primary/70" />
                      {item.label}
                    </span>
                    <span className="font-semibold text-base">
                      <IndianRupee size={15} className="inline mr-1" />
                      {item.price.replace("Rs. ", "").replace("/-", "")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6 bg-muted/10 mt-auto">
        <Button
          asChild
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-3 transition-transform duration-150 ease-in-out hover:scale-105 focus:scale-105"
        >
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <PhoneOutgoing size={22} className="mr-2" /> Book Now
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
