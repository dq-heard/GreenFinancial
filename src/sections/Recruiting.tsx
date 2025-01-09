import { docsheet, meeting } from "../assets";
import { Checkmark } from "../components";

export const Recruiting: React.FC = () => {
  const videoPopup = () => {
    const videoContainer = document.querySelector(".popv-main-wrapper");
    if (videoContainer) {
      videoContainer.classList.toggle("active");
    }
  };

  return (
    <>
      <section className="recruit-area" id="recruit">
        <div className="recruit-container">
          <div className="grid-layout">
            <div className="thumb-area">
              <img src={meeting} className="rounded-xl" alt="" />
              <button
                type="button"
                onClick={videoPopup}
                className="video-button"
              >
                <span>
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5511 8.38398L2.82309 0.267981C2.53949 0.096703 2.2153 0.00424013 1.88402 0.000142387C1.55273 -0.00395536 1.22636 0.0804605 0.93861 0.244671C0.650859 0.408882 0.412163 0.646934 0.247174 0.934239C0.0821847 1.22154 -0.0031142 1.54769 8.68912e-05 1.87898V18.11C-0.000276804 18.4402 0.0867969 18.7646 0.252456 19.0502C0.418114 19.3358 0.656451 19.5725 0.943235 19.7362C1.23002 19.8998 1.55503 19.9846 1.88521 19.982C2.2154 19.9793 2.53899 19.8893 2.82309 19.721L16.5511 11.61C16.8312 11.4447 17.0633 11.2092 17.2246 10.9268C17.3859 10.6443 17.4707 10.3247 17.4707 9.99948C17.4707 9.67424 17.3859 9.35463 17.2246 9.07219C17.0633 8.78976 16.8312 8.55427 16.5511 8.38898V8.38398Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="article-area">
              <h2 className="recruit-headline mb-5">
                Looking to join our team? <br />
                Work that fits your lifestyle
              </h2>
              <p className="recruit-desc">
                Remote (Part-Time or Full-Time); $50K-100K average salary,
                <br className="hidden sm:block" />
                along with the ability to start growing your own business from
                day one.
              </p>
              <ul className="recruit-list">
                <li className="list-item">
                  <Checkmark />
                  <span className="pitch">
                    Are you ready to reclaim your time?
                  </span>
                </li>
                <li className="list-item">
                  <Checkmark />
                  <span className="pitch">
                    Are you self-motivated with a drive to succeed?
                  </span>
                </li>
                <li className="list-item">
                  <Checkmark />
                  <span className="pitch">
                    Do you genuinely want to help people?
                  </span>
                </li>
              </ul>
              <div className="button-container">
                <a href="#contact">
                  <div className="contact-button">
                    <span>Contact Me</span>
                  </div>
                </a>
                <div className="instructions">
                  <img src={docsheet} className="w-[36px] h-[36px]" alt="" />
                  <div>
                    <span className="info-text">
                      Use the above form to contact me.
                    </span>
                    <span className="info-highlight">
                      State your interest where applicable.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="popv-main-wrapper">
        <div className="popv-bg popv-ready" onClick={videoPopup}></div>
        <div
          className="popv-wrap popv-close-btn-in popv-auto-cursor popv-ready"
          tabIndex={-1}
          style={{ overflow: "hidden" }}
        >
          <div className="popv-container popv-s-ready popv-iframe-holder">
            <div className="popv-content">
              <div className="popv-iframe-scaler">
                <button
                  onClick={videoPopup}
                  title="Close (Esc)"
                  type="button"
                  className="popv-close"
                >
                  ×
                </button>
                <iframe
                  title="video"
                  className="popv-iframe"
                  src="https://www.youtube.com/embed/zVwX_GBbISY"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="popv-preloader">Loading...</div>
          </div>
        </div>
      </div>
    </>
  );
};
