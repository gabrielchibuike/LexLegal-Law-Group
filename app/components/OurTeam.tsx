import Image from "next/image";
import React from "react";

function OurTeam() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center px-10 my-30 ">
        <div className="space-y-3">
          <h3 className="text-sm text-center text-primary font-medium ">
            OUR TEAM
          </h3>
          <h3 className="text-4xl text-center font-semibold max-lg:text-2xl ">
            MEET OUR ATTORNEYS
          </h3>
          <h3 className=" text-lg text-center text-muted-foreground ">
            Our team consists of 15+ highly skilled attorneys
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-10 max-lg:grid-cols-1">
          <div className="w-full min-h-[450px] space-y-5">
            <Image
              src={"/lawyer_1.avif"}
              alt="Alicia Bennett"
              width={500}
              height={500}
              className="h-[400px] object-cover rounded-lg mb-4"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-semibold">Alicia Bennett</h3>
              <p className="text-sm font-medium">
                Family Law Specialist | 18 years experience
              </p>
            </div>
          </div>
          <div className="w-full min-h-[450px] space-y-5">
            <Image
              src={"/lawyer_2.avif"}
              alt="David Stone"
              width={500}
              height={500}
              className="h-[400px] object-cover rounded-lg mb-4"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-semibold">David Stone</h3>
              <p className="text-sm font-medium">
                Criminal Defense Expert | 22 years experience
              </p>
            </div>
          </div>
          <div className="w-full min-h-[450px] space-y-5">
            <Image
              src={"/lawyer_4.avif"}
              alt="Priya Nwosu"
              width={500}
              height={500}
              className="h-[400px] object-cover rounded-lg mb-4"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-semibold">Priya Nwosu</h3>
              <p className="text-sm font-medium">
                Corporate Law & M&A | 15 years experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
