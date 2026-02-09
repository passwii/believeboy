export interface Platform {
  name: string;
  nameEn: string;
  color: string;
}

export const platforms: Platform[] = [
  { name: "亚马逊", nameEn: "Amazon", color: "#FF9900" },
  { name: "独立站", nameEn: "DTC", color: "#6366f1" },
  { name: "eBay", nameEn: "eBay", color: "#E53238" },
  { name: "Walmart", nameEn: "Walmart", color: "#0071CE" },
  { name: "TikTok", nameEn: "TikTok", color: "#000000" },
  { name: "Shopee", nameEn: "Shopee", color: "#EE4D2D" },
  { name: "Lazada", nameEn: "Lazada", color: "#0F156D" },
];
