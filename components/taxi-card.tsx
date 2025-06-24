import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Clock, IndianRupee, PhoneOutgoing, PlusCircle } from "lucide-react"

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
  image: string
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
  const whatsappMessage = `Hello, I would like to book the ${taxi.name} (ID: ${taxi.id}).`
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <Card className="w-full max-w-md bg-card text-card-foreground border-border shadow-lg overflow-hidden flex flex-col">
      <CardHeader className="p-0">
        <div className="relative w-full h-56 sm:h-64">
          <Image
            src={taxi.image || "/placeholder.svg"}
            alt={taxi.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
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
