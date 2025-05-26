import { Link } from "react-router-dom";

import React from "react";

export default function JoinToday() {
  return (
    <section className="layout-pt-lg layout-pb-md bg-light-4">
      <div className="container">
        <div className="row y-gap-50 justify-between items-center">
          <div className="col-lg-7 pr-60">
            <img src="/assets/img/become-ins/1.png" alt="image" />
          </div>

          <div className="col-lg-5">
            <h2 className="text-45 lh-15">
              Torne-se um Instrutor{" "}
              <span className="text-purple-1">na Nexus Educação</span>
            </h2>
            <p className="text-dark-1 mt-25">
              Use a lista abaixo para destacar o principal diferencial do seu
              curso na Nexus Educação.
            </p>
            <div className="d-inline-block mt-30">
              <Link
                to="/instructor-become"
                className="button -md -dark-1 text-white"
              >
                Junte-se ao nosso time
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
