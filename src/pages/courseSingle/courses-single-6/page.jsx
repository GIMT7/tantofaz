import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";

import CourseDetailsSix from "@/components/courseSingle/CourseDetailsSix";

import CourseSlider from "@/components/courseSingle/CourseSlider";
import FooterOne from "@/components/layout/footers/FooterOne";

import Header from "@/components/layout/headers/Header";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import { useParams } from "react-router-dom";
const metadata = {
  title:
    "Curso-único-6 || Nexus Educação - Plataforma de Cursos Online e LMS",
  description:
    "Eleve seu conteúdo de aprendizado com a Nexus Educação, a mais impressionante plataforma LMS para cursos online, educação e sistemas de gestão de aprendizado.",
};

export default function CourseSinglePage6() {
  let params = useParams();
  return (
    <div className="main-content  ">
      <MetaComponent meta={metadata} />
      <Preloader />
      <Header />
      <div className="content-wrapper  js-content-wrapper">
        <PageLinks dark={true} />
        <CourseDetailsSix id={params.id} />
        <CourseSlider />
        <FooterOne />
      </div>
    </div>
  );
}
