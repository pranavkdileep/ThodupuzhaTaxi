"use client";
import { Button } from "@/components/ui/button";
import { TaxiCard, type Taxi } from "@/components/taxi-card";
import {
  CarIcon,
  MapPinIcon,
  PhoneIcon,
  PlaneTakeoffIcon,
  LandmarkIcon,
  HeartIcon,
  PackageIcon,
  BusIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  DollarSignIcon,
  UsersIcon,
  StarIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageSlide {
  src: string;
  title: string;
}

const imageSlides: ImageSlide[] = [
  {
    src: "/placeholder.svg?width=600&height=400&text=Pazheri+Cab+Service",
    title: "Premium Taxi Service",
  },
  {
    src: "/placeholder.svg?width=600&height=400&text=Airport+Pickup",
    title: "Airport Transfers",
  },
  {
    src: "/placeholder.svg?width=600&height=400&text=Kerala+Tours",
    title: "Kerala Tour Packages",
  },
  {
    src: "/placeholder.svg?width=600&height=400&text=Wedding+Transport",
    title: "Wedding Transportation",
  },
  {
    src: "/placeholder.svg?width=600&height=400&text=Temple+Tours",
    title: "Temple Tour Services",
  },
];

const taxisData: Taxi[] = [
  {
    id: "hatchback-pazheri",
    name: "Hatchback",
    image: "/placeholder.svg?width=500&height=300&text=Hatchback+Yellow",
    imageAlt: "Yellow hatchback taxi for Pazheri Cab Service",
    description:
      "Economical & agile. Ideal for city rides and small groups in and around Thodupuzha.",
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
    description:
      "Comfortable & spacious. Perfect for families, business trips, and longer journeys across Kerala.",
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
];

const WHATSAPP_CONTACT_NUMBER = "919544047655";
const CONTACT_EMAIL = "contact@thodupuzhataxi.com";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageSlides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % imageSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + imageSlides.length) % imageSlides.length
    );
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="py-6 md:py-8 bg-transparent top-0 z-50">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Logo and Company Info */}
      <Link href="/" className="flex flex-col md:flex-row items-center md:items-start group text-center md:text-left">
        <Image
          src="/logo.png"
          alt="Pazheri Cab Service Logo"
          width={160}
          height={160}
          sizes="160px"
          className="object-cover h-60 w-60 md:h-14 md:w-14 mb-2 md:mb-0 md:mr-3 md:mr-4"
        />
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary tracking-tight group-hover:text-primary/90 transition-colors">
            Pazheri Cab Service
          </h1>
          <p className="text-xs md:text-sm text-primary/80 font-medium leading-tight">
            Your Rides, Our Responsibility
          </p>
          <p className="text-xs text-muted-foreground mt-0.5 ">
            Trusted Kerala-wide cab service. 
            <br/>
            24×7 availability at Cochin,
            Trivandrum & Calicut Airports.
          </p>
        </div>
      </Link>

      {/* Call Button */}
      <Button
        asChild
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg w-full md:w-auto"
      >
        <a
          href={`tel:+${WHATSAPP_CONTACT_NUMBER}`}
          className="flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3"
        >
          <PhoneIcon size={18} className="animate-pulse" />
          <span className="font-semibold text-sm md:text-base">
            +{WHATSAPP_CONTACT_NUMBER.slice(0, 2)}{" "}
            {WHATSAPP_CONTACT_NUMBER.slice(2, 7)}{" "}
            {WHATSAPP_CONTACT_NUMBER.slice(7)}
          </span>
        </a>
      </Button>
    </div>
  </div>
