import { about, moneybag } from "../assets";

export const About = () => {
  return (
    <section className="about-area" id="about">
      <div className="about-container">
        <div className="grid-layout">
          <div className="">
            <div className="thumbnail-area">
              <img src={about} alt="about" className="img-full" />
              <div className="about-shape gear-2"></div>
              <div className="info-card">
                <div>
                  <div className="flex-center">
                    <span>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="20" cy="20" r="20" fill="white" />
                        <path
                          d="M26.332 25.7943C25.544 25.5133 24.258 25.4943 23.688 25.2813C23.2492 25.1672 22.8347 24.974 22.465 24.7113C22.3097 24.0566 22.2424 23.3839 22.265 22.7113C22.558 22.4302 22.7955 22.0964 22.965 21.7273C23.1351 21.0941 23.2479 20.4468 23.302 19.7933C23.302 19.7933 23.766 19.9933 23.949 19.0623C24.104 18.2623 24.399 17.8393 24.322 17.2483C24.245 16.6573 23.914 16.7983 23.914 16.7983C24.273 15.9711 24.4135 15.0655 24.322 14.1683C24.3166 13.591 24.1924 13.0209 23.9571 12.4935C23.7218 11.9662 23.3806 11.493 22.9545 11.1032C22.5285 10.7135 22.0268 10.4156 21.4806 10.2281C20.9345 10.0406 20.3556 9.96749 19.78 10.0133C19.2044 9.96746 18.6254 10.0402 18.0789 10.227C17.5324 10.4138 17.0301 10.7107 16.603 11.0994C16.1758 11.4881 15.833 11.9603 15.5956 12.4868C15.3583 13.0133 15.2315 13.5829 15.223 14.1603C15.1325 15.0567 15.2701 15.9614 15.623 16.7903C15.623 16.7903 15.293 16.6493 15.215 17.2403C15.137 17.8313 15.427 18.2603 15.586 19.0603C15.769 19.9953 16.233 19.7913 16.233 19.7913C16.2878 20.4447 16.4005 21.092 16.57 21.7253C16.7396 22.0944 16.9771 22.4282 17.27 22.7093C17.2927 23.3819 17.2254 24.0546 17.07 24.7093C16.7014 24.9723 16.2865 25.1633 15.847 25.2723C15.285 25.4903 13.998 25.5183 13.203 25.7993C12.2445 26.1586 11.4205 26.8055 10.844 27.6514C10.2676 28.4973 9.96683 29.5008 9.98304 30.5243H29.545C29.5643 29.5005 29.2656 28.4958 28.6902 27.6487C28.1148 26.8017 27.2909 26.1538 26.332 25.7943Z"
                          fill="#028835"
                        />
                        <path
                          d="M11.63 22.3684C12.4561 22.3573 13.2651 22.132 13.978 21.7144C12.888 20.0624 13.478 18.1354 13.254 16.3354C13.243 15.9259 13.1472 15.5231 12.9728 15.1524C12.7983 14.7817 12.549 14.4511 12.2405 14.1816C11.9319 13.912 11.5709 13.7093 11.1801 13.5862C10.7894 13.4631 10.3773 13.4224 9.97 13.4664H9.942C9.53708 13.428 9.12858 13.4729 8.74171 13.5985C8.35485 13.7241 7.99783 13.9276 7.69271 14.1966C7.38758 14.4655 7.14083 14.7942 6.96768 15.1622C6.79453 15.5303 6.69866 15.9299 6.686 16.3364C6.461 18.1294 7.086 20.2744 5.969 21.7154C6.68409 22.1261 7.49988 22.3284 8.324 22.2994C8.36668 22.6942 8.34302 23.0934 8.254 23.4804C8.01199 23.682 7.72069 23.8156 7.41 23.8674C6.79373 24.0008 6.18571 24.1697 5.589 24.3734C5.1109 24.6233 4.71018 24.999 4.43013 25.4601C4.15007 25.9212 4.00134 26.45 4 26.9894H9.647C10.1603 26.0724 10.9468 25.3383 11.897 24.8894C12.4477 24.6587 13.0371 24.5345 13.634 24.5234C13.634 24.5234 13.901 24.1014 13.022 23.9394C12.5548 23.8369 12.1016 23.6787 11.672 23.4684C11.538 23.3184 11.63 22.3684 11.63 22.3684Z"
                          fill="#028835"
                        />
                        <path
                          d="M27.9417 22.3684C27.1157 22.3573 26.3066 22.132 25.5938 21.7144C26.6838 20.0624 26.0937 18.1354 26.3177 16.3354C26.3288 15.9259 26.4245 15.5231 26.599 15.1524C26.7734 14.7817 27.0227 14.4511 27.3313 14.1816C27.6398 13.912 28.0009 13.7093 28.3916 13.5862C28.7824 13.4631 29.1944 13.4224 29.6017 13.4664H29.6297C30.0347 13.428 30.4432 13.4729 30.83 13.5985C31.2169 13.7241 31.5739 13.9276 31.879 14.1966C32.1842 14.4655 32.4309 14.7942 32.6041 15.1622C32.7772 15.5303 32.8731 15.9299 32.8857 16.3364C33.1107 18.1294 32.4857 20.2744 33.6027 21.7154C32.8877 22.1261 32.0719 22.3284 31.2477 22.2994C31.2051 22.6942 31.2287 23.0934 31.3177 23.4804C31.5598 23.682 31.8511 23.8156 32.1617 23.8674C32.778 24.0008 33.386 24.1697 33.9827 24.3734C34.4608 24.6233 34.8616 24.999 35.1416 25.4601C35.4217 25.9212 35.5704 26.45 35.5717 26.9894H29.9247C29.4115 26.0724 28.6249 25.3383 27.6747 24.8894C27.1241 24.6587 26.5347 24.5345 25.9377 24.5234C25.9377 24.5234 25.6707 24.1014 26.5497 23.9394C27.0169 23.8369 27.4702 23.6787 27.8997 23.4684C28.0337 23.3184 27.9417 22.3684 27.9417 22.3684Z"
                          fill="#028835"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xl text-white font-bold leading-7">
                        Shedric Green
                      </p>
                      <p className="text-base text-white leading-5">21087719</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-article-area">
            <h2 className="about-headline">
              Making Each Second Count: <br className="hidden sm:block" />
              Maximizing Every Moment
            </h2>
            <p className="about-text">
              Hello. I'm Shedric Green, a Nashville native with deep roots and a
              heartfelt passion for family. As a devoted husband and father of
              five, my journey and career are driven by a love for those closest
              to me. After countless nights spent working in the food industry
              and missing precious moments, I've made it my mission to help you
              make the most of every minute with your loved ones. Trust in my
              commitment to enhancing your family time and creating lasting
              memories.
            </p>
            <div className="info-box">
              <div className="sm-flex-center">
                <div className="justify-between items-center mb-2.5">
                  <span className="block-text">Did You Know?</span>
                  <span className="block-text">
                    More than 4 in 10 families would face financial hardship
                    within 6 months should the primary wage earner die.
                  </span>
                </div>
              </div>
              <div className="sm-flex-center">
                <div className="icon-thumb">
                  <img src={moneybag} alt="" className="w-12 h-12" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="block-text">
                      Subpar Insurance Coverage
                    </span>
                    <span className="block-text">40%</span>
                  </div>
                  <div className="w-full relative overflow-hidden h-1.5 rounded-xl bg-gray-100">
                    <div
                      style={{ width: "40%", backgroundColor: "#fc0" }}
                      className="h-full absolute left-0 top-0 rounded-xl"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="sm-flex-center">
                <div className="justify-between items-center mb-2.5">
                  <span className="text-small text-primary-900">
                    Source: 2022 Insurance Barometer Study, LIMRA and Life
                    Happens.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
