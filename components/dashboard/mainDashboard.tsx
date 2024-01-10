import React from "react";
import notification from "../../public/notification.png";
import search from "../../public/search.png";
import user from "../../public/user.png";
import network from "../../public/Status Bar – Service.png";
import wifi from "../../public/Wi–Fi.png";
import battery from "../../public/Status Bar – Battery.png";
import Image from "next/image";
import DashboardItems from "./dashboardItems";

const MainDashboard = () => {
  return (
    <section>
      <div className="flex flex-col gap-3 bg-[#ECF1FB] p-3">
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
        <div className="flex justify-between items-start">
          <div className="flex gap-3">
            <div>
              <Image
                className="h-[24px] w-[24px]"
                src={user}
                alt="alex profile picture"
                height={20}
                width={20}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[16px] font-[600] text-[#0592F6]">
                Hello Alex
              </p>
              <p className="text-[12px] font-[400] text-[#275A7F]">
                It's time to learn something new
              </p>
            </div>
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

        {/* search form */}
        <form className="relative mb-5">
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
            className="flex items-center text-[10px] w-full px-10 p-2 rounded-md"
            type="text"
            placeholder="Search for courses, assignment, quizzes, or teacher "
          />
        </form>
      </div>

      {/* items in dashboard */}
      <DashboardItems />
    </section>
  );
};

export default MainDashboard;
