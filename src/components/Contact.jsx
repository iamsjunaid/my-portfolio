import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import SuccessPopup from './SuccessPopup';

const Contact = () => {
  const [state, handleSubmit] = useForm('xayzpwoo');
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (state.succeeded) {
      setShowPopup(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="bg-contact-bg-mobile bg-secondary bg-no-repeat bg-contain bg-right flex flex-col items-center justify-center px-8 sm:p-48  sm:bg-contact-bg md:w-full md:bg-contain md:bg-no-repeat rounded-tl-[100px] bg-center h-screen">
      {showPopup && <SuccessPopup onClose={closePopup} />}
      <div className="gap-4 flex flex-col justify-center items-center sm:w-[70%]">
        <h1 className="text-white font-bold text-40 leading-52 text-white">
          Contact me
        </h1>
        <p className="text-white font-light text-[1.25rem] leading-[1.75rem] text-center justify-self-center">
          If you have an application you are interested in developing, a feature
          that you need built or a project that needs coding. I&apos;d love to
          help with it!
        </p>
        <form onSubmit={handleSubmit} type="submit" disabled={state.submitting} className="w-[20.5rem] flex flex-col text-center gap-4">
          <input
            type="text"
            className="h-[3rem] rounded-md p-1"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            type="email"
            className="h-[3rem] rounded-md p-1"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            className="h-[12rem] rounded-md p-1"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button
            type="submit"
            className="border rounded-md border-secondary px-4 py-2 text-secondary bg-white w-max sm:mx-auto hover:border-2 hover:border-white hover:cursor-pointer hover:bg-secondary hover:text-white transition duration-500 ease-in-out"
            disabled={state.submitting}
          >
            Get in touch
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
