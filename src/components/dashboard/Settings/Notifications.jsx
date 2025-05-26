import React from "react";

export default function Notifications({ activeTab }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className={`tabs__pane -tab-item-4 ${activeTab == 4 ? "is-active" : ""} `}
    >
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="row">
          <div className="col-12">
            <div className="text-16 fw-500 text-dark-1">
              Notificações - Escolha quando e como ser notificado
            </div>
            <p className="text-14 lh-13 mt-5">
              Selecione notificações push e por e-mail que você gostaria de receber
            </p>
          </div>
        </div>

        <div className="pt-60">
          <div className="row y-gap-20 justify-between">
            <div className="col-auto">
              <div className="text-16 fw-500 text-dark-1">
                Escolha quando e como ser notificado
              </div>
            </div>
          </div>

          <div className="pt-30">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="text-16 fw-500 text-dark-1">Assinaturas</div>
                <p className="text-14 lh-13 mt-5">
                  Notifique-me sobre atividades dos perfis que sigo
                </p>
              </div>
              <div className="col-auto">
                <div className="form-switch">
                  <div className="switch" data-switch=".js-switch-content">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top-light pt-20 mt-20">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="text-16 fw-500 text-dark-1">
                  Cursos Recomendados
                </div>
                <p className="text-14 lh-13 mt-5">
                  Notifique-me sobre atividades dos perfis que sigo
                </p>
              </div>
              <div className="col-auto">
                <div className="form-switch">
                  <div className="switch" data-switch=".js-switch-content">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top-light pt-20 mt-20">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="text-16 fw-500 text-dark-1">
                  Respostas aos meus comentários
                </div>
                <p className="text-14 lh-13 mt-5">
                  Notifique-me sobre atividades dos perfis que sigo
                </p>
              </div>
              <div className="col-auto">
                <div className="form-switch">
                  <div className="switch" data-switch=".js-switch-content">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top-light pt-20 mt-20">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="text-16 fw-500 text-dark-1">
                  Atividade nos meus comentários
                </div>
                <p className="text-14 lh-13 mt-5">
                  Notifique-me sobre atividades dos perfis que sigo
                </p>
              </div>
              <div className="col-auto">
                <div className="form-switch">
                  <div className="switch" data-switch=".js-switch-content">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-60">
          <div className="row y-gap-20 justify-between">
            <div className="col-auto">
              <div className="text-16 fw-500 text-dark-1">
                Notificações por e-mail
              </div>
            </div>
          </div>

          <div className="pt-30">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="text-16 fw-500 text-dark-1">
                  Envie-me e-mails sobre minha atividade e atualizações na Nexus Educação
                </div>
                <p className="text-14 lh-13 mt-5">
                  Notifique-me sobre atividades dos perfis que sigo
                </p>
              </div>
              <div className="col-auto">
                <div className="form-switch">
                  <div className="switch" data-switch=".js-switch-content">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top-light pt-20 mt-20">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="text-16 fw-500 text-dark-1">
                  Promoções, recomendações de cursos e recursos úteis da Nexus Educação.
                </div>
                <p className="text-14 lh-13 mt-5">
                  Notifique-me sobre atividades dos perfis que sigo
                </p>
              </div>
              <div className="col-auto">
                <div className="form-switch">
                  <div className="switch" data-switch=".js-switch-content">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top-light pt-20 mt-20">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="text-16 fw-500 text-dark-1">
                  Anúncios de instrutores dos cursos em que estou matriculado.
                </div>
                <p className="text-14 lh-13 mt-5">
                  Notifique-me sobre atividades dos perfis que sigo
                </p>
              </div>
              <div className="col-auto">
                <div className="form-switch">
                  <div className="switch" data-switch=".js-switch-content">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-30">
          <div className="col-12">
            <button className="button -md -purple-1 text-white">
              Salvar Alterações
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
