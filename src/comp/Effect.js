import React from 'react';
import './Effect.css'; // Import the CSS file for styling

const Effect = () => {
  // Array to store the information for each box
  const boxes = [
    {
      id: 1,
      title: 'Internet Of Things',
      description: 'PRIME STAR has developed an online health and safety management solution, which is embedded with sensors to monitor food temperature in real time. It comes with fully customizable modules that reduces operational cost and increases efficiency. Automated temperature monitoring also results in optimal utilization of resources.',
      image: './Designer.png',
      link: '/Iot', // Replace with the URL of the education page
    },
    {
      id: 2,
      title: 'Analytics & Big Data',
      description: 'Big data analytics is the often complex process of examining big data to uncover information -- such as hidden patterns, correlations, market trends and customer preferences -- that can help organizations make informed business decisions.',
      image: "./bigdata.png",
      link: '/bi_analytics', // Replace with the URL of the health page
    },
    {
      id: 3,
      title: 'Artificial intelligence',
      description: 'Artificial intelligence software imitates human intelligence and performs tasks that require human cognitive skills. It works on complex algorithms, machine learning (ML) models, and neural networks to analyze massive volumes of data, recognize patterns, and make intelligent decisions.',
      image: "./Ai.png",
      link: '/Cloud Computing', // Replace with the URL of the shelter page
    },
    {
      id: 4,
      title: 'Robotic Automation',
      description: 'Robotic process automation (RPA), also known as software robotics, uses automation technologies to mimic back-office tasks of human workers, such as extracting data, filling in forms, moving files, et cetera. It combines APIs and user interface (UI) interactions to integrate and perform repetitive tasks between enterprise and productivity applications. ',
      image: './Rob.png',
      link: '/business_intelligence', // Replace with the URL of the food page
    },
    {
        id: 5,
        title: 'AI Used in Business',
        description: 'AI can help transform how businesses engage with customers, identify relevant insights, and improve the customer experience. Some benefits of leveraging AI for customer service include faster response times, 24/7 availability and support, and opportunities to offer tailored solutions based on customers’ specific needs.',
        image: './Buss.png', // Replace with the URL of the image
        link: '/bi_analytics', // Replace with the URL of the community support page
      },
      {
        id: 6,
        title: 'DevOps',
        description: 'DevOps is the combination of cultural philosophies, practices, and tools that increases an organization  ability to deliver applications and services at high velocity: ',
        image: './Devop.png', // Replace with the URL of the image
        link: '/Devops', // Replace with the URL of the environmental conservation page
      },
  ];

  return (
    <div className="animation-boxes-container">
      {boxes.map((box) => (
        <a key={box.id} to={box.link} className="animation-box">
          <div className="box-image">
            <img src={box.image} alt={box.title} />
          </div>
          <div className="box-info">
            <h3>{box.title}</h3>
            <p>{box.description}</p> {/* Display the description here */}
            <button className="read-more-button">Read More</button>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Effect;
