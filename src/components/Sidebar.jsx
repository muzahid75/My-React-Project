import React from "react";
import { Home, Users, BarChart2, MessageSquare, Settings } from "lucide-react";

const menuItems = [
  { icon: <Home />, label: "Dashboard" },
  { icon: <Users />, label: "Leads" },
  { icon: <BarChart2 />, label: "Reports" },
  { icon: <MessageSquare />, label: "Messages" },
  { icon: <Settings />, label: "Settings" },
];

export default function Sidebar() {
  return (
    <div className="bg-blue-900 text-white h-screen w-16 lg:w-20 flex flex-col items-center py-6 space-y-6 fixed left-0 top-0 z-10">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center hover:text-yellow-400 cursor-pointer"
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}
