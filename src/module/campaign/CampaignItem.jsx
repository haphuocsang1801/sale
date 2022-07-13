import React from "react";
import { Link } from "react-router-dom";
import IconFolder from "../../components/icons/IconFolder";
import CampAuthor from "./parts/CampAuthor";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignItem = () => {
  return (
    <div className="shadow-[0px_2px_4px_rgba(184,_184,_184,_0.03),_0px_6px_12px_rgba(184,_184,_184,_0.02),_0px_12px_20px_rgba(184,_184,_184,_0.03)] rounded-xl bg-white">
      <CampImage></CampImage>
      <div className="px-4 py-4">
        <CampCategory text={"Education"}></CampCategory>
        <CampTitle>Remake - We Make architecture exhibition</CampTitle>
        <CampDesc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </CampDesc>
        <div className="flex items-start justify-between gap-x-5 mb-5">
          <CampMeta></CampMeta>
          <CampMeta></CampMeta>
        </div>
        <CampAuthor name={"benji"}></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
