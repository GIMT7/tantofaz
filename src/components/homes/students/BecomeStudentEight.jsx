import React from "react";

export default function BecomeStudentEight() {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row y-gap-30 items-center">
          <div className="col-xl-4 offset-xl-1 order-lg-1 col-lg-6 order-2">
            <h3 className="text-24 lh-1">Torne-se um Estudante</h3>
            <p className="mt-20">
              Junte-se a milhões de pessoas ao redor do mundo aprendendo juntas.
              O aprendizado online é fácil e natural com a Nexus Educação.
            </p>
            <div className="d-inline-block mt-20">
              <a href="#" className="button -md -outline-dark-2 text-dark-2">
                Inscreva-se Agora
              </a>
            </div>
          </div>

          <div className="col-xl-5 offset-xl-1 col-lg-6 order-lg-2 order-1">
            <img
              className="w-1/1"
              src="/assets/img/home-8/features/2.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
