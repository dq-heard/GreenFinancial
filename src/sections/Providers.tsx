import { client1, client2, client3, client4 } from "../assets";

export const Providers = () => {
  return (
    <>
      <div className="provider-start" id="providers">
        <div className="divider-container">
          <div className="divider-area">
            <div className="mt-top">
              <p className="text-white-base">With our four core carriers,</p>
              <h2 className="text-white-headline">
                we safeguard your plans &amp; <br className="sm:block hidden" />
                help you lead a secure life
              </h2>
            </div>
            <div className="xl:block hidden">
              <p className="text-white-base">
                Licensed in both Tennessee and Oregon, I offer expert guidance
                <br />
                through a diverse network of over 36 reputable insurance
                providers. <br />
                Take advantage of a free, detailed analysis to gain clarity and
                insight <br />
                into your financial situation. Let’s work together to enhance
                your <br />
                well-being and create a brighter tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="provider-area">
        <div className="provider-container">
          <div className="client-wrapper">
            <div className="client-logo">
              <img src={client1} alt="Americo" />
            </div>
            <div className="client-logo">
              <img src={client2} alt="American Amicable" />
            </div>
            <div className="client-logo">
              <img src={client3} alt="Foresters Financial" />
            </div>
            <div className="client-logo">
              <img src={client4} alt="Mutual of Omaha" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
