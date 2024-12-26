import ProductList from "@/components/common/product/product-list";
import { getProducts } from "@/lib/actions/products.actions";

export default async function Home() {
  const latestProducts = await getProducts();
  return (
    <div className="space-y-8">
      <ProductList title="Latest Products" data={latestProducts} />
    </div>
  );
}
