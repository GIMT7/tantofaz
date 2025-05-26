import React from "react";
import Wrapper from "./Wrapper";
import HomePage1 from "./homes/home-1";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title:
    "Home-1 || Nexus Educação - Tecnologia e saber em conexão constante.",
  description:
    "Eleve seu conteúdo de e-learning com o Nexus Educação, o template LMS mais impressionante para cursos online, educação e plataformas LMS.",
};

export default function index() {
  return (  
    <Wrapper>
      <MetaComponent meta={metadata} />
      <HomePage1 />
    </Wrapper>
  );
}
