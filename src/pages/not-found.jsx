import NotFound from "@/components/not-found/NotFound";
import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";

import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title:
    "Página não encontrada || Nexus Educação - Tecnologia e saber em conexão constante.",
  description:
    "Eleve seu conteúdo de e-learning com o Nexus Educação, o template LMS mais impressionante para cursos online, educação e plataformas LMS.",
};
export default function NotFoundPage() {
  return (
    <div className="main-content  ">
      <MetaComponent meta={metadata} />

      <Preloader />

      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />
        <NotFound />
        <FooterOne />
      </div>
    </div>
  );
}
