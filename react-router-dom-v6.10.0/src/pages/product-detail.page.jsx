import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams(); // Contains every dynamic path segment

  return (
    <>
      <h1>PRODUCT DETAILS</h1>
      <small>ID : {params.id}</small>
      <br />
      <Link relative="path" to="..">
        Go back one level
      </Link>
      <br />
      <Link relative="route" to="..">
        Go back to home
      </Link>
    </>
  );
};

export default ProductDetailPage;
