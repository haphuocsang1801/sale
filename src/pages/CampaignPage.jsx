import React from "react";
import Button from "../components/button/Button";
import Heading from "../components/common/Heading";
import CampaignGrid from "../module/campaign/CampaignGrid";
import CampaignHead from "../module/campaign/CampaignHead";

const CampaignPage = () => {
  return (
    <div className="w-full">
      <div className="mb-10 bg-white rounded-3xl flex items-center justify-between py-8 px-10">
        <div className="flex item-start gap-x-6">
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-white bg-secondary bg-opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-[22px] font-semibold mb-2">
              Create Your Campaign
            </h1>
            <p className="text-text3 text-sm mb-2">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <a href="#" className="text-primary text-sm">
              Need any help? Learn More...
            </a>
          </div>
        </div>
        <div>
          <Button
            type="button"
            className={"px-8"}
            kind="ghost"
            href="/start-campaign"
          >
            Create campaign
          </Button>
        </div>
      </div>
      <Heading number={"4"}>Your Campaign</Heading>
      <CampaignGrid type="1">
        <CampaignHead></CampaignHead>
        <CampaignHead></CampaignHead>
        <CampaignHead></CampaignHead>
        <Button
          kind="ghost"
          href="/see-more-campaign"
          className={"px-7 max-w-[200px] mx-auto"}
        >
          See more+
        </Button>
      </CampaignGrid>
    </div>
  );
};

export default CampaignPage;
