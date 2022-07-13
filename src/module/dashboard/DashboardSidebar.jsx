import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  IconCampaign,
  IconDashboard,
  IconLight,
  IconLogout,
  IconPayment,
  IconUser,
  IconWithDraw,
} from "../../components/icons";
const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithDraw></IconWithDraw>,
    title: "WithDraw",
    url: "/withdraw",
  },
  {
    icon: <IconUser></IconUser>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/logout",
    onClick: () => {},
  },
  {
    icon: <IconLight></IconLight>,
    title: "Light/Dark",
    url: "/darkMode",
    onClick: () => {},
  },
];
const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] px-[14px] py-10 bg-white shadow-sdprimary rounded-3xl flex justify-center flex-col flex-shrink-0">
      {sidebarLinks.map((item, index) => (
        <NavLink
          to={item.url}
          key={item.title}
          className="flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg text-icon-color md:mb-8 last:md:mb-0 last:mt-auto last:shadow-sdprimary sidebar-item"
        >
          <span>{item.icon}</span>
          <span className="md:hidden">{item.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
