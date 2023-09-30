import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import NavBar from "../Components/navBar";
import videoBg from "../Assets/video-1.mp4";
import greyBg from "../Assets/abstract-grey.jpg";
import aboutImage from "../Assets/notcompleto.png";
import { motion } from "framer-motion";
import designProcess from "../Assets/desingprocess.jpg";
import workProcess from "../Assets/workprocess.jpg";
import profileJean from "../Assets/profile-jean-cut.jpg";
import profileLuis from "../Assets/profile-luis.jpeg";
import profileVictor from "../Assets/profile-victor.jpeg";
import profileIgor from "../Assets/profile-igor.jpeg";
import "../mainScript";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import logoAtomize from "../Assets/logomarcarosa-journeycolor.png";
import logoComunidade from "../Assets/despertar-logo-journeycolor.png";

function HomePage() {
  useEffect(() => {
    // For text type 1 effect, comes from left
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    // For text type 2 effect, comes from right
    const observerSecond = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show-second");
        } else {
          entry.target.classList.remove("show-second");
        }
      });
    });

    // For text type 3 effect, comes from bottom
    const observerThird = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show-third");
        } else {
          entry.target.classList.remove("show-third");
        }
      });
    });

    // For the about section button, not that pretty
    const observerButton = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show-btn");
        } else {
          entry.target.classList.remove("show-btn");
        }
      });
    });

    // For cards in the section our team
    const observerTeam = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("visible-team");
        }
      });
    });

    // Get references to the elements you want to observe
    const hiddenElementsSlogan = document.querySelectorAll(".slogan-text");

    // Get reference for the description text
    const descriptionText = document.querySelectorAll(".text-presentation");

    // Get reference for the button in the about section
    const buttonAbout = document.querySelectorAll(".button-contact");

    // Get reference for the title in wor section
    const titleWork = document.querySelectorAll(".title-work");

    // Get reference for the card person
    const cardPerson = document.querySelectorAll(".team-body");

    // Observe each element
    hiddenElementsSlogan.forEach((el) => observer.observe(el));

    descriptionText.forEach((el) => observerSecond.observe(el));

    buttonAbout.forEach((el) => observerButton.observe(el));

    titleWork.forEach((el) => observerThird.observe(el));

    cardPerson.forEach((el) => observerTeam.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElementsSlogan.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const [isShown, setIsShown] = useState(false);
  const [isShownSecond, setIsShownSecond] = useState(false);

  return (
    <div className="home-container">
      <div className="nav">
        <NavBar></NavBar>
        <video className="video-header" src={videoBg} autoPlay loop muted />
        <div className="banner"></div>
      </div>
      <div className="about">
        <div className="about-section">
          <div className="slogan">
            <h1 className="slogan-text">Siga conosco</h1>
            <h1 className="slogan-text">Nesta nova</h1>
            <h1 className="slogan-text highlight">Jornada.</h1>
            <div className="about-text">
              <h1 className="text-presentation">
                <span>
                  A{" "}
                  <span>
                    <a className="brand-name">Journey</a>
                  </span>{" "}
                  é uma empresa especializada na criação{" "}
                </span>
                <span>da identidade visual completa para negócios e no </span>
                <span>desenvolvimento de ferramentas digitais.</span>
              </h1>
              <a href="#" className="button-contact">
                Saiba mais
              </a>
            </div>
          </div>
          <div class="area">
            <ul class="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="work-done">
        <div className="title-work">
          <h1>
            Conheça mais o nosso{" "}
            <span className="word-highlight">trabalho</span>
          </h1>
        </div>
        <div className="cards">
          <div className="card first">
            <img src={designProcess}></img>
          </div>
          <div className="card second">
            <h1 className="subtitle">Criatividade</h1>
            <h1 className="subtitle">
              <span className="word-highlight">&</span> Inovação
            </h1>
            <h6>O estilo Journey</h6>

            <h1 className="text-card">
              Em cada jornada, encontramos oportunidades para inovar, criar e
              crescer. Na Journey, transformamos visões em realidade,
              construindo marcas e experiências digitais que cativam. Venha
              conosco e descubra o potencial ilimitado do seu negócio.
            </h1>
            <a href="#" className="button-contact">
              Ver Portifólio
            </a>
          </div>
        </div>
        <div className="cards">
          <div className="card second">
            <h1 className="subtitle">Dedicação</h1>
            <h1 className="subtitle">
              <span className="word-highlight">&</span> Excelência
            </h1>
            <h6>O time Journey</h6>

            <h1 className="text-card">
              Cada integrante de nossa equipe traz suas próprias habilidades e
              perspectivas para o time. Estamos comprometidos em impulsionar o
              sucesso de nossos projetos e de nossos clientes. Junte-se a nós e
              descubra como nossa equipe pode ajudar o seu negócio a alcançar
              novos patamares.
            </h1>
            <a href="#" className="button-contact">
              Conhecer Equipe
            </a>
          </div>
          <div className="card first">
            <img src={workProcess}></img>
          </div>
        </div>
      </div>

      <div className="our-team">
        <div class="team-body">
          <div className="title-work">
            <h1>
              A equipe <span className="word-highlight">Journey</span>
            </h1>
          </div>

          <p>As mentes que fazem a diferença</p>
          <ul class="one">
            <li class="transition first-person">
              <div class="wrapper">
                {" "}
                <img class="transition" src={profileJean} />
                <ul class="social">
                  <li>
                    Aluno de Engenharia Aeronáutica no ITA. <br />
                    Encontre-o em:
                  </li>
                  <li class="transition">
                    <a href="https://www.facebook.com">
                      <img src="http://dooreight.com/codepen/people/twitter.svg" />
                    </a>
                  </li>
                  <li class="transition">
                    <a href="#">
                      <img src="http://dooreight.com/codepen/people/behance.svg" />
                    </a>
                  </li>
                  <li class="transition">
                    <a href="#">
                      <img src="http://dooreight.com/codepen/people/facebook.svg" />
                    </a>
                  </li>
                  <li class="transition">
                    <a href="#">
                      <img src="http://dooreight.com/codepen/people/skype.svg" />
                    </a>
                  </li>
                </ul>
                <span class="transition">
                  <h3>
                    Jean Amaral{" "}
                    <em>
                      CO-FOUNDER & <br></br>FRONT END DEVELOPER
                    </em>
                  </h3>
                  <img src={"http://dooreight.com/codepen/people/more.svg"} />{" "}
                </span>{" "}
              </div>
            </li>
            <li class="transition second-person">
              <div class="wrapper">
                {" "}
                <img class="transition" src={profileLuis} />
                <ul class="social">
                  <li>
                    Aluno de Engenharia da Computação no ITA. <br />
                    Encontre-o em:
                  </li>
                  <li class="transition">
                    <a href="https://www.facebook.com">
                      <img src="http://dooreight.com/codepen/people/twitter.svg" />
                    </a>
                  </li>
                  <li class="transition">
                    <a href="#">
                      <img src="http://dooreight.com/codepen/people/behance.svg" />
                    </a>
                  </li>
                  <li class="transition">
                    <a href="#">
                      <img src="http://dooreight.com/codepen/people/facebook.svg" />
                    </a>
                  </li>
                  <li class="transition">
                    <a href="#">
                      <img src="http://dooreight.com/codepen/people/skype.svg" />
                    </a>
                  </li>
                </ul>
                <span class="transition">
                  <h3>
                    Luís Augusto{" "}
                    <em>
                      CO-FOUNDER & <br></br>DIRETOR COMERCIAL
                    </em>
                  </h3>
                  <img src="http://dooreight.com/codepen/people/more.svg" />{" "}
                </span>{" "}
              </div>
            </li>
            <li class="transition third-person">
              <div class="wrapper">
                {" "}
                <img class="transition" src={profileVictor} />
                <ul class="social">
                  <li>
                    Aluno de Engenharia Eletrônica no ITA. <br />
                    Encontre-o em:
                  </li>
                  <li class="transition">
                    <a href="https://www.facebook.com">
                      <img src="http://dooreight.com/codepen/people/twitter.svg" />
                    </a>
                  </li>
                  <li class="transition">
                    <a href="#">
                      <img src="http://dooreight.com/codepen/people/behance.svg" />
                    </a>
                  </li>
                  <li class="transition">
                    <a href="#">
                      <img src="http://dooreight.com/codepen/people/facebook.svg" />
                    </a>
                  </li>
                  <li class="transition">
                    <a href="#">
                      <img src="http://dooreight.com/codepen/people/skype.svg" />
                    </a>
                  </li>
                </ul>
                <span class="transition">
                  <h3>
                    Victor Davi{" "}
                    <em>
                      CO-FOUNDER & <br></br>BACK END DEVELOPER{" "}
                    </em>
                  </h3>
                  <img src="http://dooreight.com/codepen/people/more.svg" />{" "}
                </span>{" "}
              </div>
            </li>
            <li class="transition fourth-person">
              <div class="wrapper">
                {" "}
                <img class="transition" src={profileIgor} />
                <ul class="social">
                  <li>
                    Aluno de Engenharia Aeroespacial no ITA. <br />
                    Encontre-o em:
                  </li>
                  <li class="transition">
                    <a href="https://www.facebook.com">
                      <img src="http://dooreight.com/codepen/people/twitter.svg" />
                    </a>
                  </li>
                  <li class="transition">
                    <a href="#">
                      <img src="http://dooreight.com/codepen/people/behance.svg" />
                    </a>
                  </li>
                  <li class="transition">
                    <a href="#">
                      <img src="http://dooreight.com/codepen/people/facebook.svg" />
                    </a>
                  </li>
                  <li class="transition">
                    <a href="#">
                      <img src="http://dooreight.com/codepen/people/skype.svg" />
                    </a>
                  </li>
                </ul>
                <span class="transition">
                  <h3>
                    Igor Mendes{" "}
                    <em>
                      CO-FOUNDER & <br></br> DESIGNER
                    </em>
                  </h3>
                  <img src="http://dooreight.com/codepen/people/more.svg" />{" "}
                </span>{" "}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="portifolio">
        <div className="slides">
          <div className="title-work">
            <h1>
              Um pouco de nosso <span className="word-highlight">Trabalho</span>
            </h1>
          </div>
          <p>Realizações do time Journey</p>
          <div className="element-1">
            <div
              className="project-image"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <img src=""></img>
            </div>
            <div
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              className={`object-one ${isShown ? "move-one" : ""}`}
            ></div>
            <div
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              className={`object-two ${isShown ? "move-two" : ""}`}
            ></div>
            <img src={logoAtomize} className="logo-work"></img>
          </div>

          <div className="element-2">
            <div
              className="projectsec-image"
              onMouseEnter={() => setIsShownSecond(true)}
              onMouseLeave={() => setIsShownSecond(false)}
            >
              <img src=""></img>
            </div>
            <div
              onMouseEnter={() => setIsShownSecond(true)}
              onMouseLeave={() => setIsShownSecond(false)}
              className={`objectsec-one ${isShownSecond ? "movesec-one" : ""}`}
            ></div>
            <div
              onMouseEnter={() => setIsShownSecond(true)}
              onMouseLeave={() => setIsShownSecond(false)}
              className={`objectsec-two ${isShownSecond ? "movesec-two" : ""}`}
            ></div>
            <img src={logoComunidade} className="logo-work-sec"></img>
          </div>
        </div>
      </div>

      <div className="contact-us">
        <div class="wrapper-2">
          <div class="title">
            <h1>Contatos</h1>
          </div>
          <div class="contact-form">
            <div class="input-fields">
              <input type="text" class="input" placeholder="Nome" />
              <input type="text" class="input" placeholder="Email" />
              <input type="text" class="input" placeholder="Celular" />
              <input type="text" class="input" placeholder="Assunto" />
            </div>
            <div class="msg">
              <textarea placeholder="Descrição do projeto"></textarea>
              <div class="btn">Enviar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
