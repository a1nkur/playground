import { Outlet } from "react-router-dom";
import MainNavigation from "../components/main-navigation";

// Layout Wrapper
const Root = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default Root;
