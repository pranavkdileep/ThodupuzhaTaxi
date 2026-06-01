"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon, MapPinIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { tourPackages } from "@/lib/tour-packages";

export function TourPackagesSlider() {
  const [currentPackage, setCurrentPackage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPackage((prev) => (prev + 1) % tourPackages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const nextPackage = () => {
    setCurrentPackage((prev) => (prev + 1) % tourPackages.length);
  };

  const prevPackage = () => {
    setCurrentPackage(
      (prev) => (prev - 1 + tourPackages.length) % tourPackages.length
    );
  };

  return (
    <section id="tour-packages" className="py-12 md:py-16 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
            <MapPinIcon size={16} /> Kerala Trips
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3">
            Tour Packages
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Choose popular Kerala destinations and travel comfortably with Pazheri Cabs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentPackage * 100}%)` }}
            >
              {tourPackages.map((tourPackage) => (
                <article key={tourPackage.title} className="min-w-full">
                  <div className="grid md:grid-cols-[1.15fr_0.85fr]">
                    <div className="relative h-64 sm:h-80 md:h-[28rem]">
                      <Image
                        src={tourPackage.image}
                        alt={`${tourPackage.title} tour package`}
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent md:hidden" />
                    </div>

                    <div className="flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-10">
                      <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                        {tourPackage.title}
                      </h3>
                      <p className="text-muted-foreground mt-4 leading-relaxed">
                        {tourPackage.description}
                      </p>
                      <Button
                        asChild
                        size="lg"
                        className="mt-7 bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Link href={tourPackage.url}>
                          More Info
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            onClick={prevPackage}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition-colors hover:bg-black/80"
            aria-label="Previous tour package"
            type="button"
          >
            <ChevronLeftIcon size={22} />
          </button>
          <button
            onClick={nextPackage}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition-colors hover:bg-black/80"
            aria-label="Next tour package"
            type="button"
          >
            <ChevronRightIcon size={22} />
          </button>

          <div className="mt-5 flex justify-center gap-2">
            {tourPackages.map((tourPackage, index) => (
              <button
                key={tourPackage.title}
                onClick={() => setCurrentPackage(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentPackage ? "w-8 bg-primary" : "w-2.5 bg-primary/35"
                }`}
                aria-label={`Show ${tourPackage.title}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
