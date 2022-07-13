import { Outlet } from "react-router-dom";
import DashboardTopBar from "../module/dashboard/DashboardTopbar";
import DashboardSidebar from "../module/dashboard/DashboardSidebar";
import Overlay from "../components/common/Overlay";
const LayoutDashboard = () => {
  return (
    <div className="p-10 bg-lite min-h-screen">
      <Overlay></Overlay>
      <DashboardTopBar />
      <div className="flex gap-x-11 items-start">
        <DashboardSidebar />
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutDashboard;
