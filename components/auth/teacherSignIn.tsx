import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import image from "../../public/teachersp.png";

type TeacherProps = {
  onSet: (type: string) => void;
};

const TeacherSignIn = (props: TeacherProps) => {
  const router = useRouter();

   // form submit function
  const signInHandler = (event: React.FormEvent) => {
    event.preventDefault();
    router.push("dashboard");
  };

  return (
    <form className="relative">
      <div className="z-10">
        <Image
          className="z-[10] h-[500px] w-full md:w-[400px]"
          src={image}
          height={100}
          width={400}
          alt="teachers"
        />
      </div>
      <div className="flex flex-col gap-5 absolute right-0 left-0 bg-white z-[100] -mt-10 rounded-2xl p-5">
        {/* sign in label */}
        <div className="flex flex-col gap-3">
          <p className="text-[#0592F6] text-lg font-[700]">Sign In</p>

          <p className="text-[12px] text-[#275A7F]">
            Enter your login details to get started
          </p>
        </div>

        {/* inputs */}
        <div className="flex flex-col gap-3">
          {/* teacher Id */}
          <div className="flex flex-col gap-1">
            <label className="text-[#275A7F] text-[14px]" htmlFor="teacher__id">
              Teacher ID
            </label>
            <input
              className="bg-[#F7F8FA] border border-[#CDDBF8] py-2 rounded-md"
              type="text"
              id="teacher__id"
            />
          </div>
          {/* teacher password */}
          <div className="flex flex-col gap-1">
            <label
              className="text-[#275A7F] text-[14px]"
              htmlFor="teacher__password"
            >
              Password
            </label>
            <input
              className="bg-[#F7F8FA] border border-[#CDDBF8] py-2 rounded-md"
              type="text"
              id="teacher__password"
            />
          </div>
        </div>

        <button
          onClick={signInHandler}
          className="mt-5 bg-[#0592F6] py-2 rounded-md shadow-xl  shadow-[rgba(4,54,89, 0.5)]"
        >
          Sign In
        </button>
        <div className="flex gap-1 text-[#275A7F] text-[16px]">
          <p>You do not have an account?</p>
          <button className="font-bold" onClick={() => props.onSet("student")}>
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
};

export default TeacherSignIn;
