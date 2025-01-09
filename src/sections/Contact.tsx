import { FormEvent } from "react";
import { folder, hands } from "../assets";

const submitForm = async (event: FormEvent) => {
  event.preventDefault();

  const formData = new FormData(event.target as HTMLFormElement);
  const submitButton = document.getElementById(
    "submitButton"
  ) as HTMLButtonElement;
  submitButton.disabled = true;

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbxv4tqZIJl7C--2lMh7oda1tMBKytc3rbVr6DjoXWGsAIaYH5ReiXftF85PaQkGz0Ct/exec",
    {
      method: "POST",
      body: formData,
    }
  );

  const result = await response.json();
  console.log(result);

  if (result.result === "Success") {
    submitButton.innerText = "Submitted!";
  } else {
    submitButton.innerText = "Error";
  }
};

export const Contact: React.FC = () => {
  return (
    <section className="contact-area" id="contact">
      <div className="w-full relative">
        <div className="img-banner">
          <div className="img-wrapper">
            <img src={hands} alt="thumb-1" className="w-full h-full" />
          </div>
          <div className="img-wrapper">
            <img src={folder} alt="thumb-2" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-subcontainer">
          <div className="form-wrapper">
            <h2 className="contact-headline">Your Free Consultation</h2>
            <div className="w-full">
              <form id="contactForm" onSubmit={submitForm} className="w-full">
                <label className="w-full mb-5 block">
                  <input
                    type="text"
                    name="name"
                    className="input-field"
                    placeholder="Your Name"
                    required
                  />
                </label>
                <div className="flex-gap">
                  <label className="w-full mb-2 sm:mb-5 block">
                    <input
                      type="text"
                      name="contactEmail"
                      className="input-field"
                      placeholder="E-mail"
                      required
                    />
                  </label>
                  <label className="w-full mb-2 sm:mb-5 block">
                    <input
                      type="text"
                      name="contactPhone"
                      className="input-field"
                      placeholder="Phone"
                      required
                    />
                  </label>
                </div>
                <div className="flex-gap">
                  <label className="w-full mb-5 block">
                    <span className="label-span">Schedule a Time:</span>
                    <input
                      type="datetime-local"
                      name="bestTime"
                      className="input-field"
                      required
                    />
                  </label>
                  <label className="w-full block">
                    <span className="label-span">
                      Household<span className="sm:hidden">:</span>
                      <span className="hidden sm:inline-flex">&nbsp;Size:</span>
                    </span>
                    <div className="flex items-center mb-2 sm:mb-0">
                      <input
                        type="number"
                        name="householdSize"
                        defaultValue={1}
                        min={1}
                        max={10}
                        className="input-field w-[80px] sm:w-2/3 text-center"
                        required
                      />
                    </div>
                  </label>
                </div>
                <label className="w-full mb-5 block">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="textarea-field"
                    required
                  ></textarea>
                </label>
                <button
                  type="submit"
                  className="submit-button"
                  id="submitButton"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
