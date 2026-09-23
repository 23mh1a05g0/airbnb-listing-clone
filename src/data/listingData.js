const LISTING = {
  title: "Serene serviced apartment with city views",
  city: "Candolim",
  country: "Goa, India",
  guests: 4,
  bedrooms: 2,
  beds: 2,
  bathrooms: 2,
  price: 28499,
  nights: 5,
  reviews: 19,
  rating: "4.95",
  yearsHosting: 2,
  host: "Mirashya Homes",
  hostAvatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  description:
    "☀️ Wake up to soft city light in this calm, contemporary serviced apartment. Enjoy a fully equipped kitchen, a dedicated work corner, fast Wi‑Fi, and a comfortable living room for slow evenings. 🌿 The building includes a pool and hot tub, with easy access to cafés, restaurants, and major city sights. 🚗 Secure parking is available on-site. 🐾",
  highlights: [
    {
      iconKey: "service",
      title: "Peaceful and professionally serviced",
      desc: "A calm space with thoughtful touches and dependable support.",
    },
    {
      iconKey: "wifi",
      title: "Fast Wi‑Fi for work and streaming",
      desc: "Stay connected from the living room or dedicated workspace.",
    },
    {
      iconKey: "location",
      title: "A convenient base in the city",
      desc: "Close to dining, shopping, and everyday essentials.",
    },
  ],
  amenities: [
    { key: "kitchen", label: "Kitchen utensils" },
    { key: "wifi", label: "Fast wifi" },
    { key: "workspace", label: "Dedicated workspace" },
    { key: "parking", label: "Free parking on premises" },
    { key: "pool", label: "Pool" },
    { key: "hottub", label: "Hot tub" },
    { key: "pet", label: "Pets allowed" },
    { key: "tv", label: "TV" },
    { key: "ac", label: "Air conditioning" },
    { key: "coffee", label: "Coffee maker" },
    { key: "hairdryer", label: "Hair dryer" },
    { key: "alarm", label: "Carbon monoxide alarm", unavailable: true },
  ],
  sleeps: [
    {
      name: "Bedroom 1",
      detail: "1 king bed",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Bedroom 2",
      detail: "1 double bed",
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80",
    },
  ],
  photos: [
    {
      room: "Living room",
      caption: "Living room 1",
      amenities: "Sofa · Air conditioning · Ceiling fan · TV",
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    },
    {
      room: "Living room",
      caption: "Living room 2",
      amenities: "Sofa · City views · Dining area",
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    },
    {
      room: "Kitchen",
      caption: "Full kitchen",
      amenities: "Refrigerator · Oven · Coffee maker",
      url: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=900&q=85",
    },
    {
      room: "Bedroom",
      caption: "Bedroom",
      amenities: "King bed · Linens · Blackout curtains",
      url: "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=900&q=85",
    },
    {
      room: "Bathroom",
      caption: "Bathroom",
      amenities: "Walk-in shower · Hair dryer · Towels",
      url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=85",
    },
    {
      room: "Gym",
      caption: "Gym",
      amenities: "Fitness equipment · Mirrors · Air conditioning",
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
    },
    {
      room: "Exterior",
      caption: "Exterior",
      amenities: "Building entrance · Secure access",
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
    },
    {
      room: "Pool",
      caption: "Pool",
      amenities: "Outdoor pool · Loungers · City views",
      url: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=900&q=85",
    },
    {
      room: "Additional photos",
      caption: "Additional photo",
      amenities: "Shared spaces · Details",
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    },
  ],
  reviewTags: [
    "Comfort 6",
    "Accuracy 5",
    "Hot tub 5",
    "Location 4",
    "Cleanliness 4",
    "Kitchen 4",
  ],
  reviewsData: [
    {
      name: "Saanvi",
      time: "2 weeks ago",
      duration: "2 years on Airbnb",
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80",
      text: "Beautifully kept, peaceful and exactly as pictured. The workspace was especially useful.",
    },
    {
      name: "Rahul",
      time: "1 month ago",
      duration: "4 years on Airbnb",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      text: "Great location and very comfortable beds. Communication was quick and clear.",
    },
    {
      name: "Meera",
      time: "2 months ago",
      duration: "3 years on Airbnb",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
      text: "Loved the kitchen and the pool. Would happily stay here again.",
    },
    {
      name: "Arjun",
      time: "3 months ago",
      duration: "1 year on Airbnb",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
      text: "Spacious, clean, and very easy check-in. The neighborhood felt convenient.",
    },
  ],
};

/**
 * Optimizes an Unsplash image URL for target width, quality, and modern format (WebP).
 * Enables auto format negotiation with WebP fallback, cropping, and dimension right-sizing.
 */
export function getOptimizedImageUrl(url, width = 800, quality = 75, format = "webp") {
  if (!url || typeof url !== "string") return url;
  if (url.includes("images.unsplash.com")) {
    let optimized = url;
    if (optimized.includes("w=")) {
      optimized = optimized.replace(/w=\d+/, `w=${width}`);
    } else {
      optimized += `&w=${width}`;
    }
    if (optimized.includes("q=")) {
      optimized = optimized.replace(/q=\d+/, `q=${quality}`);
    } else {
      optimized += `&q=${quality}`;
    }
    if (!optimized.includes("auto=format")) {
      optimized += "&auto=format";
    }
    if (!optimized.includes("fit=")) {
      optimized += "&fit=crop";
    }
    if (format && !optimized.includes("fm=")) {
      optimized += `&fm=${format}`;
    }
    return optimized;
  }
  return url;
}

/**
 * Generates responsive srcSet and sizes props for an image URL across given target widths.
 */
export function getResponsiveImageProps(url, {
  widths = [480, 768, 1024],
  sizes = "100vw",
  defaultWidth = 800,
  quality = 75,
  format = "webp",
} = {}) {
  const src = getOptimizedImageUrl(url, defaultWidth, quality, format);
  if (!url || !url.includes("images.unsplash.com")) {
    return { src };
  }
  const srcSet = widths
    .map((w) => `${getOptimizedImageUrl(url, w, quality, format)} ${w}w`)
    .join(", ");

  return {
    src,
    srcSet,
    sizes,
  };
}

export default LISTING;

