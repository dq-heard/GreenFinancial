import { counter } from "../assets";

export const Topbar = () => {
  return (
    <div className="topbar-wrapper">
      <div className="topbar-content">
        <div className="location-info">
          <div className="topbar-details">
            <span>
              <svg
                width="12"
                height="17"
                viewBox="0 0 12 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.71875 15.625C6.34375 16.0938 5.625 16.0938 5.25 15.625C3.65625 13.5938 0 8.75 0 6C0 2.6875 2.6875 0 6 0C9.3125 0 12 2.6875 12 6C12 8.75 8.34375 13.5938 6.71875 15.625ZM6 8C7.09375 8 8 7.125 8 6C8 4.90625 7.09375 4 6 4C4.875 4 4 4.90625 4 6C4 7.125 4.875 8 6 8Z"
                  fill="white"
                />
              </svg>
            </span>
            <p className="topbar-text">Nashville, TN</p>
          </div>
          <div className="divider"></div>
          <div className="topbar-details">
            <span>
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 0C0.65625 0 0 0.6875 0 1.5C0 2 0.21875 2.4375 0.59375 2.71875L7.375 7.8125C7.75 8.09375 8.21875 8.09375 8.59375 7.8125L15.375 2.71875C15.75 2.4375 16 2 16 1.5C16 0.6875 15.3125 0 14.5 0H1.5ZM0 3.5V10C0 11.125 0.875 12 2 12H14C15.0938 12 16 11.125 16 10V3.5L9.1875 8.625C8.46875 9.15625 7.5 9.15625 6.78125 8.625L0 3.5Z"
                  fill="white"
                ></path>
              </svg>
            </span>
            <p className="topbar-text">
              <a href="mailto:greenfinancialagency@gmail.com">
                greenfinancialagency@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="powered-by">
          <img src={counter} className="w-5 h-5" alt="ico" />
          <p className="topbar-text">
            Powered by&nbsp;
            <a href="https://sfglife.com/">Symmetry Financial Group</a>
          </p>
        </div>
      </div>
    </div>
  );
};
