import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "Core language for AI/data work, from CNN model training to fault and sentiment analysis.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "Javascript",
    description:
      "Build interactive frontend and backend logic across web and mobile projects.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Flutter",
    description:
      "Ship cross-platform mobile apps with a single codebase, from productivity planners to fitness trackers.",
    rating: 5,
    icon: Icons.flutter,
  },
  {
    name: "Git",
    description:
      "Version control and collaborative workflows across team and open-source projects.",
    rating: 5,
    icon: Icons.git,
  },
  {
    name: "AWS",
    description:
      "Certified Cloud Practitioner with hands-on experience across Lambda, DynamoDB, RDS, Cognito, and AppSync.",
    rating: 4,
    icon: Icons.amazonaws,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Django",
    description:
      "Build secure backend APIs and data models with Python's batteries-included web framework.",
    rating: 4,
    icon: Icons.django,
  },
  {
    name: "TensorFlow",
    description:
      "Design and train CNNs for computer vision tasks like plant disease classification.",
    rating: 4,
    icon: Icons.tensorflow,
  },
  {
    name: "Keras",
    description:
      "High-level API for building and fine-tuning deep learning models, including transfer learning.",
    rating: 4,
    icon: Icons.keras,
  },
  {
    name: "Linux",
    description:
      "Install, maintain, and administer Linux systems and services in production environments.",
    rating: 4,
    icon: Icons.linux,
  },
  {
    name: "Docker",
    description:
      "Containerize and run applications consistently across development and deployment environments.",
    rating: 3,
    icon: Icons.docker,
  },
  {
    name: "Figma",
    description:
      "Design high-fidelity UI prototypes and translate them into functioning interfaces.",
    rating: 4,
    icon: Icons.figma,
  },
  {
    name: "Adobe XD",
    description:
      "Prototype and iterate on user-facing designs before implementation.",
    rating: 3,
    icon: Icons.adobexd,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side to power full-stack web applications.",
    rating: 3,
    icon: Icons.nodejs,
  },
  {
    name: "Redux",
    description:
      "Manage app state predictably across React and React Native applications.",
    rating: 3,
    icon: Icons.redux,
  },
  {
    name: "MongoDB",
    description:
      "Store and query data with a flexible, scalable NoSQL database.",
    rating: 3,
    icon: Icons.mongodb,
  },
  {
    name: "MySQL",
    description:
      "Design and manage relational databases for data-driven applications.",
    rating: 3,
    icon: Icons.mysql,
  },
  {
    name: "SQLite",
    description:
      "Embed lightweight relational storage directly inside mobile applications.",
    rating: 3,
    icon: Icons.sqlite,
  },
  {
    name: "Dart",
    description: "The language behind Flutter, used to build native-feeling cross-platform apps.",
    rating: 4,
    icon: Icons.dart,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
