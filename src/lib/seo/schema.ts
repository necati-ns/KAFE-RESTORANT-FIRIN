import { businessConfig } from "@/config/business";
import { siteConfig } from "@/config/site";

export function generateRestaurantJsonLd(lang: "tr" | "en" = "tr") {
  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "Bakery", "CafeOrCoffeeShop"],
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    alternateName: "NSCODING Atelier Mutfak Fırın",
    description: siteConfig.meta[lang].description,
    url: siteConfig.url,
    telephone: businessConfig.contact.phoneClean,
    servesCuisine: [
      "Modern Turkish",
      "Anatolian Contemporary",
      "Artisan Sourdough Bakery",
      "Specialty Coffee",
      "Breakfast and Brunch",
    ],
    priceRange: "₺₺₺",
    address: {
      "@type": "PostalAddress",
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.district,
      addressRegion: businessConfig.address.city,
      postalCode: businessConfig.address.postalCode,
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessConfig.address.geo.latitude,
      longitude: businessConfig.address.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "08:00",
        closes: "00:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "08:30",
        closes: "22:30",
      },
    ],
    menu: `${siteConfig.url}/menu`,
    acceptsReservations: "True",
  };
}

export function generateMenuJsonLd(items: Array<{ name: string; desc: string; price: number; currency: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "NSCODING Atelier Menü",
    hasMenuItem: items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      description: item.desc,
      offers: {
        "@type": "Offer",
        price: item.price,
        priceCurrency: "TRY",
      },
    })),
  };
}
