import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface SectionInfoInterface {
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
  cardHook: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  whatItDoesArr: SectionInfoInterface[];
  howItWorksArr: SectionInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "kinetics",
    type: "Personal",
    githubLink: "https://github.com/Hackim7200/event_countdown_Project_2026",
    startDate: new Date("2001-01-01"),
    endDate: new Date("2001-01-01"),
    companyLogoImg: "/logo.png",

    companyName: "Kinetics",
    category: ["Mobile Dev", "Backend", "Distributed System"],

    cardHook:
      "Offline-first fitness tracker that lets you log workouts without signal and syncs seamlessly across your phone and web app once you're back online.",

    techStack: ["Flutter", "SQLite", "TypeScript", "AWS Lambda", "DynamoDB"],
    // THIS IS THE DESCRIPTION FOR THE PROJECT
    descriptionDetails: {
      paragraphs: [
        "Kinetics is a fitness application built to help people track their workouts day to day. Designed offline-first with poor gym connectivity in mind, Kinetics lets you log workouts without an internet connection and automatically syncs them once connectivity is restored. Workouts sync seamlessly across multiple phones and the web app, with a future goal of making personal training accessible to everyone. The app provides intuitive analytics that help you track steady progress and flag regression so you always know where you stand.",
      ],
      bullets: [],
    },
    whatItDoesArr: [
      {
        title: "",
        description:
          "Offline-first fitness tracker that lets you log workouts without signal and syncs seamlessly across your phone and web app once you're back online.",
        imgArr: [],
      },
    ],
    howItWorksArr: [
      {
        title: "",
        description:
          "Workouts are logged to a local SQLite DB first, then queued for sync. Every ~5 minutes the queue is batched and pushed to AWS Lambda, written to DynamoDB, and propagated to your other devices using a last-write-wins conflict policy.",
        imgArr: [],
      },
    ],
  },
  {
    id: "plant-disease-detection",
    type: "Personal",
    githubLink: "https://github.com/Hackim7200/DiseaseDetectionApp",
    startDate: new Date("2023-09-01"),
    endDate: new Date("2024-05-01"),
    companyLogoImg: "/logo.png",

    companyName: "Plant Disease Detection (Final Year Project, A*)",
    category: ["Full Stack", "Web Dev", "AI/ML"],

    cardHook:
      "Full-stack web app that detects and classifies plant diseases from leaf images using a custom-trained CNN with object detection and transfer learning.",

    techStack: [
      "React",
      "Django",
      "Python",
      "TensorFlow",
      "Keras",
      "SQL",
      "Figma",
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
    whatItDoesArr: [
      {
        title: "Detection & Classification Pipeline",
        description:
          "Object detection to isolate leaves, noise removal, and CNN-based classification, summarized in a plant health report.",
        imgArr: ["/logo.png"],
      },
    ],
    howItWorksArr: [],
  },
  {
    id: "fitness-tracker-web-app",
    type: "Personal",
    startDate: new Date("2022-01-01"),
    endDate: new Date("2022-06-01"),
    companyLogoImg: "/logo.png",

    companyName: "Fitness Tracker Web App",
    category: ["Full Stack", "Web Dev"],

    cardHook:
      "Full-stack fitness tracking web app with progress visualization, built collaboratively with React, Node.js, and MySQL.",

    techStack: ["React", "Node.js", "MySQL", "Sass"],
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
    whatItDoesArr: [
      {
        title: "Progress Visualization",
        description:
          "Charts visualizing user progress, built with React and styled with Sass.",
        imgArr: ["/logo.png"],
      },
    ],
    howItWorksArr: [],
  },
  {
    id: "injury-prevention-app",
    type: "Personal",
    githubLink: "https://github.com/Hackim7200/Kinetics_v2",
    startDate: new Date("2025-06-01"),
    endDate: new Date("2026-07-13"),
    companyLogoImg: "/logo.png",

    companyName: "Injury Prevention & Progressive Overload",
    category: ["Mobile Dev", "UI/UX"],

    cardHook:
      "Flutter mobile app helping athletes manage progressive overload and avoid injury, with SQLite-backed routine and progression tracking.",

    techStack: ["Flutter", "Dart", "SQLite"],
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
    whatItDoesArr: [
      {
        title: "Overtraining Insights",
        description:
          "Aesthetic data representation showing whether a muscle group is being overtrained, reducing injury risk.",
        imgArr: ["/logo.png"],
      },
    ],
    howItWorksArr: [],
  },
  {
    id: "daily-planner-countdown-app",
    type: "Personal",
    startDate: new Date("2022-09-01"),
    endDate: new Date("2023-01-01"),
    companyLogoImg: "/logo.png",

    companyName: "Daily Productivity Planner & Event Countdown",
    category: ["Mobile Dev", "UI/UX"],

    cardHook:
      "Flutter mobile app for daily planning and event countdowns, with SQL-backed storage and due-date notifications.",

    techStack: ["Flutter", "Dart", "SQL"],
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
    whatItDoesArr: [
      {
        title: "Planning & Countdown",
        description:
          "Day planning combined with countdowns to upcoming events, with due-date alerts.",
        imgArr: ["/logo.png"],
      },
    ],
    howItWorksArr: [],
  },
  {
    id: "eight-queens-simulated-annealing",
    type: "Personal",
    startDate: new Date("2021-10-01"),
    endDate: new Date("2021-12-01"),
    companyLogoImg: "/logo.png",

    companyName: "8 Queens Problem — Simulated Annealing",
    category: ["AI/ML"],

    cardHook:
      "Simulated Annealing algorithm solving the 8 Queens problem, with a custom fitness function for solution quality.",

    techStack: ["Python"],
    descriptionDetails: {
      paragraphs: [
        "A Simulated Annealing algorithm developed to solve the classic 8 Queens problem, showcasing algorithmic design and optimization.",
      ],
      bullets: [
        "Developed a Simulated Annealing algorithm to solve the 8 Queens problem.",
        "Implemented a fitness function to evaluate the quality of solutions generated by the algorithm.",
      ],
    },
    whatItDoesArr: [
      {
        title: "Algorithm Design",
        description:
          "Simulated Annealing search with a fitness function evaluating candidate board states.",
        imgArr: ["/logo.png"],
      },
    ],
    howItWorksArr: [],
  },
];

export const featuredProjects = Projects.slice(0, 3);
