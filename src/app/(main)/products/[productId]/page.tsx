import { Metadata } from "next";
import { title } from "process";

type ParamsProps = {
  params: Promise<{ productId: string }>;
};

const ProductDetails = async ({ params }: ParamsProps) => {
  const { productId } = await params;

  return (
    <div>
      <h1>Details about product {productId}</h1>
    </div>
  );
};

export default ProductDetails;
