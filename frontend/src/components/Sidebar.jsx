import { Home, Edit, User2, LayoutDashboard, Cross, Pen } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

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
    title: "Draft",
    icon: <Pen size={30} />,
    link: "/drafts",
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
          {sidebarItems.map((item) => {
            return (
              <>
                <Link to={item.link}>
                  <div className="w-full h-[35px] gap-y-4  items-center rounded flex px-4 py-2 hover:bg-blue-200  hover:pl-[25px]">
                    <div className="w-[30px] h-[30px] opacity-80">
                      {item.icon}
                    </div>
                    <div className="h-full w-3" />
                    <div className="h-full opacity-90 w-fit font-base text-xl">
                      {item.title}
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>

        <div className="p-4 mt-auto flex items-center flex-col gap-y-4">
          <UserButton
            afterSignOutUrl="/"
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
