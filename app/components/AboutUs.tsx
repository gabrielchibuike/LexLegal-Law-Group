import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <>
      <div className="min-h-screen  px-10 bg-gray-300/10 py-3 max-lg:px-4">
        {/* <h3 className="text-2xl font-bold  py-8 border-b-2 border-accent">
          About Us
        </h3> */}
        <div className="flex ">
          <div className="w-[50%] max-lg:hidden">
            <Image
              src={"/lawImg.png"}
              width={500}
              height={500}
              alt=""
              className="w-[500px] h-[500px] object-cover"
            />
          </div>
          <div className=" w-[50%] max-lg:w-full ">
            <h3 className="text-2xl font-bold   text-primary ">About Us</h3>
            <p className="text-lg mt-5">
              Welcome to our law firm, where we are dedicated to providing
              exceptional legal services with a personal touch. Our team of
              experienced attorneys is committed to helping you navigate the
              complexities of the legal system with confidence and ease.
            </p>
            <p className="mt-4 text-lg">
              Whether you need assistance with family law, criminal defense,
              personal injury, or corporate matters, we are here to guide you
              every step of the way. Our mission is to protect your rights and
              achieve the best possible outcomes for our clients.
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-10 max-lg:mt-5 max-lg:flex-col">
          <div className="space-y-3 mt-10">
            <h1 className="text-5xl">97%</h1>
            <p className="text-lg">Successful Cases</p>
          </div>
          <div className="space-y-3 mt-10">
            <h1 className="text-5xl">50%</h1>
            <p className="text-lg">Bussiness served </p>
          </div>
          <div className="space-y-3 mt-10">
            <h1 className="text-5xl">40%</h1>
            <p className="text-lg">Reputed Attorneys</p>
          </div>
          <div className="space-y-3 mt-10">
            <h1 className="text-5xl">10%</h1>
            <p className="text-lg">Experience </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
