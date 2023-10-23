import React from 'react';
import PropTypes from 'prop-types';
import { BiSolidCircle } from 'react-icons/bi';

const PortfolioCard = ({ project }) => {
  console.log(project);

  return (
    <div className="bg-white rounded-xl border border-[#DFE1E6] flex flex-col p-4 gap-4 sm:flex-row sm:h-[28rem] sm:gap-8">
      <img
        src={project.img}
        alt={project.title}
        className="rounded-xl mx-auto "
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-left text-primary font-bold text-32 leading-44">
          {project.title}
        </h1>
        <div className="flex items-center gap-2">
          <p className="font-medium text-sm">{project.company.toUpperCase()}</p>
          <span className="text-[8px] text-[#7A869A]">
            <BiSolidCircle />
          </span>
          <p className="font-medium text-sm text-[#7A869A]">
            {project.designation}
          </p>
          <span className="text-[8px] text-[#7A869A]">
            <BiSolidCircle />
          </span>
          <p className="font-medium text-sm text-[#7A869A]">{project.year}</p>
        </div>
        <p className="text-left">{project.desc}</p>
        <ul className="flex flex-wrap">
          {project.techs.map((tech) => (
            <li
              key={project.id}
              className="rounded-md p-2 m-1 text-secondary bg-[#EBEBFF] text-xs"
            >
              {tech}
            </li>
          ))}
        </ul>
        <button
          className="border rounded-md border-secondary px-4 py-2 text-secondary bg-white text-left w-max"
          type="button"
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
