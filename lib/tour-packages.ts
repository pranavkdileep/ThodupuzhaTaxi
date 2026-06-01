export interface TourVehicleRate {
  vehicle: string;
  rate: string;
}

export interface TourPackage {
  slug: string;
  url: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  highlights: string[];
  inclusions: string[];
}

export const tourVehicleRates: TourVehicleRate[] = [
  { vehicle: "Sedan (Dzire / Etios / Aura)", rate: "Rs. 3,500/- Per Day" },
  { vehicle: "Ertiga", rate: "Rs. 4,500/- Per Day" },
  { vehicle: "Innova", rate: "Rs. 5,000/- Per Day" },
  { vehicle: "Innova Crysta", rate: "Rs. 5,500/- Per Day" },
  { vehicle: "Tempo Traveller 12 Seater", rate: "Rs. 7,500/- Per Day" },
  { vehicle: "Tempo Traveller 17 Seater", rate: "Rs. 8,500/- Per Day" },
  { vehicle: "Tempo Traveller 20 Seater", rate: "Rs. 9,500/- Per Day" },
  { vehicle: "Urbania 13 Seater", rate: "Rs. 10,500/- Per Day" },
];

export const tourPackages: TourPackage[] = [
  {
    slug: "munnar-hill-station",
    url: "/tour/munnar-hill-station",
    title: "Munnar Hill Station",
    description:
      "Enjoy misty hills, tea gardens, viewpoints, and a relaxing Kerala mountain escape.",
    longDescription:
      "Munnar is one of Kerala's most loved hill destinations, known for tea plantations, cool weather, mountain roads, waterfalls, and scenic viewpoints. Pazheri Cabs helps you plan a comfortable private cab trip from Thodupuzha or nearby pickup points with flexible stopovers and return travel.",
    image: "/media/munnar.jpg",
    images: ["/media/munnar.jpg", "/media/car1.png", "/media/car2.png"],
    highlights: [
      "Tea garden viewpoints",
      "Waterfalls and scenic photo stops",
      "Family-friendly hill station travel",
      "Flexible pickup and return timing",
    ],
    inclusions: [
      "Private cab with experienced driver",
      "Pickup and drop as per plan",
      "Vehicle options for families and groups",
      "Custom route planning support",
    ],
  },
  {
    slug: "alappuzha-backwaters",
    url: "/tour/alappuzha-backwaters",
    title: "Alappuzha Backwaters",
    description:
      "Plan a peaceful backwater trip with comfortable pickup, sightseeing, and return travel.",
    longDescription:
      "Alappuzha is popular for backwaters, houseboats, beaches, village views, and relaxed day trips. Our cab package is ideal for families, couples, and groups who need reliable travel to Alappuzha with local sightseeing time and a comfortable return journey.",
    image: "/media/ap1.jpeg",
    images: ["/media/ap1.jpeg", "/media/ap2.jpeg", "/media/car2.png"],
    highlights: [
      "Backwater and houseboat access",
      "Beach and local sightseeing stops",
      "Comfortable day-trip planning",
      "Suitable for family and group tours",
    ],
    inclusions: [
      "Private cab for the full day",
      "Driver assistance for route timing",
      "Pickup and drop from selected location",
      "Vehicle selection based on group size",
    ],
  },
  {
    slug: "temple-tour-packages",
    url: "/tour/temple-tour-packages",
    title: "Temple Tour Packages",
    description:
      "Visit famous temples across Kerala with safe, on-time, and family-friendly cab service.",
    longDescription:
      "Plan temple visits across Kerala with clean vehicles, punctual drivers, and flexible routes. This package can be customized for single-day temple visits or multi-destination spiritual trips with comfortable travel for elders, families, and groups.",
    image: "/media/sp.jpeg",
    images: ["/media/sp.jpeg", "/media/sp2.jpeg", "/media/sp3.jpeg"],
    highlights: [
      "Custom temple route planning",
      "Early morning and late-night travel support",
      "Comfortable travel for elders and families",
      "Kerala-wide pilgrimage coverage",
    ],
    inclusions: [
      "Private cab with professional driver",
      "Flexible pickup timing",
      "Multiple vehicle options",
      "Support for one-day and multi-day plans",
    ],
  },
  {
    slug: "sabarimala-pilgrimage",
    url: "/tour/sabarimala-pilgrimage",
    title: "Sabarimala Pilgrimage",
    description:
      "Reliable vehicles for Sabarimala trips with flexible pickup and group travel options.",
    longDescription:
      "Book dependable cab service for Sabarimala pilgrimage travel with sedan, SUV, traveller, and Urbania options. We support family and group trips with safe drivers, planned pickup timing, and vehicle choices based on passenger count.",
    image: "/media/sabarimala.jpeg",
    images: ["/media/sabarimala.jpeg", "/taxi/Traveller/traveller.png", "/taxi/Traveller/urbania.png"],
    highlights: [
      "Pilgrimage-focused travel planning",
      "Group vehicle options available",
      "Comfortable long-distance cab service",
      "Flexible pickup and return plan",
    ],
    inclusions: [
      "Private vehicle with experienced driver",
      "Sedan, SUV, traveller, and Urbania options",
      "Pickup and drop from selected location",
      "Custom quote based on route and dates",
    ],
  },
];

export function getTourPackage(slug: string) {
  return tourPackages.find((tourPackage) => tourPackage.slug === slug);
}
