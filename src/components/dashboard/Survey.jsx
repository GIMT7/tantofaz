import React from "react";
import FooterNine from "../layout/footers/FooterNine";
import PageLinksTwo from "../common/PageLinksTwo";

export default function Survey() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Pesquisa de Opinião</h1>

            <PageLinksTwo />
          </div>
        </div>

        <div className="row y-gap-30">
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Cabeçalho da Página</h2>
              </div>

              <div className="py-30 px-30">
                <h4 className="text-24 lh-12 fw-500">
                  Sua opinião sobre este curso
                </h4>
                <div className="mt-15">
                  Modo: O nome do usuário será registrado e exibido com as respostas
                </div>

                <div className="mt-50">
                  <div className="row y-gap-20">
                    <div className="col-lg-4">
                      <div className="text-dark-1">
                        Como você avalia este curso?
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="form-radio d-flex items-center ">
                        <div className="radio">
                          <input type="radio" />
                          <div className="radio__mark">
                            <div className="radio__icon"></div>
                          </div>
                        </div>
                        <div className=" ml-12">Excelente</div>
                      </div>

                      <div className="form-radio d-flex items-center mt-10">
                        <div className="radio">
                          <input type="radio" />
                          <div className="radio__mark">
                            <div className="radio__icon"></div>
                          </div>
                        </div>
                        <div className=" ml-12">Bom</div>
                      </div>

                      <div className="form-radio d-flex items-center mt-10">
                        <div className="radio">
                          <input type="radio" defaultChecked />
                          <div className="radio__mark">
                            <div className="radio__icon"></div>
                          </div>
                        </div>
                        <div className=" ml-12">Satisfatório</div>
                      </div>

                      <div className="form-radio d-flex items-center mt-10">
                        <div className="radio">
                          <input type="radio" />
                          <div className="radio__mark">
                            <div className="radio__icon"></div>
                          </div>
                        </div>
                        <div className=" ml-12">Ruim</div>
                      </div>
                    </div>
                  </div>

                  <div className="row y-gap-20 pt-40">
                    <div className="col-lg-4">
                      <div className="text-dark-1">
                        Em uma palavra, como você descreveria o curso para outros alunos?
                      </div>
                    </div>

                    <div className="col-auto">
                      <form onSubmit={handleSubmit} className="contact-form">
                        <div className="col-12">
                          <input type="text" placeholder="Digite aqui" />
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="row y-gap-20 pt-40">
                    <div className="col-lg-4">
                      <div className="text-dark-1">Você utilizou o aplicativo móvel?</div>
                    </div>

                    <div className="col-auto">
                      <div className="form-radio d-flex items-center ">
                        <div className="radio">
                          <input type="radio" />
                          <div className="radio__mark">
                            <div className="radio__icon"></div>
                          </div>
                        </div>
                        <div className=" ml-12">Sim</div>
                      </div>

                      <div className="form-radio d-flex items-center mt-10">
                        <div className="radio">
                          <input type="radio" defaultChecked />
                          <div className="radio__mark">
                            <div className="radio__icon"></div>
                          </div>
                        </div>
                        <div className=" ml-12">Não</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex x-gap-20 items-center pt-30">
                  <div>
                    <a
                      href="#"
                      className="button px-50 -dark-1 -dark-button-white h-50 text-white"
                    >
                      Próxima Página
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="button px-50 -outline-dark-1 h-50 text-dark-1"
                    >
                      Cancelar
                    </a>
                  </div>
                </div>

                <div className="d-flex justify-between items-center mt-40">
                  <a
                    href="#"
                    className="button -icon -purple-3 h-50 text-purple-1"
                  >
                    Regras do Fórum
                    <i className="icon-arrow-top-right text-13 ml-10"></i>
                  </a>

                  <div
                    id="dd22button"
                    onClick={() => {
                      document
                        .getElementById("dd22button")
                        .classList.toggle("-is-dd-active");
                      document
                        .getElementById("dd22content")
                        .classList.toggle("-is-el-visible");
                    }}
                    className="dropdown js-dropdown js-category-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 -dark-border-white-10 border-light rounded-8 px-20 py-10 "
                      data-el-toggle=".js-category-toggle"
                      data-el-toggle-active=".js-category-active"
                    >
                      <span className="js-dropdown-title">Ir para...</span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd22content"
                      className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                    >
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Animação
                          </a>
                        </div>

                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Design
                          </a>
                        </div>

                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Ilustração
                          </a>
                        </div>

                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Negócios
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="button -icon -purple-3 h-50 text-purple-1"
                  >
                    Compartilhar Exemplos de Educação Digital
                    <i className="icon-arrow-top-right text-13 ml-10"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterNine />
    </div>
  );
}
