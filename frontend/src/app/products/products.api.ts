export async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`, {
    method: "GET",
    cache: "no-store",
  });
  return await res.json();
}

export async function getProduct(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${id}`, {
    method: "GET",
    cache: "no-store",
  });
  return await res.json();
}

export async function createProduct(productData: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });
  const data = await res.json();
  return data;
}

export async function updateProduct(id: string, newProduct: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
    cache: "no-store",
  });
  return await res.json();
}

export async function deleteProduct(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${id}`, {
    method: "DELETE",
  });
  return await res.json();
}
