import { Link } from "react-router-dom";
import React from "react";

export default function HeroThree() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="masthead -type-2">
      <div className="masthead__bg">
        <div
          style={{ backgroundImage: "url(/assets/img/home-3/masthead/bg.png)" }}
          className="bg-image js-lazy"
          data-bg="/assets/img/home-3/masthead/bg.png"
        ></div>
      </div>

      <div className="container">
        <div className="row y-gap-50 justify-center items-center">
          <div
            className="col-xl-6 col-lg-11"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="masthead__content">
              <div className="masthead__subtitle fw-500 text-green-1 text-17 lh-15">
                Comece a aprender gratuitamente
              </div>
              <h1 className="masthead__title text-white mt-10">
                Explore sua criatividade com milhares de cursos online na Nexus Educação.
              </h1>
              <div className="masthead__button mt-20">
                <Link
                  to="/courses-list-1"
                  className="button -md -white text-dark-1"
                >
                  Encontre Cursos
                </Link>
              </div>
            </div>
          </div>

          <div
            className="col-xl-5 col-lg-11"
            data-aos="fade-up"
            data-aos-delay="750"
          >
            <div className="masthead-form">
              <h4 className="masthead-form__title text-center text-20 lh-15 fw-500 mb-30">
                Crie Sua <span className="text-purple-1">Conta Gratuita</span>
              </h4>

              <form onSubmit={handleSubmit}>
                <div className="masthead-form__group">
                  <label>Endereço de Email</label>
                  <input required type="text" placeholder="Seu Email" />
                </div>

                <div className="masthead-form__group">
                  <label>Senha</label>
                  <input required type="text" placeholder="Sua Senha" />
                </div>

                <div className="masthead-form__group">
                  <button
                    type="submit"
                    className="button -md -purple-1 text-white"
                  >
                    Comece a Aprender Gratuitamente
                  </button>
                </div>

                <div className="masthead-form__desc">
                  Ao continuar, você aceita nossos Termos de Uso, nossa Política de Privacidade e que seus dados sejam armazenados nos EUA. Você confirma que tem pelo menos 16 anos (13 se for um usuário autorizado do Classrooms).
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
