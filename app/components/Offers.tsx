import { MdSentimentSatisfiedAlt } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { MdQuickreply } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi";
import { MdSupportAgent } from "react-icons/md";
import React from "react";

function Offers() {
  return (
    <>
      <div className="min-h-[500px]  flex flex-col justify-center px-10 max-lg:px-4 ">
        <div className="space-y-3">
          <h3 className="text-lg text-center text-primary font-medium ">
            WHY CHOOSE US
          </h3>
          <h3 className="text-4xl text-center font-semibold max-lg:text-2xl">
            TOP FEATURES
          </h3>
          <h3 className="text-lg text-center font- ">
            Here are just the few reasons to work with Us.
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-10 max-lg:grid-cols-1">
          <div className="w-full h-[300px] bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20  space-y-8 ">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-teal-400 to-blue-400"></div>
            <FaHandshake className="text-7xl text-primary " />
            <div>
              <h3 className="text-xl font-semibold  ">Trust</h3>
              <div className="w-[100px] border-b-2 border-primary p-1"></div>
            </div>
            <p className="text-sm font-medium  mt-2 ">
              We prioritize building trust with our clients through transparent
              communication and a commitment to excellence.
            </p>
          </div>
          <div className="w-full h-[300px] bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20  space-y-8 ">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-teal-400 to-blue-400"></div>
            <MdSupportAgent className="text-7xl text-primary " />
            <div>
              <h3 className="text-xl font-semibold  ">Free Consultation</h3>

              <div className="w-[100px] border-b-2 border-primary p-1"></div>
            </div>
            <p className="text-sm font-medium  mt-2 ">
              We offer a free initial consultation to discuss your legal needs
              and how we can assist you.
            </p>
          </div>
          <div className="w-full h-[300px] bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20  space-y-8 ">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-teal-400 to-blue-400"></div>
            <HiOutlineBriefcase className="text-7xl text-primary " />
            <div>
              <h3 className="text-xl font-semibold  ">Experience</h3>

              <div className="w-[100px] border-b-2 border-primary p-1"></div>
            </div>
            <p className="text-sm font-medium  mt-2 ">
              Our team of experienced attorneys brings a wealth of knowledge and
              expertise to every case, ensuring the best possible outcomes for
              our clients.
            </p>
          </div>
          <div className="w-full h-[300px] bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20  space-y-8 ">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-teal-400 to-blue-400"></div>
            <MdQuickreply className="text-7xl text-primary " />
            <div>
              <h3 className="text-xl font-semibold  ">Response</h3>

              <div className="w-[100px] border-b-2 border-primary p-1"></div>
            </div>
            <p className="text-sm font-medium  mt-2 ">
              We pride ourselves on our quick response times and availability to
              address your legal concerns promptly.
            </p>
          </div>
          <div className="w-full h-[300px] bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20  space-y-8 ">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-teal-400 to-blue-400"></div>
            <FaTools className="text-7xl text-primary " />
            <div>
              <h3 className="text-xl font-semibold  ">Various Services </h3>

              <div className="w-[100px] border-b-2 border-primary p-1"></div>
            </div>
            <p className="text-sm font-medium  mt-2 ">
              We offer a wide range of legal services to meet the diverse needs
              of our clients, ensuring comprehensive support for all legal
              matters.
            </p>
          </div>
          <div className="w-full h-[300px] bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20  space-y-8 ">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-teal-400 to-blue-400"></div>
            <MdSentimentSatisfiedAlt className="text-7xl text-primary " />
            <div>
              <h3 className="text-xl font-semibold  ">Client Satisfaction</h3>

              <div className="w-[100px] border-b-2 border-primary p-1"></div>
            </div>
            <p className="text-sm font-medium  mt-2 ">
              Our primary goal is client satisfaction, and we work tirelessly to
              achieve the best results for those we represent.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offers;
