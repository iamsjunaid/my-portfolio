import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PorfolioCard from './PortfolioCard';
import mealsDb from '../assets/img/mealsdb.png';
import budgetBee from '../assets/img/budget-bee.png';
import docTalk from '../assets/img/doc-talk.png';
import nationsFacts from '../assets/img/nations-facts.png';
import spaceTravellersHub from '../assets/img/space-travellers-hub.png';
import healthCareDashboard from '../assets/img/healthcareDashboard.jpg';
import nextEvents from '../assets/img/next-events.png';

const Portfolio = () => {
  const projects = [
    {
      no: '0',
      id: uuidv4(),
      img: nextEvents,
      company: 'Self employed',
      designation: 'Full stack developer',
      year: '2024',
      title: 'Next Events',
      desc: 'Next Events is a web application that allows users to search for upcoming events in their area. The application allows users to browse events. Users can filter the events based on date and month. The application is built using the Next.js framework. The application is fully responsive and optimized for mobile devices and it is deployed on Vercel.',
      techs: [
        'NextJS',
        'ReactJS',
        'Vanilla JavaScript',
        'CSS3',
      ],
      live: 'https://next-events-pi-smoky.vercel.app/events',
      source: 'https://github.com/iamsjunaid/next_events',
    },
    {
      no: '1',
      id: uuidv4(),
      img: healthCareDashboard,
      company: 'Self employed',
      designation: 'Frontend developer',
      year: '2024',
      title: 'Healthcare Dashboard',
      desc: 'This project involves creating a web application to fetch and display patient data securely, including health metrics such as heart rate, respiratory rate, and blood pressure, specifically for a patient named Jessica Taylor. Utilizing Vite for the build process, the project employs environment variables to securely manage sensitive information like',
      techs: [
        'HTML5',
        'CSS3',
        'Vanilla JavaScript',
        'ChartJS',
        'Adobe XD',
      ],
      live: 'https://healthcare-dashboard.onrender.com/',
      source: 'https://github.com/iamsjunaid/healthcare_dashboard',
    },
    {
      no: '2',
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
      no: '3',
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
      no: '4',
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
      no: '5',
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
      no: '6',
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
