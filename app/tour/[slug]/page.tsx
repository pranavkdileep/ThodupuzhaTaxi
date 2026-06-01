import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeftIcon, CheckCircleIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TourImageSlider } from "@/components/tour-image-slider";
import { getTourPackage, tourPackages, tourVehicleRates } from "@/lib/tour-packages";

const WHATSAPP_CONTACT_NUMBER = "917306392309";

interface TourPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return tourPackages.map((tourPackage) => ({ slug: tourPackage.slug }));
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tourPackage = getTourPackage(slug);

  if (!tourPackage) {
    return {
      title: "Tour Package Not Found | Pazheri Cab Service",
    };
  }

  return {
    title: `${tourPackage.title} Tour Package | Pazheri Cab Service`,
    description: tourPackage.description,
    openGraph: {
      title: `${tourPackage.title} Tour Package`,
      description: tourPackage.description,
      images: [tourPackage.image],
    },
  };
}

export default async function TourPackagePage({ params }: TourPageProps) {
  const { slug } = await params;
  const tourPackage = getTourPackage(slug);

  if (!tourPackage) {
    notFound();
  }

  const whatsappLink = `https://wa.me/${WHATSAPP_CONTACT_NUMBER}?text=${encodeURIComponent(
    `Hello, I need more details about the ${tourPackage.title} tour package.`
  )}`;

  return (
    <main className="min-h-dvh bg-background text-foreground">
      <section className="relative overflow-hidden bg-card">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={tourPackage.image}
            alt={`${tourPackage.title} background`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container relative mx-auto px-4 py-10 md:py-16">
          <Button
            asChild
            variant="outline"
            className="mb-8 border-primary text-primary hover:bg-primary/10 hover:text-primary bg-black/20"
          >
            <Link href="/#tour-packages">
              <ArrowLeftIcon size={18} className="mr-2" /> Back to Tours
            </Link>
          </Button>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/90">
                Kerala Tour Package
              </p>
              <h1 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
                {tourPackage.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/85">
                {tourPackage.longDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <PhoneIcon size={20} className="mr-2" /> Enquire on WhatsApp
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 hover:text-primary bg-transparent"
                >
                  <a href={`tel:+${WHATSAPP_CONTACT_NUMBER}`}>
                    <PhoneIcon size={20} className="mr-2" /> Call Now
                  </a>
                </Button>
              </div>
            </div>

            <TourImageSlider title={tourPackage.title} images={tourPackage.images} />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8">
              <h2 className="text-2xl font-bold text-primary md:text-3xl">
                Package Details
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {tourPackage.description} The final trip plan can be adjusted based on your pickup location, preferred stops, vehicle type, passenger count, and travel dates.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Highlights</h3>
                  <ul className="mt-4 space-y-3">
                    {tourPackage.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-muted-foreground">
                        <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground">Includes</h3>
                  <ul className="mt-4 space-y-3">
                    {tourPackage.inclusions.map((inclusion) => (
                      <li key={inclusion} className="flex gap-3 text-muted-foreground">
                        <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-black/25 p-6 shadow-lg md:p-8">
              <h2 className="text-2xl font-bold text-primary md:text-3xl">
                Vehicle Rates
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Per-day package rates. Toll, parking, permit, driver bata, and route-based charges may vary by trip.
              </p>
              <div className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
                {tourVehicleRates.map((rate) => (
                  <div
                    key={rate.vehicle}
                    className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="font-medium text-foreground">{rate.vehicle}</span>
                    <span className="font-bold text-primary">{rate.rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            Gallery
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tourPackage.images.map((image) => (
              <div
                key={image}
                className="relative h-56 overflow-hidden rounded-xl border border-border bg-card shadow-md"
              >
                <Image
                  src={image}
                  alt={`${tourPackage.title} gallery image`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
