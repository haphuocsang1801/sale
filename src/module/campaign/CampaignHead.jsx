import React from "react";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignHead = () => {
  return (
    <div className="flex items-center gap-x-8 w-full max-w-[1048px]">
      <CampImage className="h-[266px] flex-1"></CampImage>
      <div className="flex-1 max-w-[435px]">
        <CampCategory text={"Architecture"} className="mb-3"></CampCategory>
        <CampTitle className="font-bold text-xl mb-4">
          Remake - We Make architecture exhibition
        </CampTitle>
        <CampDesc className="mb-5 text-sm ">
          Remake - We Make: an exhibition about architecture social agency in
          the face of urbanisation
        </CampDesc>
        <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
          <div className="h-full w-2/4 rounded-full bg-primary"></div>
        </div>
        <div className="flex items-start justify-between gap-x-5">
          <CampMeta size="big"></CampMeta>
          <CampMeta size="big"></CampMeta>
          <CampMeta size="big"></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignHead;
