import React from "react";
import courses from "../../public/courses.png";
import timetable from "../../public/timetable.png";
import quiz from "../../public/quizzes.png";
import Image from "next/image";
import Link from "next/link";

const DashboardItems = () => {
  return (
    <ul className="flex flex-col gap-4 mt-5 px-3">
      {/* assignment */}
      <li>
        <Link
          href="/assignment"
          className="flex flex-col gap-3 bg-[#BFFDDC] py-7 px-5 rounded-md text-[#275A7F]"
        >
          <p className="font-[600] text-[16px]">Assignment</p>
          <p className="text-[12px] w-[80%]">
            Youe dolor. Morbi consectetur vestibulum turYoue dolor. Morbi
            consectetur consectetur vestibulum t
          </p>
        </Link>
      </li>

      {/* Courses */}
      <li>
        <Link
          href="/assignment"
          className="relative flex flex-col gap-3 bg-[#DDE7FF] py-7 px-5 rounded-md text-[#275A7F]"
        >
          <p className="font-[600] text-[16px]">Courses</p>

          <p className="text-[12px] w-[80%]">
            Youe dolor. Morbi consectetur vestibulum turYoue dolor. Morbi
            consectetur consectetur vestibulum t
          </p>
          <div className="absolute top-24 right-5">
            <Image
              className="h-[34.92px] w-[34.92px]"
              src={courses}
              alt="stamp"
              height={50}
              width={50}
            />
          </div>
        </Link>
      </li>

      {/* Timetable */}
      <li>
        <Link
          href="/assignment"
          className="relative flex flex-col gap-3 bg-[#F2F8B3] py-7 px-5 rounded-md text-[#275A7F]"
        >
          <p className="font-[600] text-[16px]">Timetable</p>
          <p className="text-[12px] w-[80%]">
            Youe dolor. Morbi consectetur vestibulum turYoue dolor. Morbi
            consectetur consectetur vestibulum t
          </p>
          <div className="absolute top-24 right-5">
            <Image
              className="h-[34.92px] w-[34.92px]"
              src={timetable}
              alt="stamp"
              height={50}
              width={50}
            />
          </div>
        </Link>
      </li>

      {/* Quizzes */}
      <li>
        <Link
          href="/assignment"
          className="relative flex flex-col gap-3 bg-[#CAF3FE] py-7 px-5 rounded-md text-[#275A7F]"
        >
          <p className="font-[600] text-[16px]">Quizzes</p>
          <p className="text-[12px] w-[80%]">
            Youe dolor. Morbi consectetur vestibulum turYoue dolor. Morbi
            consectetur consectetur vestibulum t
          </p>
          <div className="absolute top-24 right-5">
            <Image
              className="h-[34.92px] w-[34.92px]"
              src={quiz}
              alt="stamp"
              height={50}
              width={50}
            />
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default DashboardItems;
