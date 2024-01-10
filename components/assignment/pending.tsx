import React from "react";

const Pending = () => {
  return (
    <ul className="p-5">
      <li className="flex flex-col gap-3  pt-5 rounded-md overflow-hidden text-[#275A7F] border border-[#275A7F]">
        <div className="flex flex-col gap-2  px-5">
          <p className="font-[600] text-[16px] text-[#0592F6]">
            What is design?
          </p>
          <p className="text-[12px]">
            A full story of the history of design and the founder
          </p>
        </div>
        <div className="flex flex-col gap-2 bg-[#BFFDDC] bg-opacity-40 px-5 pb-5">
          <div className="flex justify-between items-center">
            <p>course title</p>
            <p className="bg-[#E10000] text-[#E10000] bg-opacity-30 text-[10px] p-1 rounded-full">
              Due date
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-[14px] ">Fundamental design</p>
            <p className="text-[12px] ">Nov 17, 2023</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Pending;
