import React from "react";
import { statictisEight } from "@/data/features";
export default function StatictisEight() {
  return (
    <section className="section-bg pt-90 pb-90 lg:pt-50 lg:pb-50">
      <div className="section-bg__item -full">
        <div
          className="bg-image js-lazy"
          style={{ backgroundImage: "url(/assets/img/home-8/grow/bg.png)" }}
        ></div>
      </div>

      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div
            className="col-xl-4 col-lg-5 col-md-8"
            data-aos="fade-up"
            data-aos-duration={450}
          >
            <h2 className="text-30 lh-15 text-white">
              Impulsione sua carreira hoje com os cursos da Nexus Educação
            </h2>
            <p className="text-white mt-15">
              Descubra uma nova maneira de aprender com cursos de alta qualidade e instrutores especializados.
            </p>
            <div className="d-inline-block mt-25">
              <a href="#" className="button -md -green-1 text-dark-1">
                Explore os Cursos
              </a>
            </div>
          </div>

          <div
            className="col-lg-auto"
            data-aos="fade-up"
            data-aos-duration={450}
          >
            <div className="composition -type-6">
              {statictisEight.map((elm, i) => (
                <div key={i} className={elm.className}>
                  <div className="bg-white rounded-16 px-60 py-50 sm:px-30 sm:py-40 text-center">
                    <div className="text-55 fw-700 text-dark-1">
                      {elm.score}
                    </div>
                    <div className="mt-10">{elm.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
