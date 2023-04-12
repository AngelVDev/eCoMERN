import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51L6xTPCcoQ15eSU9JHHR6fmdbIcGxBa3xvVvXm6uieMdQEtQN1MFpYYRP4FJogHUDumUS7WFpxuLOqRM4FRPW26k00WtrEEn5O";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "https://e-commerce-tru.onrender.com/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        history.push("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, history]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>Processing. Please wait...</span>
      ) : (
        <StripeCheckout
          name='TRU shop'
          image='src\assets\TRU.png'
          billingAddress
          shippingAddress
          description='Your total is $20'
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Pay now
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
