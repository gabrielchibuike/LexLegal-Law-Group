// import Image from "next/image";
// import React from "react";

// function PraticeArea() {
//   return (
//     <>
//       <div className="h-screen  flex flex-col justify-center px-10">
//         <div className="space-y-3.5">
//           <h3 className="text-lg text-center text-primary font-medium ">
//             Pratice Area Of Us
//           </h3>
//           <h3 className="text-4xl text-center font-semibold ">
//             Cases we can can work with.
//           </h3>
//           <h3 className="text-lg text-center font- ">
//             Whatever the issue is, we can help you with it.
//           </h3>
//         </div>
//         <div className="flex gap-5 justify-between mt">
//           <div>
//             <Image
//               src={"/image1.png"}
//               width={500}
//               height={500}
//               alt=""
//               className="object-cover w-[350px] h-[250px] mx-auto mt-5 rounded-am"
//             />
//           </div>
//           <div>
//             <Image
//               src={"/image1.png"}
//               width={500}
//               height={500}
//               alt=""
//               className="object-cover w-[350px] h-[250px] mx-auto mt-5 rounded-am"
//             />
//           </div>
//           <div>
//             <Image
//               src={"/image1.png"}
//               width={500}
//               height={500}
//               alt=""
//               className="object-cover w-[350px] h-[250px] mx-auto mt-5 rounded-am"
//             />
//           </div>
//           <div>
//             <Image
//               src={"/image1.png"}
//               width={500}
//               height={500}
//               alt=""
//               className="object-cover w-[350px] h-[250px] mx-auto mt-5 rounded-am"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default PraticeArea;
"use client";
import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Users, Home, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type CaseType = {
  id: number;
  title: string;
  image: string;
  icon: React.JSX.Element;
  points: string[];
  modalContent: {
    title: string;
    description: string;
    services: string[];
  };
};

