import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import HomePage from "./pages/home.page";
import ProductsPage from "./pages/products.page";
import Root from "./pages/root. component";
import ErrorPage from "./pages/error.page";
import ProductDetailPage from "./pages/product-detail.page";

// Define Route defination

// -- Method 1 : Object based approach ------>
/* *****************************************
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
]);
***************************************** */

// -- Method 2 : JSX based approach ------>
/* *****************************************
const defination = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
);

const otherRouter = createBrowserRouter(defination);
***************************************** */

// -- Nested Routes + Layout  ------>
const router = createBrowserRouter([
  {
    path: "/", // Absolute Path
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", // Absolute Path.
        // index: true,
        element: <HomePage />,
      },
      {
        path: "/products", // Absolute Path
        element: <ProductsPage />,
      },
      { path: "/products/:id", element: <ProductDetailPage /> }, // Dynamic Path Segment,  Absolute Path
    ],
  },
]);

// -- Relative Paths  ------>

/* ************************************
const router = createBrowserRouter([
  {
    path: "/root", // Relative Path
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "", // Relative Path
        element: <HomePage />,
      },
      {
        path: "products", // Relative Path
        element: <ProductsPage />,
      },
      { path: "products/:id", element: <ProductDetailPage /> }, // Dynamic Path Segment,  Relative Path
    ],
  },
]);
************************************ */

function App() {
  return <RouterProvider router={router} />;
}

export default App;
