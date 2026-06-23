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
  keywords: string[];
  highlights: string[];
  inclusions: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
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
      "Explore misty tea plantations, waterfalls, and scenic viewpoints in Kerala's most loved hill station.",
    longDescription:
      "Munnar is one of Kerala's most cherished hill stations, renowned for its rolling tea gardens, mist-covered peaks, gushing waterfalls, and lush green valleys. Located in the Western Ghats at an elevation of 1,600 metres, it offers a cool and refreshing escape from the plains. Our private cab packages from Thodupuzha and nearby areas include flexible stopovers at top attractions like Mattupetty Dam, Echo Point, Kundala Lake, Top Station, and Tea Museum. Whether you're travelling with family, friends, or as a couple, we provide comfortable vehicles and experienced drivers to make your Munnar trip seamless and memorable.",
    image: "/media/tour/munnar/1.jpg",
    images: [
      "/media/tour/munnar/1.jpg",
      "/media/tour/munnar/2.jpg",
      "/media/tour/munnar/3.jpg",
      "/media/tour/munnar/4.jpg",
      "/media/tour/munnar/5.jpg",
    ],
    keywords: [
      "Munnar tour package",
      "Munnar taxi from Thodupuzha",
      "Munnar cab package",
      "Munnar sightseeing taxi",
      "Kerala hill station taxi",
    ],
    highlights: [
      "Expansive tea gardens and plantation walks",
      "Waterfalls, dams, and scenic photo points",
      "Pleasant year-round climate",
      "Ideal for families, couples, and groups",
      "Customizable itinerary with flexible stops",
    ],
    inclusions: [
      "Private cab with experienced driver",
      "Pickup and drop as per your plan",
      "Vehicle options from sedan to traveller",
      "Custom route planning assistance",
      "Fuel, toll, and driver charges included",
    ],
    faqs: [
      {
        question: "Do you provide Munnar cab packages from Thodupuzha?",
        answer:
          "Yes, we provide private cab packages from Thodupuzha and nearby areas to Munnar with flexible pickup, sightseeing stops, and return timing.",
      },
      {
        question: "Which places can be covered in a Munnar day trip?",
        answer:
          "Common stops include tea gardens, Mattupetty Dam, Echo Point, Kundala Lake, Top Station, waterfalls, and scenic viewpoints depending on your schedule.",
      },
      {
        question: "Can the Munnar itinerary be customized?",
        answer:
          "Yes, the route and stops can be customized based on your pickup point, travel time, vehicle type, and preferred attractions.",
      },
    ],
  },
  {
    slug: "alappuzha-backwaters",
    url: "/tour/alappuzha-backwaters",
    title: "Alappuzha Backwaters",
    description:
      "Cruise through serene backwaters, houseboats, and palm-fringed canals in the Venice of the East.",
    longDescription:
      "Alappuzha, also known as Alleppey, is the backwater capital of Kerala and a must-visit destination for anyone seeking the tranquil charm of Kerala's waterways. Famous for its houseboat cruises, paddy fields along the Vembanad Lake, and picturesque canals lined with coconut palms, Alappuzha offers a uniquely peaceful experience. Our cab service from Thodupuzha provides a comfortable round trip with ample time for houseboat rides, beach visits, local sightseeing, and relaxed walks along the canal banks. Perfect for families, couples, and groups looking for a serene day trip or weekend getaway.",
    image: "/media/tour/alappuzha/1.jpg",
    images: [
      "/media/tour/alappuzha/1.jpg",
      "/media/tour/alappuzha/2.jpg",
      "/media/tour/alappuzha/3.jpg",
      "/media/tour/alappuzha/4.jpg",
      "/media/tour/alappuzha/5.jpg",
    ],
    keywords: [
      "Alappuzha tour package",
      "Alleppey taxi package",
      "Alappuzha backwaters cab",
      "houseboat taxi Kerala",
      "Alappuzha cab from Thodupuzha",
    ],
    highlights: [
      "Houseboat cruise on Vembanad Lake",
      "Palm-fringed canal and backwater views",
      "Alappuzha Beach and lighthouse visit",
      "Serene village and paddy field scenery",
      "Perfect for photography and relaxation",
    ],
    inclusions: [
      "Private cab for full-day trip",
      "Driver assistance for route and timing",
      "Flexible pickup and drop locations",
      "Vehicle choice based on group size",
      "Customizable sightseeing stops",
    ],
    faqs: [
      {
        question: "Do you arrange cab travel for Alappuzha houseboat trips?",
        answer:
          "Yes, we provide private cab service to Alappuzha for houseboat boarding points, backwater sightseeing, beach visits, and return travel.",
      },
      {
        question: "Is Alappuzha suitable for a one-day trip from Thodupuzha?",
        answer:
          "Yes, Alappuzha is suitable for a day trip with early pickup, backwater or houseboat time, local sightseeing, and return in the evening.",
      },
      {
        question: "Can the cab wait during the houseboat cruise?",
        answer:
          "Yes, waiting time can be planned based on the duration of your cruise and the final trip schedule.",
      },
    ],
  },
  {
    slug: "thekkady-wildlife",
    url: "/tour/thekkady-wildlife",
    title: "Thekkady Wildlife & Spice Tour",
    description:
      "Experience wildlife safaris, spice plantations, and boating at Periyar Tiger Reserve in Thekkady.",
    longDescription:
      "Thekkady is home to the famous Periyar Tiger Reserve, one of India's most iconic wildlife sanctuaries. Nestled in the Western Ghats, it offers boat cruises on Periyar Lake where you can spot elephants, bison, deer, and a variety of bird species in their natural habitat. Thekkady is also known for its sprawling spice plantations — cardamom, pepper, cinnamon, vanilla, and more. Our cab package from Thodupuzha includes comfortable transport, flexible scheduling, and driver support to ensure you enjoy both the wildlife and plantation experiences without any hassle.",
    image: "/media/tour/thekkady/1.jpg",
    images: [
      "/media/tour/thekkady/1.jpg",
      "/media/tour/thekkady/2.jpg",
      "/media/tour/thekkady/3.jpg",
      "/media/tour/thekkady/4.jpg",
      "/media/tour/thekkady/5.jpg",
    ],
    keywords: [
      "Thekkady tour package",
      "Thekkady taxi from Thodupuzha",
      "Periyar Tiger Reserve cab",
      "Thekkady spice plantation tour",
      "Thekkady wildlife taxi package",
    ],
    highlights: [
      "Boat safari at Periyar Tiger Reserve",
      "Wildlife spotting — elephants, bison, deer",
      "Guided spice plantation tours",
      "Scenic lake and forest views",
      "Ayurvedic massage and shopping options",
    ],
    inclusions: [
      "Private cab from pickup to drop",
      "Experienced driver for the route",
      "Flexible timing for safari and plantation visits",
      "Multiple vehicle options available",
      "Custom itinerary support",
    ],
    faqs: [
      {
        question: "Do you provide taxi service to Thekkady and Periyar Tiger Reserve?",
        answer:
          "Yes, we offer private cabs to Thekkady for Periyar boating, wildlife sightseeing, spice plantation visits, and local attractions.",
      },
      {
        question: "Can you plan the trip around Periyar boating timings?",
        answer:
          "Yes, pickup and sightseeing timing can be adjusted around your boating or safari slot when shared in advance.",
      },
      {
        question: "Is Thekkady good for family trips?",
        answer:
          "Yes, Thekkady is family-friendly with boating, plantation tours, cultural shows, shopping, and nature-based sightseeing.",
      },
    ],
  },
  {
    slug: "varkala-beach",
    url: "/tour/varkala-beach",
    title: "Varkala Beach & Cliff Tour",
    description:
      "Visit the stunning cliff-side beaches of Varkala, known for its mineral springs and sunset views.",
    longDescription:
      "Varkala is a breathtaking coastal destination famous for its dramatic cliffs overlooking the Arabian Sea, pristine beaches, and natural mineral springs. The Varkala Cliff is lined with cafes, shops, and resorts offering spectacular sunset views. The nearby Janardhana Swamy Temple and the Sivagiri Mutt add cultural depth to your visit. Our cab package from Thodupuzha ensures a comfortable journey with ample time to explore the beach, cliff, and surrounding attractions. Ideal for couples, friends, and families looking for a rejuvenating coastal escape.",
    image: "/media/tour/varkala/1.jpg",
    images: [
      "/media/tour/varkala/1.jpg",
      "/media/tour/varkala/2.jpg",
      "/media/tour/varkala/3.jpg",
      "/media/tour/varkala/4.jpg",
      "/media/tour/varkala/5.jpg",
    ],
    keywords: [
      "Varkala tour package",
      "Varkala taxi from Thodupuzha",
      "Varkala beach cab package",
      "Varkala cliff tour taxi",
      "Kerala beach taxi package",
    ],
    highlights: [
      "Scenic cliff-top views of the Arabian Sea",
      "Mineral spring bathing at the beach",
      "Sunset viewpoints and cliffside cafes",
      "Visit Janardhana Swamy Temple",
      "Sivagiri Mutt pilgrimage site nearby",
    ],
    inclusions: [
      "Private cab for the entire trip",
      "Driver with local route knowledge",
      "Pickup and drop at your convenience",
      "Vehicle suited to your group size",
      "Flexible stopover planning",
    ],
    faqs: [
      {
        question: "Do you provide cab packages to Varkala Beach?",
        answer:
          "Yes, we provide private cab packages to Varkala Beach and Cliff with flexible pickup, sightseeing time, and return travel.",
      },
      {
        question: "What are the main places covered in Varkala?",
        answer:
          "Popular stops include Varkala Cliff, Papanasam Beach, Janardhana Swamy Temple, Sivagiri Mutt, and sunset viewpoints.",
      },
      {
        question: "Can Varkala be planned as an overnight trip?",
        answer:
          "Yes, we can arrange one-way, round-trip, or multi-day cab service depending on your stay plan.",
      },
    ],
  },
  {
    slug: "kovalam-beach",
    url: "/tour/kovalam-beach",
    title: "Kovalam Beach & Lighthouse Tour",
    description:
      "Relax at the crescent beaches of Kovalam with its iconic lighthouse and vibrant coastal culture.",
    longDescription:
      "Kovalam is an internationally renowned beach destination with three crescent-shaped beaches — Lighthouse Beach, Hawah Beach, and Samudra Beach. The iconic Vizhinjam Lighthouse offers panoramic views of the coastline. Kovalam's calm waters, Ayurvedic massage centres, seafood shacks, and water sports make it a favourite among travellers. Our cab package from Thodupuzha provides comfortable transportation with flexible timing so you can enjoy the sun, sand, and sea at your own pace. Great for families, couples, and solo travellers alike.",
    image: "/media/tour/kovalam/1.jpg",
    images: [
      "/media/tour/kovalam/1.jpg",
      "/media/tour/kovalam/2.jpg",
      "/media/tour/kovalam/3.jpg",
      "/media/tour/kovalam/4.jpg",
      "/media/tour/kovalam/5.jpg",
    ],
    keywords: [
      "Kovalam tour package",
      "Kovalam taxi from Thodupuzha",
      "Kovalam beach cab package",
      "Kovalam lighthouse taxi",
      "Trivandrum beach taxi package",
    ],
    highlights: [
      "Three beautiful crescent beaches",
      "Vizhinjam Lighthouse with sea views",
      "Ayurvedic massage and wellness treatments",
      "Water sports and beach activities",
      "Seafood dining and sunset walks",
    ],
    inclusions: [
      "Private cab with professional driver",
      "Full-day trip with flexible schedule",
      "Pickup and drop from your location",
      "Vehicle options for all group sizes",
      "Driver assistance for local guidance",
    ],
    faqs: [
      {
        question: "Do you offer Kovalam beach taxi packages?",
        answer:
          "Yes, we provide private cab service to Kovalam for Lighthouse Beach, Hawah Beach, Samudra Beach, and nearby Trivandrum attractions.",
      },
      {
        question: "Can Kovalam and Padmanabhaswamy Temple be covered together?",
        answer:
          "Yes, Kovalam can be combined with Padmanabhaswamy Temple and other Trivandrum stops based on your trip timing.",
      },
      {
        question: "Do you provide airport pickup for Kovalam trips?",
        answer:
          "Yes, we can arrange pickup or drop at Trivandrum airport as part of your Kovalam travel plan.",
      },
    ],
  },
  {
    slug: "pilgrimage-tour",
    url: "/tour/pilgrimage-tour",
    title: "Kerala Pilgrimage Tour",
    description:
      "Visit Kerala's most revered temples, churches, and spiritual sites with comfortable cab service.",
    longDescription:
      "Kerala is a land of diverse faiths and rich spiritual heritage, home to ancient temples, historic churches, and peaceful mosques. Our pilgrimage tour package covers major spiritual destinations including Sabarimala, Guruvayur, Padmanabhaswamy Temple, Chettikulangara, and the churches of Malayattoor and Arthunkal. We also offer customized routes based on your specific pilgrimage needs. With clean vehicles, respectful drivers, and flexible timing including early morning and late-night travel, we ensure a hassle-free spiritual journey for families, elders, and groups.",
    image: "/media/tour/pilgrimage/1.jpg",
    images: [
      "/media/tour/pilgrimage/1.jpg",
      "/media/tour/pilgrimage/church-kochi.jpg",
      "/media/tour/pilgrimage/church-kasaragod.jpg",
      "/media/tour/pilgrimage/mosque.jpg",
      "/media/tour/pilgrimage/3.jpg",
    ],
    keywords: [
      "Kerala pilgrimage tour package",
      "Kerala temple taxi service",
      "Sabarimala taxi package",
      "Guruvayur taxi from Thodupuzha",
      "Kerala church and mosque pilgrimage cab",
    ],
    highlights: [
      "Coverage of temples, churches, and mosques",
      "Sabarimala and Guruvayur visit options",
      "Early morning and late-night travel support",
      "Elderly-friendly travel arrangements",
      "Custom route planning for multi-day trips",
    ],
    inclusions: [
      "Private cab with courteous driver",
      "Flexible pickup and drop timing",
      "Multiple vehicle types available",
      "Support for one-day and multi-day plans",
      "Custom itinerary based on your preferences",
    ],
    faqs: [
      {
        question: "Can you arrange customized Kerala pilgrimage taxi routes?",
        answer:
          "Yes, we customize pilgrimage routes for temples, churches, mosques, and other spiritual sites based on your preferred destinations and dates.",
      },
      {
        question: "Do you provide early morning pickup for temple visits?",
        answer:
          "Yes, early morning and late-night travel can be arranged for temple timings, darshan schedules, and group requirements.",
      },
      {
        question: "Is the pilgrimage package suitable for elders?",
        answer:
          "Yes, we provide comfortable vehicles and flexible stops to make the journey easier for elders and families.",
      },
    ],
  },
  {
    slug: "vagamon-hill-station",
    url: "/tour/vagamon-hill-station",
    title: "Vagamon Hill Station",
    description:
      "Escape to the rolling green meadows, pine forests, and misty hills of Vagamon, the Scotland of Asia.",
    longDescription:
      "Vagamon is a serene hill station tucked away in the Idukki district, known for its expansive green meadows, dense pine forests, tea plantations, and stunning viewpoints. Often called the Scotland of Asia, it offers a peaceful retreat away from crowded tourist spots. Key attractions include Vagamon Meadows (Barren Hills), Pine Forest, Kurisumala Ashram, Thangal Para, and Vagamon Lake. Adventure seekers can enjoy paragliding, trekking, and jeep safaris. Our cab package from Thodupuzha provides a comfortable journey with flexible stops and return options, perfect for nature lovers and peace seekers.",
    image: "/media/tour/vagamon/1.jpg",
    images: [
      "/media/tour/vagamon/1.jpg",
      "/media/tour/vagamon/2.jpg",
      "/media/tour/vagamon/3.jpg",
      "/media/tour/vagamon/4.jpg",
    ],
    keywords: [
      "Vagamon tour package",
      "Vagamon taxi from Thodupuzha",
      "Vagamon hill station cab",
      "Vagamon meadows taxi",
      "Vagamon pine forest tour",
    ],
    highlights: [
      "Rolling green meadows and pine forests",
      "Panoramic viewpoints and misty hills",
      "Paragliding and trekking adventures",
      "Tea plantations and spice gardens",
      "Peaceful atmosphere, less crowded",
    ],
    inclusions: [
      "Private cab with experienced driver",
      "Pickup and drop as per your schedule",
      "Vehicle options for all group sizes",
      "Custom route planning support",
      "Flexible return timing",
    ],
    faqs: [
      {
        question: "Do you provide Vagamon cab packages from Thodupuzha?",
        answer:
          "Yes, we provide private cab packages from Thodupuzha to Vagamon with stops at meadows, pine forest, viewpoints, and nearby attractions.",
      },
      {
        question: "What places can be covered in Vagamon?",
        answer:
          "Common attractions include Vagamon Meadows, Pine Forest, Kurisumala Ashram, Thangal Para, Vagamon Lake, tea plantations, and viewpoints.",
      },
      {
        question: "Is Vagamon good for a one-day family trip?",
        answer:
          "Yes, Vagamon is ideal for a one-day family trip, nature drive, picnic, and relaxed sightseeing from Thodupuzha and nearby areas.",
      },
    ],
  },
];

export function getTourPackage(slug: string) {
  return tourPackages.find((tourPackage) => tourPackage.slug === slug);
}
