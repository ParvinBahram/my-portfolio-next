import React from "react";
import Image from "next/image";
import Socialmedia from "./Socialmedia";
function InrtoCard() {
  return (
    <div className="mt-6 rounded-lg shadow-[0_0_15px_1px_#a21caf]/30 p-4 text-center  lg:mx-0 lg:w-82 lg:sticky lg:top-2 space-y-8">
      <Image
        src={"/profile.jpg"}
        width={200}
        height={200}
        className="rounded-2xl mx-auto"
        alt="my-image"
      />
      <h1 className="text-xl font-bold">سلام من پروین بهرام هستم</h1>
      <h2 className="text-lg font-bold"> برنامه نویس فرانت اند</h2>
      <Socialmedia />
      <div className="">
        <a href="/5fa78ae3-075f-4e76-8b2f-9002ad1488ae.pdf" download="my-cv.pdf" className="inline-block mb-4 rounded py-1 px-4 bg-secondary">دانلود فایل رزومه</a>
      </div>
    </div>
  );
}

export default InrtoCard;
