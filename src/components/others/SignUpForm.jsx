import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function SignUpForm() {
  const [darkMode, setDarkMode] = useState(() => document.body.classList.contains("dark-mode"));

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-page__content lg:py-50">
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        style={{ position: "fixed", top: 20, right: 20, zIndex: 9999 }}
      >
        {darkMode ? "Modo Claro" : "Modo Escuro"}
      </button>
      <div className="container">
        <div className="row justify-center items-center">
          <div className="col-xl-8 col-lg-9">
            <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
              <h3 className="text-30 lh-13">Criar Conta</h3>
              <p className="mt-10">
                Já possui uma conta?
                <Link to="/login" className="text-purple-1">
                  Entrar
                </Link>
              </p>

              <form
                className="contact-form respondForm__form row y-gap-20 pt-30"
                onSubmit={handleSubmit}
              >
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Endereço de Email *
                  </label>
                  <input required type="text" name="title" placeholder="Email" />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Nome de Usuário *
                  </label>
                  <input
                    required
                    type="text"
                    name="title"
                    placeholder="Nome de Usuário"
                  />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Senha *
                  </label>
                  <input
                    required
                    type="password"
                    name="title"
                    placeholder="Senha"
                  />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Confirmar Senha *
                  </label>
                  <input
                    required
                    type="password"
                    name="title"
                    placeholder="Confirmar Senha"
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    name="submit"
                    id="submit"
                    className="button -md -green-1 text-dark-1 fw-500 w-1/1"
                  >
                    Registrar
                  </button>
                </div>
              </form>

              <div className="lh-12 text-dark-1 fw-500 text-center mt-20">
                Ou cadastre-se usando
              </div>

              <div className="d-flex x-gap-20 items-center justify-between pt-20">
                <div>
                  <button className="button -sm px-24 py-20 -outline-blue-3 text-blue-3 text-14">
                    Entrar com Facebook
                  </button>
                </div>
                <div>
                  <button className="button -sm px-24 py-20 -outline-red-3 text-red-3 text-14">
                    Entrar com Google+
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
