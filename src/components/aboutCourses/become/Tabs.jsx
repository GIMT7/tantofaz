import React, { useState, useEffect } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="row justify-center">
      <div className="col-xl-8 col-lg-9 col-md-11">
        <div className="tabs -active-purple-2 js-tabs">
          <div className="tabs__controls d-flex js-tabs-controls">
            <button
              onClick={() => setActiveTab(1)}
              className={`tabs__button js-tabs-button ${
                activeTab == 1 ? "is-active" : ""
              } `}
              data-tab-target=".-tab-item-1"
              type="button"
            >
              Torne-se um Instrutor
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`tabs__button js-tabs-button ml-30 ${
                activeTab == 2 ? "is-active" : ""
              } `}
              data-tab-target=".-tab-item-2"
              type="button"
            >
              Regras para Instrutores
            </button>
            <button
              onClick={() => setActiveTab(3)}
              className={`tabs__button js-tabs-button ml-30 ${
                activeTab == 3 ? "is-active" : ""
              } `}
              data-tab-target=".-tab-item-3"
              type="button"
            >
              Comece com Cursos
            </button>
          </div>

          <div className="tabs__content pt-60 lg:pt-40 js-tabs-content">
            <div
              className={`tabs__pane -tab-item-1 ${
                activeTab == 1 ? "is-active" : ""
              } `}
            >
              <p className="text-light-1">
                A Nexus Educação oferece uma plataforma para que você se torne um instrutor e compartilhe seu conhecimento com milhares de alunos. Crie cursos envolventes e transforme vidas através da educação.
                <br />
                <br />
                Junte-se a uma comunidade de especialistas e inspire a próxima geração de aprendizes.
              </p>
            </div>
            <div
              className={`tabs__pane -tab-item-2 ${
                activeTab == 2 ? "is-active" : ""
              } `}
            >
              <p className="text-light-1">
                Como instrutor da Nexus Educação, você deve seguir nossas diretrizes para garantir a melhor experiência de aprendizado para os alunos. Mantenha a qualidade do conteúdo e seja um mentor dedicado.
              </p>
            </div>
            <div
              className={`tabs__pane -tab-item-3 ${
                activeTab == 3 ? "is-active" : ""
              } `}
            >
              <p className="text-light-1">
                Comece criando cursos de alta qualidade na Nexus Educação. Use nossas ferramentas para planejar, gravar e publicar seu conteúdo. Alcance milhares de alunos e faça a diferença na educação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
