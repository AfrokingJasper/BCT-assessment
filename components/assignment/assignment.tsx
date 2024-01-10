import React, { useState } from "react";
import network from "../../public/Status Bar – Service.png";
import wifi from "../../public/Wi–Fi.png";
import battery from "../../public/Status Bar – Battery.png";
import notification from "../../public/notification.png";
import arrow from "../../public/arrow-up.png";
import search from "../../public/search.png";
import Image from "next/image";
import Pending from "./pending";
import Submitted from "./submitted";
import Marked from "./marked";
import Link from "next/link";

const Assignment = () => {
  const [category, setCategory] = useState("pending");

  return (
    <section className="">
      <div className="border-b border-[#D5E3FC] p-5">
        {/* user phone details */}
        <div className="flex justify-between items-center">
          <p>12:00</p>
          <div className="flex gap-1 items-center">
            {/* service */}
            <div>
              <Image
                className="h-[10.5px] w-[17.25px]"
                src={network}
                alt="Status Bar – Service"
                height={20}
                width={20}
              />
            </div>

            {/* wifi */}
            <div>
              <Image
                className="h-[10.34px] w-[15px]"
                src={wifi}
                alt="wifi"
                height={20}
                width={20}
              />
            </div>
            {/* service */}
            <div>
              <Image
                className="h-[20px] w-[27.75px]"
                src={battery}
                alt="Status Bar – battery"
                height={20}
                width={20}
              />
            </div>
          </div>
        </div>
        {/* profile and notification */}
        <div className="flex justify-between items-start mt-5">
          <div className="flex gap-3">
            <Link href="/dashboard">
              <Image
                className="h-[24px] w-[24px]"
                src={arrow}
                alt="back arrow"
                height={20}
                width={20}
              />
            </Link>
          </div>
          <div>
            <Image
              className="h-[20px] w-[20px]"
              src={notification}
              alt="notification"
              height={20}
              width={20}
            />
          </div>
        </div>

        {/* assignmentheading */}
        <p className="text-[#0592F6] mt-5 text-[24px] font-[700]">Assignment</p>

        {/* search form */}
        <form className="relative  mt-3">
          <div className="absolute top-[50%] -translate-y-[50%] left-4">
            <Image
              className="h-[12px] w-[12px]"
              src={search}
              alt="search icon"
              height={20}
              width={20}
            />
          </div>
          <input
            className="flex items-center text-[10px] w-full px-10 p-2 rounded-md border text-[#275A7F] border-[#D5E3FC]"
            type="text"
            placeholder="Search for assignment"
          />
        </form>
      </div>

      {/* navigations */}
      <nav className="flex justify-between p-5 text-[#275A7F]">
        <div className="flex flex-col gap-2 justify-center items-center">
          <button
            onClick={() => setCategory("pending")}
            className={`${category === "pending" && "font-[600]"}`}
          >
            Pending
          </button>
          {category === "pending" && (
            <div className="h-[2px] w-8 bg-[#477DE9]"></div>
          )}
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <button
            className={`${category === "submitted" && "font-[600]"}`}
            onClick={() => setCategory("submitted")}
          >
            Submitted
          </button>
          {category === "submitted" && (
            <div className="h-[2px] w-8 bg-[#477DE9]"></div>
          )}
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <button
            className={`${category === "marked" && "font-[600]"}`}
            onClick={() => setCategory("marked")}
          >
            Marked
          </button>
          {category === "marked" && (
            <div className="h-[2px] w-8 bg-[#477DE9]"></div>
          )}
        </div>
      </nav>
      <div className="px-5 -mt-[21.55px]">
        <div className="h-[1px] w-full bg-[#477DE9]"></div>
      </div>

      {/* assignment categories */}
      {category === "pending" ? (
        <Pending />
      ) : category === "submitted" ? (
        <Submitted />
      ) : (
        <Marked />
      )}
    </section>
  );
};

export default Assignment;
