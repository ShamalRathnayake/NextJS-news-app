"use client";

import { useRouter } from "next/navigation";
import AdminRoute from "../components/Routing/AdminRoute";
import Sidebar from "../components/Sidebar/Sidebar";
import ViewArticles from "../components/ViewArticles/ViewArticles";

const DashboardPage = () => {
  const router = useRouter();
  const { section } = router.query || {};

  const renderContent = () => {
    switch (section) {
      case "overview":
      /*  return <Overview />; */
      case "reports":
      /*   return <Reports />; */
      case "settings":
      /*    return <Settings />; */
      default:
        return <ViewArticles />; // Default to Overview if no section is specified
    }
  };
  return (
    <AdminRoute>
      <div className="flex flex-col md:flex-row min-h-screen bg-white">
        <aside className="md:w-64 lg:w-64 p-4">{<Sidebar />}</aside>

        <main className="md:w-3/4  p-4">{renderContent()}</main>
      </div>
    </AdminRoute>
  );
};

export default DashboardPage;
