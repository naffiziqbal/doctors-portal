import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutFrom from "../CheckoutFrom.";

const stripePromise = loadStripe(
  "pk_test_51M7EfqSIgvXyYh7O4F3I6xAdkqIheT70mOOQA7YsXjvNOojeVRtu8zmAPYkSZKEZYJcDvBrxkgTS8fEYuSaOcdOw00OGFN5pHJ"
);
console.log(stripePromise);
const Payments = () => {
  const data = useLoaderData();
  const { treatment, price, slot } = data;
  console.log(data);
  return (
    <div>
      <p className="text-4xl  font-bold">Payment Page</p>
      <div className="info">
        <p>
          Payment for : <strong>{treatment}</strong>
        </p>
        <p>
          Payment Money :$ <strong>{price}</strong>
        </p>
      </div>
      <div className="w-96 shadow-lg h-2/4 mt-20">
        <Elements stripe={stripePromise}>
          <CheckoutFrom
          bookingData = {data}
          />
        </Elements>
      </div>
    </div>
  );
};

export default Payments;
