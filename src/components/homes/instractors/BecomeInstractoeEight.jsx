import React from "react";

import { Link } from "react-router-dom";
export default function BecomeInstractoeEight() {
  return (
    <section className="layout-pt-lg layout-pb-md">
      <div className="container">
        <div className="row y-gap-30 items-center">
          <div className="col-xl-5 offset-xl-1 col-lg-6">
            <img
              className="w-1/1"
              src="/assets/img/home-8/features/1.png"
              alt="image"
            />
          </div>

          <div className="col-xl-4 offset-xl-1 col-lg-6">
            <h3 className="text-24 lh-1">Torne-se um Instrutor</h3>
            <p className="mt-20">
              Junte-se a milhões de pessoas do mundo todo aprendendo juntas na
              Nexus Educação. O aprendizado online é fácil e natural para todos.
            </p>
            <div className="d-inline-block mt-20">
              <Link
                to="/instructor-become"
                className="button -md -outline-purple-1 text-purple-1"
              >
                Inscreva-se Agora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
