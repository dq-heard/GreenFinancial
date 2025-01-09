interface FAQItemProps {
  faqSpan: string;
  faqText: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ faqSpan, faqText }) => {
  return (
    <div className="faq-item">
      <button type="button" className="faq-btn">
        <span className="faq-span">{faqSpan}</span>
        <span className="faq-icon">
          <svg
            width="12"
            height="17"
            viewBox="0 0 12 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
          >
            <path d="M5.28125 15.6875L1.28125 11.6875C0.875 11.3125 0.875 10.6562 1.28125 10.2812C1.65625 9.875 2.3125 9.875 2.6875 10.2812L5 12.5625L5 1C5 0.4375 5.4375 0 6 0C6.59375 0 7 0.4375 7 1L7 12.5625L9.28125 10.2812C9.65625 9.875 10.3125 9.875 10.6875 10.2812C11.0937 10.6562 11.0937 11.3125 10.6875 11.6875L6.6875 15.6875C6.3125 16.0938 5.65625 16.0938 5.28125 15.6875Z"></path>
          </svg>
        </span>
      </button>
      <div className="faq-body">
        <p className="faq-text sm:text-base text-sm leading-7 text-primary-100">
          {faqText}
        </p>
      </div>
    </div>
  );
};
