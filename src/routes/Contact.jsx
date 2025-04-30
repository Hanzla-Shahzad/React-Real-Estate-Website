import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e5c6dbb5-c6f3-4377-9b02-e62f1837d538");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("");
      toast.error(data.message);
    }
  };

  return (
    <>
      <div id="Contact">
        <div className="flex flex-col items-center justify-center mt-30">
          <p>
            {" "}
            <span className="text-xl font-[sans-serif] font-[800]">
              Contact
            </span>{" "}
            <span className="text-xl font-[sans-serif] underline">With Us</span>
          </p>
          <p className="mt-1">Real Stories from Those hwo found home with us</p>
        </div>
      </div>
      <div>
        <form action="" onSubmit={onSubmit}>
          <div className="flex flex-col items-center mt-15">
            <div className=" flex flex-col md:flex-row justify-center gap-9">
              <div className="flex flex-col">
                <label htmlFor="text">Your Name</label>
                <input
                  type="text"
                  name="Name"
                  id="text"
                  className="border-[0.5px] border-gray-400 w-56 h-8 px-2"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  name="Name"
                  id="email"
                  className="border-[0.5px] w-56 h-8 px-2 border-gray-400"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                type="message"
                id="message"
                placeholder="Message"
                className="border border-gray-400 h-28 w-[485px] px-2 mt-1"
                required
              />
              <button
                type="submit"
                className="px-3 py-1.5 hover:cursor-pointer bg-green-500 mx-auto mt-5 rounded-xs text-white"
              >
                {result ? result : "Send Message"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
