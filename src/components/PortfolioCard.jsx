import React from 'react';
import PropTypes from 'prop-types';
import { BiSolidCircle } from 'react-icons/bi';
import '../assets/styles/PortfolioCard.css';

const PortfolioCard = ({ project }) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    window.open(project.source, '_blank');
  };

  return (
    <div
      className={`bg-white rounded-xl border border-[#DFE1E6] flex flex-col p-4 sm:p-8 gap-4 sm:gap-4 sm:flex-row sm:h-[32rem] sm:gap-8 ${
        project.no % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'
      }`}
    >
      <div className="w-full sm:w-[100rem] flex flex-col items-center justify-center relative  backdrop-blur-sm hover:backdrop-blur-lg container">
        <img
          src={project.img}
          alt={project.title}
          className="rounded-xl mx-auto border-y-[4rem] border-x-[1rem] border-secondary w-[70vw] h-[48vh] shadow-md sm:h-[100vh] project-img"
        />
        <button type="button" className="absolute">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-white font-medium see-live hidden"
          >
            See Live
          </a>
        </button>
      </div>
      <div className="flex flex-col gap-4 sm:gap-8 justify-start">
        <h1 className="text-left text-primary font-bold text-32 leading-44">
          {project.title}
        </h1>
        <div className="flex items-center gap-1">
          <p className="font-medium text-base sm:text-lg">{project.company.toUpperCase()}</p>
          <span className="text-[8px] text-[#7A869A]">
            <BiSolidCircle />
          </span>
          <p className="font-medium text-base text-[#7A869A] sm:text-lg">
            {project.designation}
          </p>
          <span className="text-[8px] text-[#7A869A]">
            <BiSolidCircle />
          </span>
          <p className="font-medium text-base text-[#7A869A] sm:text-lg">{project.year}</p>
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
          className="border rounded-md border-secondary px-4 py-2 text-secondary bg-white text-left w-max see-project-btn"
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