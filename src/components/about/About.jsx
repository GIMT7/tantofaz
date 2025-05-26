import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
export default function About() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  return (
    <>
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        style={{ position: "fixed", top: 20, right: 20, zIndex: 9999 }}
      >
        {darkMode ? "Modo Claro" : "Modo Escuro"}
      </button>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">Sobre Nós</h1>
                </div>

                <div>
                  <p className="page-header__text">
                    Estamos em uma missão para oferecer cursos envolventes e selecionados a um preço acessível.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-50 justify-between items-center">
            <div className="col-lg-6 pr-50 sm:pr-15">
              <div className="composition -type-8">
                <div className="-el-1">
                  <img src="/assets/img/about-1/1.png" alt="imagem" />
                </div>
                <div className="-el-2">
                  <img src="/assets/img/about-1/2.png" alt="imagem" />
                </div>
                <div className="-el-3">
                  <img src="/assets/img/about-1/3.png" alt="imagem" />
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <h2 className="text-30 lh-16">
                Bem-vindo à Nexus Educação. Aprimore suas habilidades com os melhores cursos online
              </h2>
              <p className="text-dark-1 mt-30">
                Você pode começar e terminar um desses cursos populares em menos de um dia – gratuitamente! Confira a lista abaixo. Faça o curso gratuitamente.
              </p>
              <p className="pr-50 lg:pr-0 mt-25">
                Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egetnval
              </p>
              <div className="d-inline-block">
                <Link
                  to="/signup"
                  className="button -md -purple-1 text-white mt-30"
                >
                  Comece a Aprender Gratuitamente
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
