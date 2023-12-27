import React from "react";
import UD_Header from "../../components/UserDashboard/UD_Header";
import UD_Sidebar from "../../components/UserDashboard/UD_Sidebar";

const UserDashboard_Page = () => {
  return (
    <>
      <section>
        <UD_Header />
        <UD_Sidebar />
      </section>
    </>
  );
};

export default UserDashboard_Page;
