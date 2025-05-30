import React from "react";
import { Bell, PhoneCall, Settings } from "lucide-react";

export default function TopNavbar() {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-blue-700 text-white shadow">
      <div className="text-xl font-bold tracking-wide">CRM</div>

      <div className="flex items-center gap-8">
        <div className="flex gap-6 text-sm font-medium">
          <span className="hover:underline cursor-pointer">Home</span>
          <span className="hover:underline cursor-pointer">Leads</span>
          <span className="hover:underline cursor-pointer">Campaigns</span>
          <span className="hover:underline cursor-pointer">Accounts</span>
          <span className="hover:underline cursor-pointer">Tasks</span>
        </div>

        <div className="flex items-center gap-4">
          <PhoneCall className="cursor-pointer" />
          <Bell className="cursor-pointer" />
          <Settings className="cursor-pointer" />
          <img
            src="https://i.pravatar.cc/30"
            alt="Profile"
            className="w-8 h-8 rounded-full border border-white"
          />
        </div>
      </div>
    </div>
  );
}
