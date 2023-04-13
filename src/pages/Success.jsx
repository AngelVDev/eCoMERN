import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      `Order has been created successfully. Your order number is 9994` :
      `Successfull. Your order is being prepared...`
      <button style={{ paddding: 10, marginTop: 20 }}>
        <Link to={"/"}>Return to homepage</Link>
      </button>
    </div>
  );
};

export default Success;
