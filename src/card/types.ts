export const categories = [
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Sports & Outdoors",
  "Beauty & Personal Care",
  "Books & Stationery",
  "Toys & Games",
  "Automotive",
  "Health",
  "Food & Beverages",
] as const;

export interface ICardParams {
  id: string;
  subtitle: string;
  name: string;
  price: number;
  date: Date;
  category: (typeof categories)[number];
}
