import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface SectionInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
  bullets: string[];
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
  introduction: DescriptionDetailsInterface;
  infoArr: SectionInfoInterface[];
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
    introduction: {
      
      paragraphs: [
        "Kinetics is a fitness application built to help people track their workouts day to day. Designed offline-first with poor gym connectivity in mind, Kinetics lets you log workouts without an internet connection and automatically syncs them once connectivity is restored. Workouts sync seamlessly across multiple phones and the web app, with a future goal of making personal training accessible to everyone. The app provides intuitive analytics that help you track steady progress and flag regression so you always know where you stand."
      ],
      bullets: [
      ],
    },
    // the 2 section below can be merged into a reusable section that can be repeated
    infoArr: [
      {
        title: "What It Does",
        description:"Kinetics is a fitness application built to help people track their workouts day to day. Designed offline-first with poor gym connectivity in mind, Kinetics lets you log workouts without an internet connection and automatically syncs them once connectivity is restored. Workouts sync seamlessly across multiple phones and the web app, with a future goal of making personal training accessible to everyone. The app provides intuitive analytics that help you track steady progress and flag regression so you always know where you stand.",
        bullets: [
       
        ],
        imgArr: [],
      },
      {
        title: "How It Works",
        description:"The application application implements the following sync engine architecture with the conflict resolution being last write wins every time user makes changes to their workouts adds or updates it it gets added to the sync queue which keeps track of the updates that need to be pushed to the server. Every interval e.g. 5min sync queue pushes changes in bulk to the server to update the changes. if it synces successfully syncs the queue is emptied and the cycle repeats itself bulk is necessary to reduce the cost of hitting the api endpoint every time changes are added that stacks up the costs",
        bullets: [
       
        ],
        imgArr: ["/Kinetics/sync_engine.png"],
      },
    ],
  },

  {
    id: "leaf-lens",
    type: "Personal",
    githubLink: "https://github.com/Hackim7200/DiseaseDetectionApp",
    startDate: new Date("2023-09-01"),
    endDate: new Date("2024-05-01"),
    companyLogoImg: "/logo.png",

    companyName: "Leaf Lens",
    category: ["Web Dev", "Backend", "AI/ML"],

    cardHook:
      "Plant disease detection app that identifies issues from a single photo, performing multi-class classification on each leaf to help catch problems early in agriculture.",

    techStack: ["React", "Django", "TensorFlow", "YOLOv8"],
    introduction: {
      paragraphs: [
        "Leaf Lens is a full-stack plant disease detection app built to detect various diseases in plants. The app takes in plant images, performs object detection to isolate leaves, removes visual noise, and classifies each isolated image before presenting a summary of the plant's health. The project utilised and retrained an AlexNet model and a YOLOv8 model on a custom dataset for multi-class classification. The app was designed to reduce plant loss at early stages in agricultural land through easy, accessible detection.",
        "Photos are captured via phone or camera and sent to a Django backend, which feeds them to a YOLOv8 object detection model (trained on web-scraped leaf images) that isolates each leaf using bounding box coordinates. An AlexNet CNN, trained on a Hugging Face dataset of plant diseases, then classifies each cropped leaf. Results are saved to the database and returned to the user when they view the page.",
      ],
      bullets: [
        "Retrained a YOLOv8 object detection model on web-scraped leaf images to isolate leaves via bounding boxes.",
        "Retrained an AlexNet CNN on a Hugging Face plant disease dataset for multi-class classification.",
        "Built a full-stack pipeline (React frontend, Django backend) that stores and returns classification results.",
        "Designed for early, accessible disease detection to help reduce plant loss in agriculture.",
      ],
    },
    infoArr: [
      {
        title: "What It Does",
        description:
          "Leaf Lens is a full-stack plant disease detection app built to detect various diseases in plants. The app takes in plant images, performs object detection to isolate leaves, removes visual noise, and classifies each isolated image before presenting a summary of the plant's health.",
        bullets: [
          "Detects and classifies multiple plant diseases from a single photo.",
          "Isolates leaves via object detection, removes visual noise, then runs multi-class classification.",
          "Retrained AlexNet and YOLOv8 models on a custom dataset for classification.",
          "Built to catch problems early and reduce plant loss in agricultural settings.",
        ],
        imgArr: [],
      },
      {
        title: "How It Works",
        description:
          "The app takes an image captured on your phone or camera and sends it to the backend. The backend feeds it to the YOLOv8 object detection model, trained on web-scraped leaf images, which isolates each leaf using bounding box coordinates. An AlexNet CNN model, trained on a Hugging Face dataset of plant diseases, then classifies each isolated leaf. Results are saved to the database and returned to the user when they view the page.",
        bullets: [
          "User captures a photo via phone or camera and uploads it to the backend.",
          "A YOLOv8 model, trained on web-scraped leaf images, detects and crops each leaf using bounding box coordinates.",
          "An AlexNet CNN, trained on a Hugging Face plant disease dataset, classifies each cropped leaf.",
          "Results are saved to the database and returned to the user on the results page.",
        ],
        imgArr: [],
      },
    ],
  },
  {
    id: "pomodoro-planner",
    type: "Personal",
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-07-20"),
    companyLogoImg: "/logo.png",

    companyName: "Pomodoro Planner",
    category: ["Mobile Dev", "Web Dev", "Backend", "Distributed System"],

    cardHook:
      "Minimalist planner that schedules tasks around your circadian rhythm, tracks progress with pomodoros, and counts down to upcoming events on any device.",

    techStack: ["Flutter", "Next.js", "SQLite", "TypeScript", "AWS Lambda", "DynamoDB"],
    introduction: {
      paragraphs: [
        "Pomodoro Planner is a minimalistic mobile and web app used to plan your day using pomodoros. The app is developed with the human energy cycle in mind, following the circadian rhythm, allowing you to schedule your most difficult tasks when your energy and willpower are at their highest (e.g., early hours in the day), and lighter activity as the day moves toward night, so you don't burn out.",
        "The app features an intuitive pomodoro timer that syncs across devices, so you can seamlessly access your tasks on the web app as well. This allows users to keep track of what they need to do and plan their day on either mobile or desktop.",
      ],
      bullets: [
        "Schedules tasks around your circadian rhythm, front-loading demanding work into your highest-energy hours.",
        "Pomodoro timer syncs in real time across mobile and web.",
        "Counts down to upcoming events alongside your daily task list.",
        "Plan on one device, execute on another — tasks and progress stay in sync everywhere.",
      ],
    },
    infoArr: [
      {
        title: "What It Does",
        description:
          "A minimalistic mobile and web app for planning your day around pomodoros and your circadian rhythm — scheduling demanding tasks for your highest-energy hours and lighter activity as the day winds down.",
        bullets: [
          "Schedules your most difficult tasks for peak-energy hours and lighter tasks later in the day.",
          "Built-in pomodoro timer to track focused work sessions.",
          "Counts down to upcoming events so nothing sneaks up on you.",
          "Works equally well on mobile or desktop.",
        ],
        imgArr: [],
      },
      {
        title: "How It Works",
        description:
          "Plan your day on your laptop, then tick off tasks as you go from your phone (or vice versa) using an intuitive, Pomofocus-inspired timer that keeps you engaged and motivated to complete your tasks.",
        bullets: [
          "Log in on the web app to plan and organize your day.",
          "Pick up where you left off on mobile, and vice versa — progress stays synced.",
          "A Pomofocus-inspired timer keeps focus sessions structured and motivating.",
        ],
        imgArr: [],
      },
    ],
  },
];

export const featuredProjects = Projects.slice(0, 3);
