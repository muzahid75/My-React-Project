import React, { useEffect, useState } from "react";
import axios from "axios";
import LeadSteps from "./LeadSteps";

const lifecycleOptions = [
  "New Leads", "In Process", "Future Interest",
  "Cold Leads", "Applicant", "Payment", "CAS Issued", "Enrolled"
];

export default function LeadDetails() {
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedLifecycle, setSelectedLifecycle] = useState("New Leads");
  const [leadStatus, setLeadStatus] = useState("");
  const [leadOwner, setLeadOwner] = useState("");

  useEffect(() => {
    axios.get("http://35.177.100.215:8002/lead/38")
      .then((response) => {
        const data = response.data;
        setLead(data);
        setSelectedLifecycle(lifecycleOptions[data.lifecycle_status] || "New Leads");
        setLeadStatus(data.lead_status || "");
        setLeadOwner(data.lead_owner || "");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch lead data:", error);
        setLoading(false);
      });
  }, []);

  const handleSave = () => {
  if (!selectedLifecycle) {
    alert("All fields are required.");
    return;
  }

  const payload = {
    lifecycle_status: selectedLifecycle,
    lead_status: leadStatus,
    lead_owner: leadOwner,
  };

  console.log("Payload being sent:", payload);

  axios.patch("http://35.177.100.215:8002/lead/38/edit", payload, {
    headers: { "Content-Type": "application/json" }
  })
  .then((response) => {
    alert("Lead updated successfully.");
    console.log("Update response:", response.data);
  })
  .catch((error) => {
    console.error("Update failed:", error.response?.data || error.message);
    alert("Update failed. See console for details.");
  });
};

  if (loading) return <p>Loading...</p>;
  if (!lead) return <p>No data available.</p>;

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-1">{lead.name || "Hasib Ahmed"}</h1>
      <p className="text-sm text-gray-600 mb-4">Last Qualification: N/A</p>

      <LeadSteps currentStep={selectedLifecycle} />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="border rounded p-4 bg-white">
            <div className="flex space-x-4 text-blue-600 border-b mb-4 pb-2">
              <span className="border-b-2 border-blue-600">Highlights</span>
              <span>Details</span>
              <span>Activities</span>
            </div>

            <div className="mt-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{lead.phone || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{lead.email || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Lead Source</p>
                  <p className="font-medium">{lead.lead_source || "N/A"}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Lifecycle Status</p>
                  <select
                    className="border rounded w-full px-2 py-1"
                    value={selectedLifecycle}
                    onChange={(e) => setSelectedLifecycle(e.target.value)}
                  >
                    {lifecycleOptions.map((label) => (
                      <option key={label} value={label}>{label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Lead Status</p>
                  <select
                    className="border rounded w-full px-2 py-1"
                    value={leadStatus}
                    onChange={(e) => setLeadStatus(e.target.value)}
                  >
                    <option value="">Lead Status</option>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Lost">Lost</option>
                    <option value="Converted">Converted</option>
                  </select>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Lead Owner</p>
                  <select
                    className="border rounded w-full px-2 py-1"
                    value={leadOwner}
                    onChange={(e) => setLeadOwner(e.target.value)}
                  >
                    <option value="">Lead Owner</option>
                    <option value="Hasib">Hasib</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