const CasesWeWorkWith = () => {
  const [selectedModal, setSelectedModal] = useState<CaseType | null>(null);

  const cases = [
    {
      id: 1,
      title: "Business & Financing",
      image: "/law_libary.png",
      icon: <Users className="w-8 h-8" />,
      points: ["Banking and finance", "Business formation", "Contracts"],
      modalContent: {
        title: "Business & Financing Services",
        description:
          "Our experienced team provides comprehensive legal support for all your business and financial needs. We understand the complexities of modern business operations and offer tailored solutions to help your enterprise thrive.",
        services: [
          "Banking and Finance Law - Regulatory compliance, loan agreements, and financial structuring",
          "Business Formation - Entity selection, incorporation, partnership agreements, and operating agreements",
          "Contract Law - Drafting, reviewing, and negotiating commercial contracts and agreements",
          "Mergers & Acquisitions - Due diligence, transaction structuring, and post-merger integration",
          "Corporate Governance - Board advisory, compliance programs, and risk management",
          "Securities Law - Private placements, public offerings, and regulatory filings",
        ],
      },
    },
    {
      id: 2,
      title: "Estate Planning",
      image: "/img1.webp",
      icon: <Home className="w-8 h-8" />,
      points: ["Protecting assets", "Avoiding probate", "Succession strategy"],
      modalContent: {
        title: "Estate Planning Services",
        description:
          "Secure your family's future with our comprehensive estate planning services. We help you create a customized plan that protects your assets, minimizes taxes, and ensures your wishes are carried out.",
        services: [
          "Will & Testament Preparation - Comprehensive will drafting and regular updates",
          "Trust Creation - Revocable and irrevocable trusts for asset protection and tax planning",
          "Probate Avoidance - Strategies to minimize probate court involvement",
          "Tax Planning - Estate and gift tax optimization strategies",
          "Power of Attorney - Financial and healthcare decision-making documents",
          "Business Succession - Planning for the transfer of family businesses",
        ],
      },
    },
    {
      id: 3,
      title: "Family Issues",
      image: "/img2.webp",
      icon: <Heart className="w-8 h-8" />,
      points: ["Custody and support", "Dissolution", "Mediation"],
      modalContent: {
        title: "Family Law Services",
        description:
          "Navigate life's most challenging moments with compassionate and skilled legal representation. Our family law team provides sensitive, effective counsel during difficult times.",
        services: [
          "Divorce & Separation - Uncontested and contested divorce proceedings",
          "Child Custody & Support - Parenting plans, custody modifications, and support calculations",
          "Mediation Services - Alternative dispute resolution for family matters",
          "Adoption - Stepparent, domestic, and international adoption procedures",
          "Prenuptial Agreements - Asset protection and financial planning for couples",
          "Domestic Violence Protection - Restraining orders and safety planning",
        ],
      },
    },
    {
      id: 4,
      title: "Personal Injury",
      image: "/img3.webp",
      icon: <Users className="w-8 h-8" />,
      points: ["Auto accidents", "Medical malpractice", "Workplace injuries"],
      modalContent: {
        title: "Personal Injury Services",
        description:
          "When you've been injured due to someone else's negligence, you deserve experienced representation to fight for your rights and fair compensation.",
        services: [
          "Auto Accidents - Car, truck, motorcycle, and pedestrian accident cases",
          "Medical Malpractice - Hospital negligence, surgical errors, and misdiagnosis claims",
          "Workplace Injuries - Workers' compensation and third-party liability claims",
          "Slip & Fall - Premises liability and property owner negligence cases",
          "Product Liability - Defective product and dangerous manufacturing claims",
          "Wrongful Death - Compensation for families who have lost loved ones",
        ],
      },
    },
    {
      id: 5,
      title: "Criminal Defense",
      image: "/img4.webp",
      icon: <Users className="w-8 h-8" />,
      points: ["DUI/DWI defense", "Drug charges", "White collar crimes"],
      modalContent: {
        title: "Criminal Defense Services",
        description:
          "Protecting your rights and freedom with aggressive, strategic criminal defense representation. Our experienced attorneys fight tirelessly for the best possible outcome in your case.",
        services: [
          "DUI/DWI Defense - Breathalyzer challenges, field sobriety test defense, and license restoration",
          "Drug Charges - Possession, trafficking, and manufacturing defense strategies",
          "White Collar Crimes - Fraud, embezzlement, and financial crime defense",
          "Violent Crimes - Assault, battery, and domestic violence defense",
          "Theft Crimes - Burglary, robbery, and property crime defense",
          "Federal Crimes - Complex federal criminal defense and appeals",
        ],
      },
    },
  ];

  const Modal = ({
    case: caseData,
    onClose,
  }: {
    case: CaseType;
    onClose: () => void;
  }) => (
    <div className="fixed inset-0  backdrop-blur-sm bg-opacity-50 flex items-center justify-center p-4 max-lg:p-0 z-100">
      <div className="bg-white rounded-lg max-w-2xl w-full h-[90vh] max-lg:h-full overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="text-amber-600">{caseData.icon}</div>
              <h2 className="text-2xl font-bold text-gray-800">
                {caseData.modalContent.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {caseData.modalContent.description}
          </p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Our Services Include:
            </h3>
            {caseData.modalContent.services.map(
              (service: any, index: number) => {
                const [title, description] = service.split(" - ");
                return (
                  <div
                    key={index}
                    className="border-l-4 border-amber-500 pl-4 py-2"
                  >
                    <h4 className="font-semibold text-gray-800">{title}</h4>
                    {description && (
                      <p className="text-gray-600 text-sm mt-1">
                        {description}
                      </p>
                    )}
                  </div>
                );
              }
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Contact us today for a consultation to discuss your specific
              needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-amber-600 text-sm font-medium tracking-wide uppercase mb-2">
            HOW CAN WE HELP YOU
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 max-lg:text-2xl">
            Cases We Work With.
          </h1>
          <p className=" text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            Whatever your issue is, we can help you with it.
          </p>
        </div>

        {/* Cards Container with Horizontal Scroll */}
        <div className="relative">
          {/* Scroll Arrows */}
          {/* <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button> */}

          {/* Scrollable Cards */}
          <div className="overflow-x-auto scrollbar-hide px-4">
            <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
              {cases.map((caseItem) => (
                <div
                  key={caseItem.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 w-80 hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Card Image */}
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                    {/* <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-gray-400">{caseItem.icon}</div>
                    </div> */}
                    {/* Simulated image placeholder */}
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 opacity-30"></div> */}
                    <Image
                      src={caseItem.image}
                      width={500}
                      height={500}
                      alt=""
                      className=" object-cover h-48 w-full"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {caseItem.title}
                    </h3>

                    <ul className="space-y-2 mb-6">
                      {caseItem.points.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-600"
                        >
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={() => setSelectedModal(caseItem)}
                      className="w-full h-12 cursor-pointer flex items-cente "
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedModal && (
        <Modal case={selectedModal} onClose={() => setSelectedModal(null)} />
      )}

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CasesWeWorkWith;
