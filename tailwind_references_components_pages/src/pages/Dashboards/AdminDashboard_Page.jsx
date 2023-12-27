import React from "react";
import AD_Sidebar from "../../components/AdminDashboard/AD_Sidebar";
import AD_DashboardView from "../../components/AdminDashboard/AD_DashboardView";
import AD_DashboardContent from "../../components/AdminDashboard/AD_DashboardContent";

const AdminDashboard_Page = () => {
  return (
    <>
      <section className="h-screen w-screen overflow-hidden">
        <div className="flex">
          <div className="basis-[15%] h-screen">
            <AD_Sidebar />
          </div>
          <div className="basis-[85%]">
            <AD_DashboardView />

            <AD_DashboardContent />
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard_Page;
