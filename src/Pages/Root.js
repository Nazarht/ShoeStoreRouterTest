import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";

function LayoutRoot() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default LayoutRoot;
