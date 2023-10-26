import React from 'react';
import { FaTwitter, FaLinkedin, FaAngellist } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';
import { TbBrandGithubFilled } from 'react-icons/tb';

const Homepage = () => (
  <section className="bg-home-bg-mobile bg-white bg-no-repeat bg-contain flex flex-col items-center justify-center px-8 sm:p-48  sm:bg-home-bg-desktop md:w-full md:bg-contain md:bg-no-repeat rounded-bl-[100px] bg-center h-screen">
    <div className="gap-4 flex flex-col">
      <h1 className="text-primary font-bold text-40 leading-52">
        I&apos;m Junaid.
        <br />
        Glad to see you!
      </h1>
      <p className="text-primary font-normal text-base leading-6">
        I&apos;m a software developer! I can help you build a product , feature
        or website. Look through
        <br />
        some of my work and experience! If you like what
        you see and have a project you need
        <br />
        coded, don&apos;t hestiate to
        contact me.
      </p>
      <p className="text-tertiary font-medium text-base leading-6">
        LET&apos;S CONNECT
      </p>
      <div className="text-quaternary flex gap-2">
        <a href="https://twitter.com/junaidahmedsd" aria-label="Twitter"><FaTwitter className="hover:text-sky-400 hover:cursor-pointer text-2xl hover:cursor-pointer transition duration-500 ease-in-out" /></a>
        <a href="https://www.linkedin.com/in/junaidahmedsyed/" aria-label="LinkedIn"><FaLinkedin className="hover:text-[#0a66c2] hover:cursor-pointer text-2xl hover:cursor-pointer transition duration-500 ease-in-out" /></a>
        <a href="mailto:sjunaid626@gmail.com" aria-label="Mail"><RiMailSendLine className="hover:text-red-400 hover:cursor-pointer text-2xl hover:cursor-pointer transition duration-500 ease-in-out" /></a>
        <a href="https://github.com/iamsjunaid" aria-label="GitHub"><TbBrandGithubFilled className="hover:text-black hover:cursor-pointer text-2xl hover:cursor-pointer transition duration-500 ease-in-out" /></a>
        <a href="https://wellfound.com/u/junaid-ahmed-shakeel-ahmed-syed" aria-label="Wellfound"><FaAngellist className="hover:text-black hover:cursor-pointer text-2xl hover:cursor-pointer transition duration-500 ease-in-out" /></a>
      </div>
    </div>
  </section>
);

export default Homepage;
