"use client";
import { useRouter } from "next/navigation";

export default function ProductOrder() {
  const Router = useRouter();
  const buttonCLick = () => {
    console.log("order is placed successfully");
    Router.push("/");
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={buttonCLick}>Place Order</button>
    </>
  );
}
