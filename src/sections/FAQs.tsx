import React, { useEffect } from "react";
import * as AOS from "aos";
import "aos/dist/aos.css";
import { faqfam, faqs } from "../assets";
import { FAQItem } from "../components"; // Import the FAQItem component

interface FAQ {
  span: string;
  text: string;
}

export const FAQs: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const faqData: FAQ[] = [
    {
      span: "Why is life insurance important?",
      text: "Life insurance is crucial because it provides security and peace of mind for your family in the event of your death, ensuring that your loved ones can maintain their standard of living and meet financial obligations without you.",
    },
    {
      span: "What is term life insurance?",
      text: "Term life insurance offers protection for a specific term should anything happen to you. You set a term length when you sign up for coverage, and if tragedy occurs, your beneficiary receives a lump sum to cover expenses.",
    },
    {
      span: "What is final expense insurance?",
      text: "Final expense insurance is designed to cover the costs of being laid to rest. Your beneficiary receives a lump sum that handles your service, burial, or cremation and assists with paying off any medical expenses or remaining debts.",
    },
    {
      span: "What is mortgage protection insurance?",
      text: "A mortgage protection plan provides coverage for the same number of years — or “term” — as your mortgage. The amount of coverage you need will depend on your income, dependents, and spouse’s insurance coverage.",
    },
  ];

  return (
    <section
      className="faq-area"
      style={{
        backgroundImage: `url(${faqs})`,
      }}
      id="faqs"
    >
      <div className="question-container">
        <div className="faq-wrapper">
          <div className="faq-image-wrapper">
            <div className="w-full h-[888px]">
              <img src={faqfam} alt="" className="faq-image" />
            </div>
          </div>
          <div className="flex-1">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="faq-main-wrapper"
            >
              <h2 className="faq-headline">A Sense of Clarity</h2>
              <div className="w-full flex flex-col space-y-5">
                {faqData.map((faq, index) => (
                  <FAQItem key={index} faqSpan={faq.span} faqText={faq.text} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
