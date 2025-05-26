import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";

import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";

import ShopOrder from "@/components/shop/ShopOrder";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title:
    "Pedido na Loja || Nexus Educação - Template ReactJS de Cursos Online e LMS Profissional",
  description:
    "Eleve seu conteúdo de e-learning com o Nexus Educação, o template LMS mais impressionante para cursos online, educação e plataformas LMS.",
};
export default function ShopOrderPage() {
  return (
    <div className="main-content  ">
      <MetaComponent meta={metadata} />
      <Preloader />

      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />

        <ShopOrder />

        <FooterOne />
      </div>
    </div>
  );
}
