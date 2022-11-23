import { async } from "@firebase/util";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutFrom = ({ bookingData }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transectionId, setTransectionId] = useState("");

  const { price, name, email, _id } = bookingData;
  console.log(bookingData);
  console.log(price);
  const stripe = useStripe();
  const element = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: ` bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClientSecret(data.clientSecret);
      });
  }, [price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !element) {
      return;
    }

    const card = element.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
    } else {
      console.log("PaymentMethod", paymentMethod);
    }
    const { paymentIntent, error: confirmationError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (confirmationError) {
      return;
    }
    console.log("Payment Intent", paymentIntent);
    if (paymentIntent.status === "succeeded") {
      console.log("Card Info", card);
      setSuccess("Payment Has Been Confirmed");
      setTransectionId(paymentIntent.id);
      const payment = {
        price,
        transectionId: paymentIntent.id,
        email,
        bookingId: _id,
      };
      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.insertedId) {
            setSuccess("Completed");
          }
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                border: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="btn btn-primary text-center mt-20"
        >
          Pay
        </button>
      </form>
      <p>{success}</p>
    </div>
  );
};

export default CheckoutFrom;
