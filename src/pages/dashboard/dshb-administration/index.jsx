import DashboardOne from "@/components/dashboard/DashboardOne";
import Sidebar from "@/components/dashboard/Sidebar";
import Administration from "@/components/dashboard/Administration";
import HeaderDashboard from "@/components/layout/headers/HeaderDashboard";
import React from "react";
import Preloader from "@/components/common/Preloader";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title:
    "Administração do Painel || Nexus Educação - Plataforma de Cursos Online e LMS",
  description:
    "Eleve seu conteúdo de aprendizado com a Nexus Educação, a mais impressionante plataforma LMS para cursos online, educação e sistemas de gestão de aprendizado.",
};

export default function DshbAdministrationPage() {
  return (
    <div className="barba-container" data-barba="container">
      <MetaComponent meta={metadata} />
      <main className="main-content">
        <Preloader />
        <HeaderDashboard />
        <div className="content-wrapper js-content-wrapper overflow-hidden">
          <div
            id="dashboardOpenClose"
            className="dashboard -home-9 js-dashboard-home-9"
          >
            <div className="dashboard__sidebar scroll-bar-1">
              <Sidebar />
            </div>
            <Administration />
          </div>
        </div>
      </main>
    </div>
  );
}
