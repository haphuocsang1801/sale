import React, { useState } from "react";

const DashboardSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="relative z-50">
      <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218,213,213,0.15)] p-2 w-full  flex items-center ">
        <div className="flex-1 px-5">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="bg-transparent text-sm text-text1 placeholder:text-text4 w-full "
          />
        </div>
        <button className="w-[72px] h-10 bg-primary flex items-center justify-center rounded-full text-white flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div
        className={`transition-all ${
          showSearch ? "opacity-100 visible" : "opacity-0 invisible"
        } search-result w-full lg:w-[843px] bg-white absolute top-full left-0 z-50 translate-y-5 pb-6 rounded-3xl`}
      >
        <div className="flex items-center justify-between p-3 bg-graySoft rounded-3xl">
          <h4 className="font-medium text-sm pl-4 underline">
            See all 10,124 fundraisier
          </h4>
          <button className="flex items-center justify-center w-[72px] h-[50px] bg-error bg-opacity-10 text-error rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6 pb-0">
          <div className=" flex flex-col gap-y-5 mb-6">
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
          </div>
          <h3 className="text-sm font-semibold mb-4">Related searchs</h3>
          <div className="flex flex-col gap-y-3 text-sm text-text2">
            <span>
              <strong>education</strong> fund
            </span>
            <span>schoralship fund</span>
            <span>
              <strong>education</strong> and schools fund
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
function SearchItem() {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src="https://source.unsplash.com/random"
        alt=""
        className="w-[50px] h-[50px] rounded-lg object-cover"
      />
      <div className="flex-1 text-sm">
        <h3 className="mb-1">
          <strong>Education </strong>fund for Durgham Family
        </h3>
        <p className="text-text3 ">By Durgham Family</p>
      </div>
    </div>
  );
}
export default DashboardSearch;
