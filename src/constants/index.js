import {
    student,
    gym,
    car,
    web,
    javascript,
    typescript,
    firebase,
    python,
    cpp,
    postgres,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    mixspot,
    tesla,
    shopify,
    carrent,
    eazycommerce,
    motore,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
   
  ];
  
  const services = [
    {
      title: "Programmer",
      icon: web,
    },
    {
      title: "Lifelong Learner",
      icon: student,
    },
    {
      title: "Workout Enthusiast",
      icon: gym,
    },
    {
      title: "Car Enthusiast",
      icon: car,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Postgres",
      icon: postgres,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
  
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
  
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "MixSpot",
      icon: mixspot,
      iconBg: "#383E56",
      date: "July 2022 - August 2022",
      points: [
        "Automated a system to manage client information using SQL and Python",
        "Devised, wrote, and revised existing technical reports while providing critical feedback",
        "Evaluated company software, hardware, and data protection policies for effectiveness and security",
        "Assessed systems, web design, financial data, and marketing strategy to raise customer impact",
      ],
    },
 
  ];
  
  
  const projects = [
    {
      name: "EazyCommerce",
      description:
        "Web-based application that allows users to browse, search, review, and checkout products.\
        Used Django for backend and React for the frontend with redux management.\
        The project also includes user authentication the PayPal API integration. Images are stored using AWS S3 bucket,\
        while data is managed with a PostgresSQL database with AWS rds. The app is deployed \
        on Heroku, and Postman was used for backend route testing. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
        {
          name: "aws",
          color: "blue-text-gradient",
        },
        {
          name: "postgresSQL",
          color: "green-text-gradient",
        },
      ],
      image: eazycommerce,
      source_code_link: "https://github.com/nk0311/eazycommerce/tree/main/backend",
    },
    {
      name: "Motore",
      description:
        "Created a cross-platform mobile flutter application that \
        serves as a user's diary for car expenses. The app utilizes \
        Google Firebase as a secure no-SQL backend to store user data. \
        I also implemented Google Auth for user authentication and integrated \
        Google Maps API to find nearby gas stations. Additionally, There's a \
        'shop' feature using HTTP requests which enables users to purchase car parts.",
      tags: [
        {
          name: "dart with flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "google auth",
          color: "pink-text-gradient",
        },
      ],
      image: motore,
      source_code_link: "https://github.com/jabezj1/Motore",
    },
  
  ];
  
  export { services, technologies, experiences, projects };