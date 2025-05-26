import gsap from "gsap";
import { Link } from "react-router-dom";
import { ShapeRendering } from "../../../svg/index";
import React, { useEffect } from "react";

const masthead_info = [
	{
		id: 1,
		icon: "/assets/img/masthead/icons/1.svg",
		text: "Mais de 12 milhões de estudantes",
	},
	{
		id: 2,
		icon: "/assets/img/masthead/icons/2.svg",
		text: "Mais de 60,000 cursos",
	},
	{
		id: 3,
		icon: "/assets/img/masthead/icons/3.svg",
		text: "Aprenda tudo online",
	},
];

const hero_content = {
	title: "Aprenda novas habilidades online com a Nexus Educação",
	text_underline: ", a melhor plataforma de aprendizado online",
	info_hero: (
		<>
			Desenvolva habilidades com cursos, certificados, diplomas on-line,
			<br /> com universidades e empresas reconhecidas mundialmente.
		</>
	),
	starts: [
		"icon-star text-yellow-1 text-11",
		"icon-star text-yellow-1 text-11",
		"icon-star text-yellow-1 text-11",
		"icon-star text-yellow-1 text-11",
		"icon-star text-yellow-1 text-11",
	],
};
const { title, text_underline, info_hero, starts } = hero_content;

const HomeHero = () => {
	const [isDark, setIsDark] = React.useState(() => document.body.classList.contains("dark-mode"));

	React.useEffect(() => {
		if (isDark) {
			document.body.classList.remove("light-mode");
			document.body.classList.add("dark-mode");
			// Forçar repaint
			document.documentElement.style.background = "#181818";
		} else {
			document.body.classList.remove("dark-mode");
			document.body.classList.add("light-mode");
			document.documentElement.style.background = "#f5f5f5";
		}
	}, [isDark]);

	useEffect(() => {
		const parallaxIt = () => {
			const target = document.querySelectorAll(".js-mouse-move-container");

			target.forEach((container) => {
				const targets = container.querySelectorAll(".js-mouse-move");

				targets.forEach((el) => {
					const movement = el.getAttribute("data-move");

					document.addEventListener("mousemove", (e) => {
						const relX = e.pageX - container.offsetLeft;
						const relY = e.pageY - container.offsetTop;

						gsap.to(el, {
							x:
								((relX - container.offsetWidth / 2) /
									container.offsetWidth) *
								Number(movement),
							y:
								((relY - container.offsetHeight / 2) /
									container.offsetHeight) *
								Number(movement),
							duration: 0.2,
						});
					});
				});
			});
		};

		parallaxIt();
	}, []);

	return (
		<>
			<section className="masthead -type-1 js-mouse-move-container">
				<div className="masthead__bg">
					<img src={"/assets/img/home-1/hero/bg.png"} alt="image" />
				</div>

				<div className="container">
					<div className="row y-gap-30 justify-between items-end">
						<div className="col-xl-6 col-lg-6 col-sm-10">
							<div
								className="masthead__content"
								data-aos="fade-up"
								data-aos-delay="500"
							>
								<h1 className="masthead__title">
									{title}{" "}
									<span className="text-gray-1 underline">
										{text_underline}
									</span>
								</h1>
								<p
									data-aos="fade-up"
									data-aos-duration="100"
									className="masthead__text"
								>
									{info_hero}
								</p>
								<div
									data-aos="fade-up"
									data-aos-duration="200"
									className="masthead__buttons row x-gap-10 y-gap-10"
								>
									<div className="col-12 col-sm-auto">
										<Link
											data-barba
											to="/signup"
											className="button -md -gray-1 text-white"
										>
											Faça parte de mais casos de sucesso
										</Link>
									</div>
									<div className="col-12 col-sm-auto">
										<Link
											data-barba
											to="/courses-list-1"
											className="button -md -outline-green-1 text-green-1"
										>
											Encontre cursos
										</Link>
									</div>
								</div>
								<div
									data-aos="fade-up"
									data-aos-duration="300"
									className="masthead-info row y-gap-15 sm:d-none"
								>
									{masthead_info.map((item, i) => (
										<div
											key={i}
											className="masthead-info__item d-flex items-center text-white"
										>
											<div className="masthead-info__icon mr-10">
												<img src={item.icon} alt="icon" />
											</div>
											<div className="masthead-info__title lh-1">
												{item.text}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						<div
							className="col-xl-6 col-lg-6"
							data-aos="fade-up"
							data-aos-delay="700"
						>
							<div className="masthead-image">
								<div className="masthead-image__el1">
									<img
										className="js-mouse-move"
										data-move="40"
										style={{ objectFit: "cover" }}
										src={"/assets/img/masthead/1.png"}
										alt="image"
									/>
									<div
										data-move="30"
										className="lg:d-none img-el -w-250 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
									>
										<div className="size-50 d-flex justify-center items-center bg-red-2 rounded-full">
											<img src={"/assets/img/masthead/1.svg"} alt="icon" />
										</div>
										<div className="ml-20">
											<div className="text-orange-1 text-16 fw-500 lh-1">
												5.000 +
											</div>
											<div className="mt-3">Cursos gratuitos para você</div>
										</div>
									</div>
								</div>

								<div className="masthead-image__el2">
									<img
										className="js-mouse-move"
										data-move="70"
										src={"/assets/img/masthead/2.png"}
										style={{ objectFit: "cover" }}
										alt="image"
									/>
									<div
										data-move="60"
										className="lg:d-none img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
									>
										<img src={"/assets/img/masthead/4.png"} alt="icon" />
										<div className="ml-20">
											<div className="text-dark-1 text-16 fw-500 lh-1">
												Fernando Pereira
											</div>
											<div className="mt-3">Desenvolvimento web full MVC</div>
											<div className="d-flex x-gap-5 mt-3">
												{starts.map((start, index) => (
													<div key={index}>
														<div className={start}></div>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>

								<div className="masthead-image__el3">
									<img
										className="js-mouse-move"
										data-move="40"
										src={"/assets/img/masthead/3.png"}
										style={{ objectFit: "cover" }}
										alt="image"
									/>
									<div
										data-move="30"
										className="shadow-4 img-el -w-260 px-30 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
									>
										<div className="img-el__side">
											<div className="size-50 d-flex justify-center items-center bg-purple-1 rounded-full">
												<img
													style={{ objectFit: "cover" }}
													src={"/assets/img/masthead/2.svg"}
													alt="icon"
												/>
											</div>
										</div>
										<div className="">
											<div className="text-purple-1 text-16 fw-500 lh-1">
												Parabéns!
											</div>
											<div className="mt-3">Sua admissão na Nexus foi concluída</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* animated shape start */}
				<ShapeRendering />
				{/* animated shape end */}
			</section>

			<style jsx>{`
				/* Enhanced color interactions for a more attractive design */
				.masthead__title {
					color: #ffffff; /* Bright white for better contrast */
					text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Subtle shadow for depth */
				}

				.masthead__text {
					color: #d3d3d3; /* Light gray for readability */
				}

				.button.-purple-1 {
					background: linear-gradient(90deg, #6a11cb, #2575fc); /* Gradient for buttons */
					border: none;
					transition: background 0.3s ease;
				}

				.button.-purple-1:hover {
					background: linear-gradient(90deg, #2575fc, #6a11cb); /* Reverse gradient on hover */
				}

				.button.-outline-green-1 {
					border-color: #32cd32; /* Bright green border */
					color: #32cd32;
					transition: background 0.3s ease, color 0.3s ease;
				}

				.button.-outline-green-1:hover {
					background-color: #32cd32; /* Green background on hover */
					color: #ffffff; /* White text on hover */
				}

				.masthead-info__item {
					background: rgba(255, 255, 255, 0.1); /* Transparent white background */
					padding: 10px;
					border-radius: 8px;
					transition: transform 0.3s ease;
				}

				.masthead-info__item:hover {
					transform: scale(1.05); /* Slight zoom effect on hover */
				}

				/* Highlighted the text_underline with a distinct color */
				.text-gray-1.underline {
					color: rgb(96, 227, 166); /* Tomato color for emphasis */
					font-weight: bold;
				}
			`}</style>
		</>
	);
};

export default HomeHero;
