// import React, { useState } from "react";
// import { Home, List, History, Wallet, Plus } from "lucide-react";

// const BottomNavBar = () => {
//   const [activeTab, setActiveTab] = useState("dashboard");

//   const navItems = [
//     {
//       id: "dashboard",
//       label: "Dashboard",
//       icon: Home,
//     },
//     {
//       id: "betlist",
//       label: "Bet List",
//       icon: List,
//     },
//     {
//       id: "center",
//       label: "Add",
//       icon: Plus,
//       isCenter: true,
//     },
//     {
//       id: "bethistory",
//       label: "Bet History",
//       icon: History,
//     },
//     {
//       id: "balance",
//       label: "Balance",
//       icon: Wallet,
//     },
//   ];

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
//       <div className="relative">
//         {/* Main Navigation Container */}
//         <div className="flex items-center justify-around px-4 py-2 bg-gradient-to-r from-pink-50 to-purple-50">
//           {navItems.map((item, index) => {
//             const IconComponent = item.icon;

//             if (item.isCenter) {
//               return (
//                 <div key={item.id} className="relative">
//                   {/* Center Button with Elevated Design */}
//                   <button
//                     onClick={() => setActiveTab(item.id)}
//                     className="relative -top-6 bg-red-600 hover:bg-red-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-200 hover:scale-110"
//                   >
//                     <IconComponent className="w-6 h-6" />
//                   </button>
//                   {/* Center Button Label */}
//                   <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
//                     <span className="text-xs text-gray-500 font-medium whitespace-nowrap">
//                       {item.label}
//                     </span>
//                   </div>
//                 </div>
//               );
//             }

//             const isActive = activeTab === item.id;

//             return (
//               <button
//                 key={item.id}
//                 onClick={() => setActiveTab(item.id)}
//                 className={`flex flex-col items-center justify-center py-2 px-3 transition-all duration-200 ${
//                   isActive
//                     ? "text-red-600 transform scale-105"
//                     : "text-gray-500 hover:text-red-500"
//                 }`}
//               >
//                 <div
//                   className={`p-1 rounded-lg transition-all duration-200 ${
//                     isActive ? "bg-red-50" : "hover:bg-gray-50"
//                   }`}
//                 >
//                   <IconComponent
//                     className={`w-6 h-6 ${
//                       isActive ? "text-red-600" : "text-current"
//                     }`}
//                   />
//                 </div>
//                 <span
//                   className={`text-xs mt-1 font-medium transition-all duration-200 ${
//                     isActive ? "text-red-600" : "text-gray-500"
//                   }`}
//                 >
//                   {item.label}
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Active Tab Indicator */}
//         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 opacity-20"></div>
//       </div>
//     </div>
//   );
// };

// export default BottomNavBar;
