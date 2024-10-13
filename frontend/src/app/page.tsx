import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getProducts } from "./products/products.api";
import { ProductCard } from "@/components/product-card";

export const dynamic = "force-dinamic";

async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">NestNextApp</h1>
        <Link
          rel="stylesheet"
          href="/products/new"
          className={buttonVariants()}
        >
          Create Product
        </Link>
      </div>

      <div
        className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3"
        style={{ padding: "30px" }}
      >
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
