import React from 'react'
import { Button } from './ui/button'
import { XIcon } from 'lucide-react'

interface OfferCardProps {
  setShowOffer: (show: boolean) => void;
  WHATSAPP_CONTACT_NUMBER: string;
}

function Offercard({ setShowOffer, WHATSAPP_CONTACT_NUMBER }: OfferCardProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-xs w-full p-6 border-2 border-primary animate-in fade-in zoom-in">
            <button
              onClick={() => setShowOffer(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-primary transition-colors"
              aria-label="Close offer"
              type="button"
            >
              <XIcon size={20} />
            </button>
            <div className="flex flex-col items-center text-center">
              <span className="text-xs uppercase tracking-widest text-primary font-bold mb-2">
                Special Offer!
              </span>
              <h3 className="text-xl font-bold text-primary mb-2">
                Up & Down Discount
              </h3>
              <p className="text-base text-gray-700 mb-4">
                Book a round trip between <span className="font-semibold text-primary">Thodupuzha</span> and <span className="font-semibold text-primary">Ernakulam</span> and get a <span className="font-semibold">special discount</span>!
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base py-2 mt-2"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_CONTACT_NUMBER}?text=${encodeURIComponent(
                    "I want to book a Thodupuzha–Ernakulam up & down taxi and avail the special offer!"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
              </Button>
            </div>
          </div>
        </div>
  )
}

export default Offercard