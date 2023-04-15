import { useNavigate } from "react-router-dom"; // Programmatic Navigation

const ProductsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Products page</h1>

      <button onClick={() => navigate("/")}>Go to Home</button>
    </>
  );
};

export default ProductsPage;
