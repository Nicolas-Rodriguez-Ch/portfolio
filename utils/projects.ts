export const initialProjects = [
  {
    id: 0,
    title: "Table Top",
    deployLink: "https://table-top.vercel.app/",
    summary:
      "Table Top E-commerce App is a React-based e-commerce application designed specifically for restaurants. It allows users to conveniently order food and make reservations at their favorite restaurants. The app offers user account management, order placement, reservation booking, and review functionality. Restaurant admins have access to menu management, category organization, reservation tracking, and restaurant details editing. Platform admins can create and manage restaurants. The project is open source and licensed under MIT.",
    description: `Table Top E-commerce App is a React-based e-commerce application designed specifically for restaurants. It allows users to conveniently order food and make reservations at their favorite restaurants. The app offers a range of features, including user account management, order placement, reservation booking, and the ability to leave reviews. Restaurant admins have access to features such as menu management, category organization, reservation tracking, and restaurant details editing. Additionally, platform admins can create and manage restaurants, assign admins, and remove restaurants from the platform. The app incorporates essential dependencies like React, React-Bootstrap, React-Router-Dom, React-Redux, Axios, and more. The project is open source and licensed under MIT.\n\nThe backend of the Table Top is built using TypeScript and Express. It serves as the API provider for the React frontend, facilitating functionalities like user authentication, authorization, CRUD operations for users, restaurants, orders, and reservations. JSON Web Tokens (JWT) are employed for securing API endpoints, while bcrypt is used for password hashing. The backend relies on dependencies like TypeScript, Express, Prisma, PostgreSQL, JWT, bcrypt, cors, and morgan. The project is open source and licensed under MIT.`,
    image:
      "https://res.cloudinary.com/dhyu9pxjh/image/upload/v1687300460/Captura_de_pantalla_2023-06-20_173326_burlaj.png",
    repos: [
      {
        name: "Table Top Front End",
        value: "https://github.com/CamiloGilFranco/TableTop-FE",
      },
      {
        name: "Table Top Back End",
        value: "https://github.com/CamiloGilFranco/TableTop-BE",
      },
    ],
    video: "https://www.youtube.com/live/XqTEuz2mxzo?feature=share&t=226",
  },
  {
    id: 0,
    title: "TechnoTrove (under development)",
    deployLink: "https://technotroveserver.onrender.com/api/healthCheck",
    summary:
      "TechnoTrove is a Full Stack plataform where visitors can see the portoflios of the registered users and their respective projects, is it built using React forr the front-end and nodejs for the back-end with a database in PostgreSQL, the whole application is built using TypeScript for a more streamlined development experience",
    description: `This Full stack platform lets visitors check the portfofolios of the users and their projects, and for the users they can create their own personal portfolios with their projects and share the relevant links. 

    Local user creation and authentication, auth0 integration for creating and authentication with a third party, automatic email notification on different actions.

    Private routes and session storage for users.

    Security validations for updating user or project information.

    Leading of a team for the development of the entire user interface

    `,
    image: "https://res.cloudinary.com/dhyu9pxjh/image/upload/v1689700669/image_zis4ec.png",
    repos: [
      {
        name: "TechnoTrove Server",
        value: "https://github.com/Nicolas-Rodriguez-Ch/technoTroveServer",
      },
    ],
  },
  {
    id: 0,
    title: "Agora Tutorships",
    deployLink: "https://agora-tutorships-client.vercel.app/",
    summary:
      "Agora Tutorships v2.0 is a cutting-edge web application built on Next.js, aimed at transforming digital tutoring. It provides an all-encompassing platform for managing tutoring sessions, enabling users to effortlessly connect, schedule sessions, process payments, and upload resources. Utilizing a modern and robust tech stack, including tools like React Redux, Redux Toolkit, and Stripe, it ensures an optimal user experience. Its intuitive design, engaging aesthetic appeal, and efficient image/video management make it a beacon for further community development. The project is open-source and licensed under MIT.",
    description: `Agora Tutorships v2.0 is a robust Next.js-based web application designed to enhance the digital learning landscape. This app, an upgrade from a Create React App (CRA) version, offers a seamless platform for managing tutoring sessions, integrating cutting-edge technologies for optimal user experience. It features an intuitive interface that allows users to connect, schedule sessions, process payments, and upload resources, facilitated by a comprehensive backend infrastructure.

    The tech stack includes Next.js for hybrid rendering, React Redux and Redux Toolkit for efficient state management, and Stripe for secure and reliable payment processing. Its modern design also utilizes Axios, date-fns and date-fns-tz for client-server interaction and time management, and Sass and Lottie for an engaging aesthetic appeal. This application also incorporates Cloudinary for efficient image/video management and SweetAlert2 for visually appealing popup messages. It is an open-source project inviting further community development, licensed under MIT.`,
    image:
      "https://res.cloudinary.com/dhyu9pxjh/image/upload/v1684854498/Captura_de_pantalla_2023-05-23_100738_fiyugf.png",
    repos: [
      {
        name: "Agora Client",
        value:
          "https://github.com/Nicolas-Rodriguez-Ch/agora-tutorships-client",
      },
      {
        name: "Agora Server",
        value:
          "https://github.com/Nicolas-Rodriguez-Ch/agora-tutorships-server",
      },
    ],
    video: "https://www.youtube.com/live/5CrEdXS5Lls?feature=share&t=82",
  },
  {
    id: 0,
    title: "My Portfolio",
    deployLink: "https://nicolasrodriguez-portfolio.vercel.app/",
    summary:
      "Personal Portfolio is a Next.js-based website designed to showcase my professional journey, skills, and notable projects in web development. Powered by Next.js and a stack of essential technologies, including TypeScript, Tailwind CSS and Sass, the portfolio provides a comprehensive overview of my work experience and expertise. With easy installation instructions, it allows others to clone, customize, and run the application locally for development. The project is open-source under the MIT license, inviting exploration and potential contributions from the community to create their own personalized portfolio websites.",
    description: `Personal Portfolio is a Next.js-based website developed to showcase my professional journey, skills, and noteworthy projects. It provides visitors with an insight into my expertise in web development, displaying a comprehensive overview of my work experience and the technologies I specialize in.

    The portfolio is built using Next.js, a powerful React framework, along with other essential technologies like TypeScript for type safety, Tailwind CSS for rapid and customizable design implementation and Sass for advanced CSS styling. This project ensures a seamless installation process with clear instructions to clone the repository, install dependencies, and run the application locally for development. Additionally, it includes instructions on building the application for production`,
    image:
      "https://res.cloudinary.com/dhyu9pxjh/image/upload/v1687307093/Captura_de_pantalla_2023-06-20_192428_qjtsem.png",
    repos: [
      {
        name: "Portfolio Front End",
        value: "https://github.com/Nicolas-Rodriguez-Ch/portfolio",
      },
    ],
  },
  {
    id: 0,
    title: "Backend assesment",
    deployLink: "https://nrch-backend-assesment.onrender.com/api/healthcheck",
    summary: `The "Backend Assessment" project is a robust backend application designed to manage user's favorite lists, offering functionalities such as account creation, login, and list management. It utilizes a tech stack that includes Node.js, Express.js, Prisma, and PostgreSQL, with bcrypt and JWT for secure authentication. Users can get started by cloning the repo, installing dependencies, setting up a PostgreSQL database, and running the development server. The API includes various endpoints for operations like a server health check, user registration, and managing favorite lists.`,
    description: `The "Backend Assessment" project is a dynamic and user-friendly backend application designed to manage personalized favorite lists. As an API, it allows users to create an account, log in, and manipulate their favorite lists by creating, viewing, and deleting them. The application is database-driven, employing PostgreSQL for data storage. The software stack used to develop this application includes Node.js for server-side operations, Express.js as the web framework, Prisma as the database access library and ORM, and PostgreSQL as the relational database system. Furthermore, it leverages JSON Web Tokens (JWT) and bcrypt for secure user authentication and password hashing, respectively. \n\n

    To get started with the application, users need to clone the repository, install dependencies, set up a PostgreSQL database, and configure the connection details. After applying the database schema and setting up environment variables for port number and JWT secret key, users can start the development server. The application enforces strong password criteria for new users, ensuring data security. Users can interact with the API using an API client like Postman or a frontend application. The application's API endpoints enable a range of operations, including a health check, user registration, login, and actions on favorite lists. The project, spearheaded by Nicolás Rodríguez, is licensed under ISC and utilizes several dependencies and devDependencies, as outlined in the package.json file.`,
    image:
      "https://res.cloudinary.com/dhyu9pxjh/image/upload/v1687573399/Captura_de_pantalla_2023-06-23_212244_k16n9u.png",
    repos: [
      {
        name: "Backend assessment repository",
        value:
          "https://github.com/Nicolas-Rodriguez-Ch/make-it-real-backend-assesment/tree/main",
      },
    ],
  },
];

export const projects = (() =>
  initialProjects.map((project, index) => ({
    ...project,
    id: index + 1,
    pathName: project.title.replaceAll(" ", "").toLowerCase(),
  })))();
