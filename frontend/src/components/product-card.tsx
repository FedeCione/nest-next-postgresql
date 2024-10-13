"use client";
import { deleteProduct } from "@/app/products/products.api";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useRouter } from "next/navigation";

export function ProductCard({ product }: any) {
  const router = useRouter();

  async function handleDeleteProduct(id: string) {
    await deleteProduct(id);
    router.refresh();
  }

  return (
    <Card
      onClick={() => {
        router.push(`/products/${product.id}`);
      }}
      style={{
        maxHeight: "fit-content",
        backgroundColor: "aliceblue",
        borderColor: "black",
        color: "white",
      }}
    >
      <CardHeader>
        <CardTitle className="flex justify-between font-bold text-stone-950">
          {product.name}
          <span className="text-base font-bold text-stone-950">
            ${product.price}
          </span>
        </CardTitle>
      </CardHeader>
      <img
        src={product.image}
        style={{ margin: "10px 0" }}
      />
      <CardContent className="text-base text-stone-950">
        <p>{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          className="mt-5"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/products/${product.id}/edit`);
          }}
        >
          Editar
        </Button>
        <Button
          className="mt-5"
          variant="destructive"
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteProduct(product.id);
          }}
        >
          Eliminar
        </Button>
      </CardFooter>
    </Card>
  );
}
