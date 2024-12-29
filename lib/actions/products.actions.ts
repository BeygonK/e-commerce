"use server";

import db from "@/db/";
import { products } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

/**
 * Fetches a list of products from the database.
 *
 * This function retrieves the most recently created products from the database,
 * ordering them in descending order by their creation date and limiting the result
 * to the top 4 products.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of product objects.
 */
export const getProducts = async () => {
  const data = await db.query.products.findMany({
    orderBy: [desc(products.createdAt)],
    limit: 4,
  });
  return data;
};

/**
 * Fetches a product from the database by its slug.
 *
 * This function retrieves a product from the database by its slug.
 *
 * @param {string} slug The slug of the product to fetch.
 * @returns {Promise<Object>} A promise that resolves to the product object.
 */
export async function getProductsBySlug(slug: string) {
  return await db.query.products.findFirst({
    where: eq(products.slug, slug),
  });
}
