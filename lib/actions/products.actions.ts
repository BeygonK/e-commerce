"use server";

import db from "@/db/";
import { products } from "@/db/schema";
import { desc } from "drizzle-orm";

export const getProducts = async () => {
  const data = await db.query.products.findMany({
    orderBy: [desc(products.createdAt)],
    limit: 4,
  });
  return data;
};
