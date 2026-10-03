import emailjs from "emailjs-com";
import { useState } from "react";
import { sky } from "sky-alert";
import "./Contact.css";

function Contact() {

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleError = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
  ) {
    errors.email = "Invalid email address";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required";
  }

  setErrors(errors);

  return Object.keys(errors).length === 0;
};
  
  const handleSubmit = async (e) => {
  e.preventDefault();

  const isValid = handleError(values);

  if (!isValid) {
    sky.error("Please fill all fields correctly");
    return;
  }

  try {
    setIsSubmitting(true);

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: values.name,
        email: values.email,
        message: values.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    sky.success("Email sent successfully", {
      duration: 4000,
    });

    setValues({
      name: "",
      email: "",
      message: "",
    });
    setErrors({});
  } catch (error) {
    console.error("EmailJS error:", error);
    sky.error("Failed to send message. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
}

  const handleChange = (e) => {
  const { name, value } = e.target;

  setValues((prev) => ({
    ...prev,
    [name]: value,
  }));

  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));
};

  return (
    <div className="contact-container text-white mt-10">
      <h1 className="text-5xl font-extrabold contain-heading">
        Get&nbsp;<span className="text-blue-500">In </span>&nbsp;Touch
      </h1>
      <br />
      <p className="text-3xl font-normal text-blue-100 contact-para">
        Ready to start your next project? Let's discuss how we can work together
      </p>
      <div className="contact">
        <div className="contactRight">
          <h2 className="text-2xl font-bold mb-7">Let's Connect</h2>
          <p className="text-xl text-blue-200">
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hi, I'll do my best
            to get back to you!
          </p>
          <div className="flex mt-10">
            <h2>
              <i class="fa-solid fa-envelope text-3xl text-blue-300 mt-4"></i>
            </h2>
            <p className="ml-3 text-xl">
              Email <br /> <span className="emailId">sandeepyada234abc@gmail.com</span>
            </p>
          </div>
          <br />
          <div className="flex mt-3">
            <i class="fa-solid fa-location-dot text-3xl text-blue-300 mt-3"></i>
            <h2 className="ml-3 text-xl">
              Location <br /> India
            </h2>
          </div>
        </div>
        <div className="contactLeft text-white">
          <form onSubmit={handleSubmit}>
            <label className="text-xl" for="name">
              Name
            </label>
            <br />
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
              placeholder="Enter your Full name"
              autocomplete="name"
              class="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
            {errors.name && <span style={{color: "#CC0000", fontWeight: "bold"}}>{errors.name}</span>}
            <br />
            <br />
            <label className="text-xl" for="email-address">
              Email address
            </label>
            <br />
            <input
              id="email-address"
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="Enter your email"
              autocomplete="email"
              className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
            {errors.email && <span style={{color: "#CC0000", fontWeight: "bold"}}>{errors.email}</span>}
            <br />
            <br />
            <label className="text-xl" for="message">
              message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              cols={20}
              onChange={handleChange}
              value={values.message}
              placeholder="write Your message"
              className="min-w-0 flex-auto rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            ></textarea>
            {errors.message && <span style={{color: "#CC0000", fontWeight: "bold"}}>{errors.message}</span>}
            <br />
            <button className="text-xl font-medium" disabled={isSubmitting}>
              <i class="fa-solid fa-paper-plane text-blue-400"></i>
              &nbsp;&nbsp;{isSubmitting ? 'Sending...' : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
