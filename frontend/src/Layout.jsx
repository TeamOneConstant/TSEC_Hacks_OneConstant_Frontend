import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavigationSidebar from "./components/Sidebar";

const Layout = () => {
  return (
    <div className="h-full">
      <div className=" flex h-full w-[260px]  z-30 flex-col fixed inset-y-0">
        <NavigationSidebar />
      </div>

      <main className=" overflow-y-auto flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
//pl-[72px]
