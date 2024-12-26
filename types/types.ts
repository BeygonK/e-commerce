import { products } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";

// Products
export type Product = InferSelectModel<typeof products>;
