import { useEffect } from "react";
import * as AOS from "aos";
import "aos/dist/aos.css";

import { hero } from "../assets";

export const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="hero-area" id="home">
      <div
        className="hero-content"
        style={{
          background: "linear-gradient(to right, #717171, transparent)",
        }}
      >
        <div className="home-container">
          <h1 data-aos="fade-up" className="h1-text">
            Protect your <br />
            family with us
          </h1>
          <p className="hero-paragraph">
            As a full-service firm, we specialize in analyzing and{" "}
            <br className="hidden sm:block" />
            optimizing your financial situation. Take advantage{" "}
            <br className="hidden sm:block" />
            of an in-depth, complimentary assessment to gain a{" "}
            <br className="hidden sm:block" />
            clear-cut overview of your economic power.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-10 sm:space-y-0 sm:items-center">
            <a href="#about">
              <div className="hero-btn">
                <span>Learn More</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="hero-image-1"
        style={{ backgroundImage: `url(${hero})` }}
      ></div>
    </section>
  );
};
