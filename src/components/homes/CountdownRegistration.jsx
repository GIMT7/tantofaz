import React, { useRef, useEffect, useState } from "react";
export default function CountdownRegistration() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();
  const setTimer = () => {
    const countdownDate = new Date("Dec 30, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    setTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="layout-pt-lg bg-purple-1">
        <div className="container">
          <div className="row y-gap-30 items-center">
            <div className="col-lg-5">
              <div className="bg-white rounded-16 px-30 py-30">
                <h3 className="text-20 lh-15 text-center">
                  Crie sua
                  <span className="text-purple-1">Conta Gratuita</span>
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="contact-form row y-gap-30 pt-30"
                >
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Endereço de Email
                    </label>
                    <input
                      required
                      type="text"
                      name="email"
                      placeholder="Email..."
                    />
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Senha
                    </label>
                    <input
                      required
                      type="password"
                      name="password"
                      placeholder="Senha..."
                    />
                  </div>
                  <div className="col-12">
                    <button className="button -md -purple-1 w-1/1 text-white">
                      Comece a Aprender Gratuitamente
                    </button>
                    <div className="text-13 lh-17 mt-15">
                      Ao continuar, você aceita nossos Termos de Uso, nossa
                      Política de Privacidade e que seus dados sejam armazenados
                      nos EUA. Você confirma que tem pelo menos 16 anos (13 se
                      for um usuário autorizado do Classrooms).
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="offset-xl-2 col-xl-4 offset-lg-1 col-lg-5 col-md-9">
              <h2 className="text-30 lh-13 text-white">
                Registre-se Agora e Obtenha 70% de Desconto
              </h2>
              <p className="text-lg text-white mt-10">
                Obtenha 100 Cursos Online Gratuitamente
              </p>

              <div className="js-countdown">
                <div className="row x-gap-50 y-gap-30 pt-60 lg:pt-30">
                  <div className="col-md-auto col-6">
                    <div className="text-center text-white">
                      <div className="text-45 lh-12 fw-700 js-countdown-days">
                        {timerDays}
                      </div>
                      <div className="mt-5">Dias</div>
                    </div>
                  </div>

                  <div className="col-md-auto col-6">
                    <div className="text-center text-white">
                      <div className="text-45 lh-12 fw-700 js-countdown-hours">
                        {timerHours}
                      </div>
                      <div className="mt-5">Horas</div>
                    </div>
                  </div>

                  <div className="col-md-auto col-6">
                    <div className="text-center text-white">
                      <div className="text-45 lh-12 fw-700 js-countdown-minutes">
                        {timerMinutes}
                      </div>
                      <div className="mt-5">Minutos</div>
                    </div>
                  </div>

                  <div className="col-md-auto col-6">
                    <div className="text-center text-white">
                      <div className="text-45 lh-12 fw-700 js-countdown-seconds">
                        {timerSeconds}
                      </div>
                      <div className="mt-5">Segundos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="svg-shape bg-light-4">
        <svg
          width="1925"
          height="261"
          viewBox="0 0 1925 261"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule={"evenodd"}
            d="M1924.67 0L1922.7 7.03707C1911.58 46.7293 1877.25 75.5353 1836.23 79.5878L0 261V0H1924.67Z"
            fill="#6440FB"
          />
        </svg>
      </div>
    </>
  );
}
