import Faq from "@/components/common/Faq";
import Preloader from "@/components/common/Preloader";
import ContactOne from "@/components/contacts/ContactOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Contato-1 || Nexus Educação - Plataforma de Cursos Online e LMS",
  description:
    "Eleve seu conteúdo de aprendizado com a Nexus Educação, a mais impressionante plataforma LMS para cursos online, educação e sistemas de gestão de aprendizado.",
};

export default function ContactPage1() {
  return (
    <div className="main-content  ">
      <MetaComponent meta={metadata} />

      <Preloader />

      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <ContactOne />
        <Faq />

        <FooterOne />
      </div>
    </div>
  );
}
