import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PorfolioCard from './PortfolioCard';
import mealsDb from '../assets/img/mealsdb.png';
import budgetBee from '../assets/img/budget-bee.png';
import docTalk from '../assets/img/doc-talk.png';
import nationsFacts from '../assets/img/nations-facts.png';
import spaceTravellersHub from '../assets/img/space-travellers-hub.png';

const Portfolio = () => {
  const projects = [
    {
      no: '0',
      id: uuidv4(),
      img: docTalk,
      company: 'Microverse',
      designation: 'Full-stack developer',
      year: '2023',
      title: 'Doc Talk',
      desc: 'DocTalk is your trusted health companion, bringing the power of informed conversations to your fingertips. We believe that clear and open communication is the key to better healthcare decisions, and thats what Doctalk is all about.',
      techs: [
        'Ruby on Rails',
        'PostgreSQL',
        'RSpec',
        'ReactJS',
        'Tailwind CSS',
        'Redux',
        'React Testing Library',
      ],
      live: 'https://doc-talk2.onrender.com/',
      source: 'https://github.com/iamsjunaid/DocTalk-Frontend',
    },
    {
      no: '1',
      id: uuidv4(),
      img: budgetBee,
      company: 'Microverse',
      designation: 'Back-end developer',
      year: '2023',
      title: 'Budget Bee',
      desc: 'budget bee is a mobile web application where you can manage your budget; you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
      techs: ['Ruby on Rails', 'Tailwind CSS', 'PostgreSQL', 'Rspec'],
      live: 'https://budget-bee.onrender.com/',
      source: 'https://github.com/iamsjunaid/budget-bee',
    },
    {
      no: '2',
      id: uuidv4(),
      img: nationsFacts,
      company: 'Microverse',
      designation: 'Front-end developer',
      year: '2023',
      title: 'Nations Facts',
      desc: 'I worked on an external API showing various countries and their statistical data. It consists of a homepage that shows a list of the nations. When clicked on a country, it shows the details of the selected country.',
      techs: ['ReactJS', 'Redux', 'React Testing Library'],
      live: 'https://nations-facts.onrender.com/',
      source: 'https://github.com/iamsjunaid/nations-facts',
    },
    {
      no: '3',
      id: uuidv4(),
      img: spaceTravellersHub,
      company: 'Microverse',
      designation: 'Front-end developer',
      year: '2023',
      title: 'Space Travellers Hub',
      desc: 'We built a web application that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
      techs: ['ReactJS', 'Redux', 'React Testing Library'],
      live: 'https://space-travelers-hub-dhiu.onrender.com/',
      source: 'https://github.com/iamsjunaid/space-travelers-hub',
    },

    {
      no: '4',
      id: uuidv4(),
      img: mealsDb,
      company: 'Microverse',
      designation: 'Front-end Developer',
      year: '2023',
      title: 'Meals DB',
      desc: 'MealsDB is an application that uses an external API mealsDB to fetch and store the data from. The project contains meals that a user can like, comment and reserve.',
      techs: ['HTML', 'CSS', 'JavaScript-ES6'],
      live: 'https://iamsjunaid.github.io/MealsDB',
      source: 'https://github.com/iamsjunaid/MealsDB',
    },
  ];

  return (
    <section id="portfolio" className="flex flex-col gap-12 w-[80%] mx-auto text-center my-16 ">
      {projects.map((project) => (
        <PorfolioCard key={project.id} project={project} />
      ))}
    </section>
  );
};

export default Portfolio;
