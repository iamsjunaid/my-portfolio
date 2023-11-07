import React from 'react';
import PropTypes from 'prop-types';
import { BiSolidCircle } from 'react-icons/bi';
import { MdRocketLaunch } from 'react-icons/md';
import '../assets/styles/PortfolioCard.css';

const PortfolioCard = ({ project }) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    window.open(project.source, '_blank');
  };

  return (
    <div
      className={`bg-white rounded-xl flex flex-col p-4 sm:p-8 gap-4 sm:gap-4 sm:flex-row sm:h-[32rem] sm:gap-8 shadow-3xl ${
        project.no % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'
      }`}
    >
      <div className="w-full flex flex-col items-center justify-center relative  backdrop-blur-sm hover:backdrop-blur-lg container">
        <img
          src={project.img}
          alt={project.title}
          className="rounded-xl mx-auto border-y-[4rem] border-x-[1rem] border-secondary w-[70vw] h-[32vh] shadow-md sm:h-[100vh] project-img"
        />
        <div className="absolute top-2 right-2 text-center hover:bg-white hover:text-secondary hover:border-secondary border-2 rounded-xl p-4 text-white items-center transition duration-500 ease-in-out see-live">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center px-1 gap-1"
          >
            <p className="text-xs">See Live</p>
            <MdRocketLaunch className="text-xs" title="See Live" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:gap-8 justify-start sm:w-[64rem]">
        <h1 className="text-left text-primary font-bold text-32 leading-44">
          {project.title}
        </h1>
        <div className="flex items-center gap-1">
          <p className="font-medium text-[.8rem] sm:text-lg">{project.company.toUpperCase()}</p>
          <span className="text-[8px] text-[#7A869A]">
            <BiSolidCircle />
          </span>
          <p className="font-medium text-[.8rem] text-[#7A869A] sm:text-lg">
            {project.designation}
          </p>
          <span className="text-[8px] text-[#7A869A]">
            <BiSolidCircle />
          </span>
          <p className="font-medium text-[.8rem] text-[#7A869A] sm:text-lg">{project.year}</p>
        </div>
        <p className="text-left">{project.desc}</p>
        <ul className="flex flex-wrap">
          {project.techs.map((tech) => (
            <li
              key={tech + project.id}
              className="rounded-md p-2 m-1 text-secondary bg-[#EBEBFF] text-xs"
            >
              {tech}
            </li>
          ))}
        </ul>
        <button
          className="border rounded-md border-secondary px-4 py-2 text-secondary bg-white text-left w-max hover:cursor-pointer hover:bg-secondary hover:text-white transition duration-500 ease-in-out see-project-btn"
          type="button"
          onClick={handleButtonClick}
          title="Navigate to Github Repository"
        >
          See Project
        </button>
      </div>
    </div>
  );
};

PortfolioCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    no: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(PropTypes.string).isRequired,
    live: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
};
export default PortfolioCard;
