import { Gear, Logo } from "../components";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="footer-container">
          <div className="relative z-10">
            <div className="footer-grid">
              <div className="footer-col-1">
                <div className="footer-logo">
                  <Logo />
                </div>
                <p className="footer-text">
                  Green Financial Agency powered by
                  <br />
                  Symmetry Financial Group.
                </p>
              </div>
              <div className="footer-col-2">
                <div className="col-wrapper">
                  <div className="quick-links">
                    <div className="link-header">
                      <span>Quick Links</span>
                      <div className="primary-line"></div>
                    </div>
                    <div className="flex space-x-8">
                      <ul>
                        <li className="list-link">
                          <a href="/">
                            <span className="link-text">Home</span>
                          </a>
                        </li>
                        <li className="list-link">
                          <a href="#about">
                            <span className="link-text">About</span>
                          </a>
                        </li>
                        <li className="list-link">
                          <a href="#providers">
                            <span className="link-text">Providers</span>
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li className="list-link">
                          <a href="#faqs">
                            <span className="link-text">FAQs</span>
                          </a>
                        </li>
                        <li className="list-link">
                          <a href="#contact">
                            <span className="link-text">Contact</span>
                          </a>
                        </li>
                        <li className="list-link">
                          <a href="#recruit">
                            <span className="link-text">Recruiting</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="contact-links">
                    <div className="link-header">
                      <span>Contact Us</span>
                      <div className="primary-line"></div>
                    </div>
                    <ul>
                      <li className="list-link">
                        <a href="tel:+1 (615) 902-5322">
                          <div className="link-flex">
                            <span>
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.125 1.78125L6.375 4.78125C6.59375 5.28125 6.46875 5.875 6.03125 6.21875L4.5 7.5C5.53125 9.6875 7.3125 11.4688 9.5 12.5L10.7812 10.9688C11.125 10.5312 11.7188 10.4062 12.2188 10.625L15.2188 11.875C15.8125 12.0938 16.0938 12.75 15.9375 13.3438L15.1875 16.0938C15.0312 16.625 14.5625 17 14 17C6.25 17 0 10.75 0 3C0 2.4375 0.375 1.96875 0.90625 1.8125L3.65625 1.0625C4.25 0.90625 4.90625 1.1875 5.125 1.78125Z"
                                  fill="#028835"
                                />
                              </svg>
                            </span>
                            <span className="link-text">Call Us Here</span>
                          </div>
                        </a>
                      </li>
                      <li className="list-link">
                        <a href="mailto:greenfinancialagency@gmail.com">
                          <div className="link-flex">
                            <span>
                              <svg
                                width="16"
                                height="12"
                                viewBox="0 0 16 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.5 0H14.5C15.3125 0 16 0.6875 16 1.5C16 2 15.75 2.4375 15.375 2.71875L8.59375 7.8125C8.21875 8.09375 7.75 8.09375 7.375 7.8125L0.59375 2.71875C0.21875 2.4375 0 2 0 1.5C0 0.6875 0.65625 0 1.5 0ZM0 3.5L6.78125 8.625C7.5 9.15625 8.46875 9.15625 9.1875 8.625L16 3.5V10C16 11.125 15.0938 12 14 12H2C0.875 12 0 11.125 0 10V3.5Z"
                                  fill="#028835"
                                />
                              </svg>
                            </span>
                            <span className="link-text">E-mail Us Here</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-top">
              <span className="lg:text-base text-sm">
                ©GFA 2024 | All Rights Reserved
              </span>
              <span className="lg:text-base text-sm">
                Designed by <a href="https://dq-heard.vercel.app/">D. Heard</a>
              </span>
            </div>
          </div>
        </div>
        <div className="footer-shape absolute">
          <Gear />
        </div>
      </div>
    </footer>
  );
};
