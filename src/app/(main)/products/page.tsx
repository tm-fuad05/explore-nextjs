import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
};

const Products = () => {
  return (
    <div>
      <h1>Product List</h1>
      <h3>Products 1</h3>
      <h3>Products 2</h3>
      <h3>Products 3</h3>
    </div>
  );
};

export default Products;
