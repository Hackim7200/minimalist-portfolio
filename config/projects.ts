import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "circadian-planner",
    companyName: "Circadian Planner",
    type: "Personal",
    category: ["Mobile Dev", "Full Stack", "Web Dev"],
    shortDescription:
      "Cross-platform productivity app that schedules tasks around users' natural circadian energy cycles, backed by a serverless AWS architecture.",
    githubLink: "https://github.com/Hackim7200/event_countdown_Project_2026",
    techStack: ["Flutter", "Dart", "Typescript", "AWS"],
    startDate: new Date("2025-10-01"),
    endDate: new Date("2026-04-13"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Cross-Platform Scheduling",
        description:
          "Native mobile experience via Flutter alongside a responsive web interface, sharing state across devices in real time.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Circadian Planner is a productivity optimization platform that leverages circadian rhythm research to intelligently schedule tasks based on a user's natural energy cycles throughout the day.",
        "It runs on a scalable serverless AWS backend and delivers a consistent experience across native mobile and responsive web clients, with offline-first data handling for uninterrupted use.",
      ],
      bullets: [
        "Architected a productivity platform that schedules tasks based on users' natural circadian energy cycles.",
        "Built a scalable serverless backend using AWS Cognito for authentication, DynamoDB for data persistence, and AWS Lambda for API endpoints.",
        "Implemented cross-platform architecture delivering a native mobile experience via Flutter and a responsive web interface with shared data state.",
        "Integrated REST APIs for real-time synchronization between platforms and implemented offline-first data handling.",
      ],
    },
  },
  {
    id: "plant-disease-detection",
    companyName: "Plant Disease Detection (Final Year Project, A*)",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "AI/ML"],
    shortDescription:
      "Full-stack web app that detects and classifies plant diseases from leaf images using a custom-trained CNN with object detection and transfer learning.",
    githubLink: "https://github.com/Hackim7200/DiseaseDetectionApp",
    techStack: ["React", "Django", "Python", "TensorFlow", "Keras", "SQL", "Figma"],
    startDate: new Date("2023-09-01"),
    endDate: new Date("2024-05-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Detection & Classification Pipeline",
        description:
          "Object detection to isolate leaves, noise removal, and CNN-based classification, summarized in a plant health report.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This final-year project (graded A*) is a full-stack web application that intakes plant images, performs object detection to isolate leaves, removes visual noise, and classifies each isolated image before presenting a summary of the plant's health.",
        "The frontend was prototyped in Figma and built in React, with a Django backend for storing and displaying detection history, and a CNN trained with TensorFlow/Keras for the core classification task.",
      ],
      bullets: [
        "Developed a full-stack web app performing object detection, noise removal, and disease classification on plant images.",
        "Prototyped the interface in Figma and implemented it with React for seamless disease detection.",
        "Built a secure Django backend API for storing and displaying detection result history with a SQL database.",
        "Developed and trained a Convolutional Neural Network (CNN) using TensorFlow and Keras for plant disease detection.",
        "Created a labelled dataset using CVAT and applied transfer learning to boost model performance.",
        "Evaluated and improved the model by comparing performance metrics and tuning hyperparameters.",
      ],
    },
  },
  {
    id: "fitness-tracker-web-app",
    companyName: "Fitness Tracker Web App",
    type: "Personal",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Full-stack fitness tracking web app with progress visualization, built collaboratively with React, Node.js, and MySQL.",
    techStack: ["React", "Node.js", "MySQL", "Sass"],
    startDate: new Date("2022-01-01"),
    endDate: new Date("2022-06-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Progress Visualization",
        description:
          "Charts visualizing user progress, built with React and styled with Sass.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A fully functional full-stack web app for tracking fitness progress, built as a group project using React, Node.js, and a MySQL server.",
        "The team designed use case, class, and sequence diagrams to systematically map user actions and system responses before implementation.",
      ],
      bullets: [
        "Developed a fully functional full-stack web app using React, Node.js, and a MySQL server.",
        "Designed a dynamic, user-friendly interface with React, enhanced with Sass styling.",
        "Implemented charts to visualize progress, demonstrating data visualization for effective user feedback.",
        "Used GitHub for version control and to synchronize group work.",
        "Designed use case, class, and sequence diagrams to outline user-system interactions.",
      ],
    },
  },
  {
    id: "injury-prevention-app",
    companyName: "Injury Prevention & Progressive Overload",
    type: "Personal",
    category: ["Mobile Dev", "UI/UX"],
    shortDescription:
      "Flutter mobile app helping athletes manage progressive overload and avoid injury, with SQLite-backed routine and progression tracking.",
    githubLink: "https://github.com/Hackim7200/Kinetics_v2",
    techStack: ["Flutter", "Dart", "SQLite"],
    startDate: new Date("2025-06-01"),
    endDate: new Date("2026-07-13"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Overtraining Insights",
        description:
          "Aesthetic data representation showing whether a muscle group is being overtrained, reducing injury risk.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A mobile application built in Flutter to help athletes manage progressive overload and prevent injury.",
        "Routines, exercises, and progression data are stored in SQLite, driving a data representation view that flags when a muscle group risks overtraining.",
      ],
      bullets: [
        "Designed and developed a Flutter mobile app to assist athletes with progressive overload and injury prevention.",
        "Used an SQLite database to represent users' routines, exercises, and progression data.",
        "Applied UX design principles to ensure ease of use for end users.",
        "Built a data representation section surfacing overtraining risk per muscle group.",
        "Tested the app on physical devices to verify UI compatibility.",
      ],
    },
  },
  {
    id: "daily-planner-countdown-app",
    companyName: "Daily Productivity Planner & Event Countdown",
    type: "Personal",
    category: ["Mobile Dev", "UI/UX"],
    shortDescription:
      "Flutter mobile app for daily planning and event countdowns, with SQL-backed storage and due-date notifications.",
    techStack: ["Flutter", "Dart", "SQL"],
    startDate: new Date("2022-09-01"),
    endDate: new Date("2023-01-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Planning & Countdown",
        description:
          "Day planning combined with countdowns to upcoming events, with due-date alerts.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A Flutter mobile app for planning out the day and keeping track of important upcoming events.",
        "Task and event data is stored in a SQL database, with alerts notifying the user as an event's due date approaches.",
      ],
      bullets: [
        "Developed a Flutter mobile app for daily planning and tracking future events.",
        "Designed a user-friendly interface that makes the platform easy to understand.",
        "Used a SQL database to store data relating to tasks and events.",
        "Implemented alerts notifying the user as an event's due date approaches.",
      ],
    },
  },
  {
    id: "eight-queens-simulated-annealing",
    companyName: "8 Queens Problem — Simulated Annealing",
    type: "Personal",
    category: ["AI/ML"],
    shortDescription:
      "Simulated Annealing algorithm solving the 8 Queens problem, with a custom fitness function for solution quality.",
    techStack: ["Python"],
    startDate: new Date("2021-10-01"),
    endDate: new Date("2021-12-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Algorithm Design",
        description:
          "Simulated Annealing search with a fitness function evaluating candidate board states.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A Simulated Annealing algorithm developed to solve the classic 8 Queens problem, showcasing algorithmic design and optimization.",
      ],
      bullets: [
        "Developed a Simulated Annealing algorithm to solve the 8 Queens problem.",
        "Implemented a fitness function to evaluate the quality of solutions generated by the algorithm.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
