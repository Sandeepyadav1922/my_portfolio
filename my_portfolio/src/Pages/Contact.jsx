import emailjs from "emailjs-com";
import { useFormik } from "formik";
import "./Contact.css";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name is Required";
  }

  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "Message is Required";
  }

  return errors;
};

function Contact() {
  const sendEmail = (values) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => alert("message send successfully!"))
      .catch(() => alert("Something Wrong to send message"));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      sendEmail(values);
      resetForm();
    },
  });

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
              Email <br /> sandeepyada234abc@gmail.com
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
          <form onSubmit={formik.handleSubmit}>
            <label className="text-xl" for="name">
              Name
            </label>
            <br />
            <input
              id="name"
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              placeholder="Enter your Full name"
              autocomplete="name"
              class="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
            {formik.errors.name ? (
              <div style={{ color: "red" }}>{formik.errors.name}</div>
            ) : null}
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
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Enter your email"
              autocomplete="email"
              className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
            {formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
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
              onChange={formik.handleChange}
              value={formik.values.message}
              placeholder="write Your message"
              className="min-w-0 flex-auto rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            ></textarea>
            {formik.errors.message ? (
              <div style={{ color: "red" }}>{formik.errors.message}</div>
            ) : null}
            <br />
            <button className="text-xl font-medium">
              <i class="fa-solid fa-paper-plane text-blue-400"></i>
              &nbsp;&nbsp;Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
