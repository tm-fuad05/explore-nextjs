"use client";
import { redirect } from "next/navigation";

const OrderProduct = () => {
  const handleClick = () => {
    console.log("Placing your order");
    redirect("/products");
  };
  return (
    <div>
      <h1>Order Product</h1>
      <button className="border" onClick={handleClick}>
        Order
      </button>
    </div>
  );
};

export default OrderProduct;
