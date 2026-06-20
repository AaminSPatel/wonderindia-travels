export const testimonials = [
  {
    name: "Ananya & Rohit Sharma",
    location: "Mumbai",
    trip: "Kashmir Honeymoon Bliss",
    rating: 5,
    quote:
      "Every transfer was on time, the houseboat was straight out of a postcard, and our travel manager was reachable the whole trip. Genuinely the easiest holiday we've ever booked.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Karthik Iyer",
    location: "Bengaluru",
    trip: "Ladakh Adventure Expedition",
    rating: 5,
    quote:
      "The acclimatisation planning made all the difference — nobody in our group of six got altitude sick. Pangong at sunset was worth every kilometre of that drive.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Meera Nair",
    location: "Kochi",
    trip: "Kerala Luxury Backwaters",
    rating: 5,
    quote:
      "Booked this for my parents' anniversary. The houseboat upgrade they arranged without us even asking twice was the kind of detail that earns repeat business.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Devansh Patel",
    location: "Ahmedabad",
    trip: "Rajasthan Group Heritage Tour",
    rating: 4,
    quote:
      "Great value for a 7-day multi-city trip. The tour manager knew every guide by name at each fort, which made the history actually land instead of feeling rushed.",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400&auto=format&fit=crop",
  },
];

export const blogPosts = [
  {
    slug: "best-places-to-visit-in-india-2026",
    title: "15 Best Places to Visit in India in 2026",
    category: "Travel Guides",
    excerpt:
      "From snow-bound Ladakh to the backwaters of Kerala, here's our curated list of India's most rewarding destinations this year, organised by the kind of traveller you are.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
    date: "2026-01-12",
    readTime: "9 min read",
    author: "Priya Menon",
  },
  {
    slug: "budget-travel-tips-india",
    title: "20 Budget Travel Tips for Exploring India",
    category: "Budget Travel Tips",
    excerpt:
      "See more of India for less with these tested tips on off-season booking, sleeper trains, local thalis and the small habits that stretch a travel budget furthest.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop",
    date: "2026-02-03",
    readTime: "7 min read",
    author: "Arjun Verma",
  },
  {
    slug: "best-honeymoon-destinations-india",
    title: "10 Most Romantic Honeymoon Destinations in India",
    category: "Honeymoon Destinations",
    excerpt:
      "Houseboats in Kashmir, sunset terraces in Udaipur, private beaches in Andaman — a shortlist of India's most romantic stays for couples planning their first trip together.",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1200&auto=format&fit=crop",
    date: "2026-02-20",
    readTime: "8 min read",
    author: "Priya Menon",
  },
  {
    slug: "adventure-travel-guide-india",
    title: "The Complete Adventure Traveller's Guide to India",
    category: "Adventure Travel Guides",
    excerpt:
      "River rafting in Rishikesh, paragliding over Solang Valley, scuba diving near Havelock — a region-by-region breakdown of India's best adventure sports and when to book them.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1200&auto=format&fit=crop",
    date: "2026-03-08",
    readTime: "10 min read",
    author: "Rahul Deshmukh",
  },
  {
    slug: "north-east-india-hidden-gems",
    title: "Meghalaya & Beyond: North East India's Hidden Gems",
    category: "Travel Guides",
    excerpt:
      "Living root bridges, the cleanest village in Asia and waterfalls that disappear in the dry season — why North East India deserves a slot on your 2026 itinerary.",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1200&auto=format&fit=crop",
    date: "2026-03-22",
    readTime: "6 min read",
    author: "Arjun Verma",
  },
  {
    slug: "family-trip-planning-checklist",
    title: "The Family Trip Planning Checklist We Give Every Client",
    category: "Family Travel",
    excerpt:
      "From travel insurance to kid-friendly meal stops, this is the exact checklist our planners run through before confirming any family holiday package.",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=1200&auto=format&fit=crop",
    date: "2026-04-02",
    readTime: "5 min read",
    author: "Priya Menon",
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}

export const team = [
  {
    name: "Vikram Anand",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    bio: "18 years designing India itineraries; previously led product for a national tour operator.",
  },
  {
    name: "Priya Menon",
    role: "Head of Itinerary Design",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    bio: "Has personally scouted over 200 stays across India's hill, beach and desert circuits.",
  },
  {
    name: "Arjun Verma",
    role: "Head of Customer Experience",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=600&auto=format&fit=crop",
    bio: "Runs the 24/7 traveller support desk and our on-ground guide network.",
  },
  {
    name: "Sara Khan",
    role: "Senior Travel Consultant",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    bio: "Specialist in honeymoon and luxury custom itineraries across Rajasthan and Kerala.",
  },
];

export const milestones = [
  { year: "2014", title: "WanderIndia Founded", detail: "Started as a 3-person desk booking Kerala houseboats." },
  { year: "2017", title: "10,000th Traveller", detail: "Expanded coverage to all major Himalayan circuits." },
  { year: "2020", title: "24/7 Support Desk Launched", detail: "Built an always-on traveller support line." },
  { year: "2023", title: "100,000th Traveller", detail: "Recognised among India's top-rated tour operators." },
  { year: "2026", title: "Pan-India Network", detail: "500+ verified guides and partner stays across 28 states." },
];
