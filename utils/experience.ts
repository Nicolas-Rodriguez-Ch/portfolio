import { EducationObj, ExperienceObj } from './types';

export const experiences: ExperienceObj[] = [
  {
    title: 'Full Stack Web Developer',
    subtitle: 'Banco de Bogotá - FinTech, Software Development',
    description: `Develop software across the entire lifecycle: coding, writing unit tests, collaborating with testers, and coordinating deployments. Build frontend applications using Angular and React and backend services with Node.js. Manage databases with PostgreSQL and DynamoDB. Implement infrastructure as code using Terraform and AWS, primarily working with TypeScript.`,
    dates: 'August 2023- Present',
  },
  {
    title: 'Full Stack JavaScript Developer',
    subtitle: 'Make It Real Camp - Software Development, Technology',
    description: `Developed, designed and launched of various products and services using the agile SCRUM work methodology, practical experience developing software with technologies such as React.JS, Redux, Node.JS, Express, Prisma, Docker, Kubernetes, and TypeScript among others`,
    dates: 'January 2023 to June 2023',
  },
  {
    title: 'Head of Admissions and Sales Representative',
    subtitle: 'Make It Real Camp',
    description:
      'Responsible for the different admission processes, evaluating technical experience and profile, profiling interviews, and coordination of the technical process of applicants for all the web development programs with React and nodeJS at Make It Real.',
    dates: 'January 2020 to January 2023',
  },
  {
    title: 'Human Resources Specialist',
    subtitle: 'Titania Training Group',
    description:
      'Responsible for the structuring of the Human Resources area and the different processes related to it: design of function manuals, selection process (administrative positions, performance evaluation, work environment, and different administrative processes.',
    dates: 'February 2019 to January 2020',
  },
];

export const education: EducationObj[] = [
  {
    title: 'Full Stack Web Developer',
    institution: 'Make It Real.camp',
    year: 2023,
  },
  {
    title: `Bachelor's Degree in Psychology`,
    institution: `Pontifical Xaverian University`,
    year: 2018,
  },
];
