import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="px-4 lg:px-14">
      <div className="h-16">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-64px)]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