</header>

      <main className="flex-1">
        <section id="intro-banner" className="py-12 md:py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg group">
                {/* Image Slider */}
                <div className="relative w-full h-full">
                  {imageSlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image
                        src={slide.src}
                        alt={`${slide.title} - Pazheri Cab Service`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      {/* Title Overlay */}
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-md">
                        <h3 className="text-sm md:text-base font-semibold">
                          {slide.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Next image"
                >
                  <ChevronRightIcon size={20} />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {imageSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentSlide ? "bg-white" : "bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Comfortable, Safe & Reliable Taxi Service Across Kerala
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                Pazheri Cabs is one of Kerala’s most trusted taxi services, offering 24×7 cab availability across the state, with quick service at major hubs including Cochin, Trivandrum, and Calicut airports. While our head office is based in Thodupuzha, our operations extend throughout every corner of Kerala.
                </p>
                <p className="text-md text-muted-foreground/80 mb-8">
                  Your journey, our priority. Book your ride with us today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link
                      href={`https://wa.me/${WHATSAPP_CONTACT_NUMBER}?text=${encodeURIComponent(
                        "Hello Pazheri Cab Service, I'd like to book a taxi from Thodupuzha."
                      )}`}
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-primary">
              Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: PlaneTakeoffIcon,
                  text: "Airport Pickup/Drop (Cochin, Calicut)",
                },
                { icon: PackageIcon, text: "All Kerala Tour Packages" },
                { icon: LandmarkIcon, text: "Temple Tour Packages" },
                { icon: HeartIcon, text: "Wedding Trips" },
                { icon: CarIcon, text: "Corporate & Business Trips" },
                { icon: BusIcon, text: "Outstation Travel across Kerala & South India" },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md hover:shadow-primary/30 transition-shadow"
                >
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.text}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-choose-us" className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-primary">
              Why Choose Pazheri Cabs?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: CarIcon,
                  text: "Kerala's most dependable taxi service",
                  description: "Trusted by thousands of customers across Kerala for reliable transportation"
                },
                {
                  icon: ShieldCheckIcon,
                  text: "100% safety assurance for every trip",
                  description: "Your safety is our top priority with well-maintained vehicles and safety protocols"
                },
                {
                  icon: ClockIcon,
                  text: "Trained, courteous, on-time drivers",
                  description: "Professional drivers who know Kerala's roads and prioritize punctuality"
                },
                {
                  icon: DollarSignIcon,
                  text: "All vehicle types at the best price",
                  description: "From hatchbacks to buses, competitive rates for every budget and need"
                },
                {
                  icon: PlaneTakeoffIcon,
                  text: "24×7 airport pickup & drop availability",
                  description: "Round-the-clock service at Cochin, Trivandrum & Calicut airports"
                },
                {
                  icon: UsersIcon,
                  text: "Thousands of happy riders across the state",
                  description: "Join our satisfied customer base who trust us for their travel needs"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-background rounded-lg border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.text}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="fleet-rates" className="py-12 md:py-16 bg-black/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-primary">
              Our Rates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center items-stretch">
              {taxisData.map((taxi) => (
                <TaxiCard
                  key={taxi.id}
                  taxi={taxi}
                  whatsappNumber={WHATSAPP_CONTACT_NUMBER}
                />
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-10 md:mt-12 text-lg">
              We also offer{" "}
              <strong className="text-primary/90">
                SUVs, Tempo Travellers, and Mini Buses
              </strong>
              .
              <br />
              Please contact us for custom quotes and availability for your
              specific needs.
            </p>
          </div>
        </section>

        <section
          id="contact-cta"
          className="py-16 md:py-20 text-center bg-card/50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            A Name You Can Trust — Pazheri Group
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Pazheri Cab Service is part of the Pazheri Group, a respected name in Kerala known for its excellence in various service sectors.
              <br />
              Built on decades of commitment, customer satisfaction, and community trust, the Pazheri name represents genuine care and professional standards.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-8"
              >
                <Link
                  href={`https://wa.me/${WHATSAPP_CONTACT_NUMBER}?text=${encodeURIComponent(
                    "Hello Pazheri Cab Service, I'd like to book a taxi from Thodupuzha."
                  )}`}
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
            <p className="text-lg font-semibold text-primary">
              Pazheri Cab Service
            </p>
            <p className="text-sm">Thodupuzha, Kerala</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-4 text-sm">
            <a
              href={`tel:+${WHATSAPP_CONTACT_NUMBER.slice(
                0,
                2
              )}-${WHATSAPP_CONTACT_NUMBER.slice(2)}`}
              className="hover:text-primary transition-colors flex items-center"
            >
              <PhoneIcon size={16} className="inline mr-1.5" /> +
              {WHATSAPP_CONTACT_NUMBER.slice(0, 2)}{" "}
              {WHATSAPP_CONTACT_NUMBER.slice(2, 7)}{" "}
              {WHATSAPP_CONTACT_NUMBER.slice(7)}
            </a>
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-primary transition-colors flex items-center"
            >
              <MapPinIcon size={16} className="inline mr-1.5" /> {CONTACT_EMAIL}
            </Link>
          </div>
          <p className="text-sm">
            Copyright &copy; {new Date().getFullYear()} Pazheri Cab Service.
          </p>
          <p className="text-xs mt-1">
            “24/7 Cabs from Thodupuzha to All Over Kerala”
          </p>
        </div>
      </footer>
    </div>
  );
}
