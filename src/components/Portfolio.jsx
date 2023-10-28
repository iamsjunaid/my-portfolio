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
      desc: 'A trusted health companion, brings the power of informed conversations to your fingertips. Clear and open communication is the key to better healthcare decisions, and that\'s what Doctalk is all about.',
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
      desc: 'Take control of your finances with ease and precision. Create personalized budgets tailored to your lifestyle and financial goals. Seamlessly manage your income and expenses by categorizing transactions, giving you a clear overview of your spending habits.',
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
      desc: 'A fully responsive web application with a user-friendly homepage, it provides an extensive list of all the countries at your fingertips. Seamlessly browse through and explore the globe. When you click on a specific country, delve into the intricacies and details that make it unique.',
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
      desc: 'Leveraging real-time data from the SpaceX API, A user-friendly interface ensures seamless navigation, allowing enthusiasts to choose from a variety of rocket options and participate in thrilling space expeditions.',
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
      desc: 'Discover meals tailored to your taste buds and dietary preferences. Engage with the community by liking and commenting on your favorite dishes, sharing your culinary adventures, and learning from fellow food enthusiasts. Want to ensure a seat at the table? Reserve your spot for upcoming events and exclusive chef\'s specials.',
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
