import ProductList from "@/components/common/product/product-list";
import sampleData from "@/lib/sample_data";
export default function Home() {
  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Latest Products</h2>
      <ProductList data={sampleData.products} />
    </div>
  );
}
