import React from "react";
import Button from "../../components/button";
import { Logo } from "../../constants/importImages";
import DashboardSearch from "./DashboardSearch";
import DashboardFund from "./DaashboardFund";
import { Link } from "react-router-dom";
const DashboardTopBar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-x-14 flex-1">
        <Link to="/" className="inline-block">
          <img srcSet={Logo + " 2x"} alt="logo" className="pl-3" />
        </Link>
        <div className="max-w-[458px] w-full">
          <DashboardSearch />
        </div>
      </div>
      <div className="flex items-center gap-x-10 flex-1 justify-end">
        <DashboardFund />
        <Button
          kind="secondary"
          type="button"
          href="/start-campaign"
          className={"px-7"}
        >
          Start a campaign
        </Button>
        <div className="w-[52px] h-[52px]">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="avatar"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardTopBar;
