import { Button } from "@/components/ui/button"
import { TaxiCard, type Taxi } from "@/components/taxi-card"
import {
  CarIcon,
  MapPinIcon,
  PhoneIcon,
  PlaneTakeoffIcon,
  LandmarkIcon,
  HeartIcon,
  PackageIcon,
  BusIcon,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const taxisData: Taxi[] = [
  {
    id: "hatchback-pazheri",
    name: "Hatchback",
    image: "/placeholder.svg?width=500&height=300&text=Hatchback+Yellow",
    imageAlt: "Yellow hatchback taxi for Pazheri Cab Service",
    description: "Economical & agile. Ideal for city rides and small groups in and around Thodupuzha.",
    pricing: [
      { durationDistance: "4 Hrs / 40 Kms", price: "Rs. 900/-" },
      { durationDistance: "8 Hrs / 80 Kms", price: "Rs. 1800/-" },
      { durationDistance: "12 Hrs / 120 Kms", price: "Rs. 2500/-" },
    ],
    extraCharges: [
      { label: "Extra Hours", price: "Rs. 200/-" },
      { label: "Extra Km. City", price: "Rs. 15/-" },
      { label: "Outstation (Min. 150 Kms)", price: "Rs. 2600/-" },
      { label: "Extra Kms (Outstation)", price: "Rs. 14/-" },
    ],
  },
  {
    id: "sedan-pazheri",
    name: "Sedan",
    image: "/placeholder.svg?width=500&height=300&text=Sedan+Black",
    imageAlt: "Black sedan taxi for Pazheri Cab Service",
    description: "Comfortable & spacious. Perfect for families, business trips, and longer journeys across Kerala.",
    pricing: [
      { durationDistance: "4 Hrs / 40 Kms", price: "Rs. 1000/-" },
      { durationDistance: "8 Hrs / 80 Kms", price: "Rs. 2000/-" },
      { durationDistance: "12 Hrs / 120 Kms", price: "Rs. 2800/-" },
    ],
    extraCharges: [
      { label: "Extra Hours", price: "Rs. 250/-" },
      { label: "Extra Km. City", price: "Rs. 16/-" },
      { label: "Outstation (Min. 150 Kms)", price: "Rs. 2800/-" },
      { label: "Extra Kms (Outstation)", price: "Rs. 16/-" },
    ],
  },
]

const WHATSAPP_CONTACT_NUMBER = "919544047655" 
const CONTACT_EMAIL = "contact@thodupuzhataxi.com"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="py-6 md:py-8 bg-black backdrop-blur-md shadow-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center mb-1">
              <CarIcon className="h-10 w-10 md:h-12 md:w-12 text-primary mr-2 md:mr-3" />
              <h1 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight">Pazheri Cab Service</h1>
            </div>
            <p className="text-sm md:text-base text-muted-foreground font-medium">
              “24/7 Cabs from Thodupuzha to All Over Kerala”
            </p>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section id="intro-banner" className="py-12 md:py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?width=600&height=400&text=Pazheri+Cab+Thodupuzha"
                  alt="Pazheri Cab Service taxi in Thodupuzha, Kerala"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Reliable Taxi Service in Thodupuzha
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Based in Thodupuzha, Pazheri Cab Service offers dependable cab services across Kerala. We cover
                  airport pickups, wedding trips, temple tours, family holidays & more.
                </p>
                <p className="text-md text-muted-foreground/80 mb-8">
                  Your journey, our priority. Book your ride with us today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link
                      href={`https://wa.me/${WHATSAPP_CONTACT_NUMBER}?text=${encodeURIComponent("Hello Pazheri Cab Service, I'd like to book a taxi from Thodupuzha.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PhoneIcon size={20} className="mr-2" /> Book via WhatsApp
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    <a href={`tel:+${WHATSAPP_CONTACT_NUMBER}`}>
                      <PhoneIcon size={20} className="mr-2" /> Call to Book
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="our-services" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-primary">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: PlaneTakeoffIcon, text: "Airport Pickup/Drop (Cochin, Calicut)" },
                { icon: PackageIcon, text: "All Kerala Tour Packages" },
                { icon: LandmarkIcon, text: "Temple Tour Packages" },
                { icon: HeartIcon, text: "Wedding Trips" },
                { icon: CarIcon, text: "Hatchback, Sedan, SUV Rentals" },
                { icon: BusIcon, text: "Tempo Traveller & Mini Bus" },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md hover:shadow-primary/30 transition-shadow"
                >
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground">{service.text}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="fleet-rates" className="py-12 md:py-16 bg-black/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-primary">
              Our Fleet & Indicative Rates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center items-stretch">
              {taxisData.map((taxi) => (
                <TaxiCard key={taxi.id} taxi={taxi} whatsappNumber={WHATSAPP_CONTACT_NUMBER} />
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-10 md:mt-12 text-lg">
              We also offer <strong className="text-primary/90">SUVs, Tempo Travellers, and Mini Buses</strong>.
              <br />
              Please contact us for custom quotes and availability for your specific needs.
            </p>
          </div>
        </section>

        <section id="contact-cta" className="py-16 md:py-20 text-center bg-card/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Book Your Pazheri Cab Today!</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Travel anywhere in Kerala from Thodupuzha with comfort and reliability.
              <br />
              Contact Pazheri Cab Service now for a seamless booking experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-8"
              >
                <Link
                  href={`https://wa.me/${WHATSAPP_CONTACT_NUMBER}?text=${encodeURIComponent("Hello Pazheri Cab Service, I'd like to book a taxi from Thodupuzha.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PhoneIcon size={20} className="mr-2" /> Book on WhatsApp
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary w-full sm:w-auto text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-8 bg-transparent"
              >
                <a href={`tel:+${WHATSAPP_CONTACT_NUMBER}`}>
                  <PhoneIcon size={20} className="mr-2" /> Call Us Direct
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-black text-center text-muted-foreground">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <p className="text-lg font-semibold text-primary">Pazheri Cab Service</p>
            <p className="text-sm">Thodupuzha, Kerala</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-4 text-sm">
            <a
              href={`tel:+${WHATSAPP_CONTACT_NUMBER.slice(0, 2)}-${WHATSAPP_CONTACT_NUMBER.slice(2)}`}
              className="hover:text-primary transition-colors flex items-center"
            >
              <PhoneIcon size={16} className="inline mr-1.5" /> +{WHATSAPP_CONTACT_NUMBER.slice(0, 2)}{" "}
              {WHATSAPP_CONTACT_NUMBER.slice(2, 7)} {WHATSAPP_CONTACT_NUMBER.slice(7)}
            </a>
            <Link href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary transition-colors flex items-center">
              <MapPinIcon size={16} className="inline mr-1.5" /> {CONTACT_EMAIL}
            </Link>
          </div>
          <p className="text-sm">Copyright &copy; {new Date().getFullYear()} Pazheri Cab Service.</p>
          <p className="text-xs mt-1">“24/7 Cabs from Thodupuzha to All Over Kerala”</p>
        </div>
      </footer>
    </div>
  )
}
