import {
  Home,
  Edit,
  User2,
  LayoutDashboard,
  Cross,
  Pen,
  WalletCards,
  CreditCard,
} from "lucide-react";
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Profiler } from "react";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard size={30} />,
    link: "/dashboard",
  },
  {
    title: "Posts",
    icon: <Edit size={30} />,
    link: "/posts",
  },
  {
    title: "Social Account",
    icon: <User2 size={30} />,
    link: "/onboard",
  },
  {
    title: "Undelievered",
    icon: <Cross size={30} />,
    link: "/outbox",
  },
  {
    title: "Profile",
    icon: <CreditCard size={30} />,
    link: "/profile",
  },
];

const NavigationSidebar = () => {
  return (
    <>
      <div className=" flex flex-col w-[260px] h-full bg-white border-r-2 border-gray-400 items-center fixed top-0 left-0 py-4 space-y-2">
        <div className="top-[40px] w-full h-[100px] space-x-2 mb-2 flex justify-center items-center border-b-2 border-gray-400">
          <img src="/ipsum.png" alt="logo" className="w-[45px] h-[45px] " />

          <p className=" font-bold text-blue-700  text-2xl">OneConstant</p>
        </div>

        <div className="w-full space-y-[10px] text-[#5F5F5F]">
          {sidebarItems.map((item, index) => {
            return (
              <>
                <Link key={index} to={item.link}>
                  <div className="w-full h-[35px] items-center space-y-[8px]   flex px-4 py-2 ">
                    <div className=" w-[200px] h-[32px] hover:bg-blue-200/80  hover:pl-[25px] hover:rounded flex items-start justify-start">
                      <div className="w-[30px] h-[30px] opacity-80">
                        {item.icon}
                      </div>
                      <div className="h-full w-3" />
                      <div className="h-full opacity-90 w-fit font-base text-xl">
                        {item.title}
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>

        <div className="p-4 mt-[100px]  -ml-[150px] ">
          <UserButton
            afterSignOutUrl="/signup"
            appearance={{
              elements: {
                avatarBox: "h-[48px] w-[48px]",
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default NavigationSidebar;
