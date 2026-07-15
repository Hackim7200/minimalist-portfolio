import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "barnet-hill-academy",
    position: "IT Support Specialist",
    company: "Barnet Hill Academy",
    location: "London, UK",
    startDate: new Date("2025-04-01"),
    endDate: "Present",
    description: [
      "Configure and maintain network infrastructure including routers, switches, patch panels, access points, and DHCP servers.",
      "Implement static/dynamic IP addressing and a Smoothwall firewall for secure, filtered internet access.",
      "Install and maintain Windows/Linux systems, networked printers, shared storage, and IP phone systems.",
      "Manage virtual servers via Hyper-V Manager, providing RDP remote access and Tailscale VPN connectivity.",
    ],
    achievements: [
      "Configured network infrastructure end-to-end: routers, switches, patch panels, access points, and DHCP servers.",
      "Implemented IP addressing (static/dynamic) and a Smoothwall firewall to secure and filter internet access for the school.",
      "Installed and maintained Windows/Linux OS, networked printers, shared storage, and IP phone systems.",
      "Managed virtual servers via Hyper-V Manager, providing secure RDP remote access and Tailscale VPN connectivity.",
      "Delivered technical support across the school, troubleshooting diverse IT systems in a live educational environment.",
    ],
    skills: ["Linux"],
    logo: "/logo.png",
  },
  {
    id: "square-house-technology",
    position: "Software Developer (Internship)",
    company: "Square House Technology",
    location: "United Kingdom",
    startDate: new Date("2022-09-01"),
    endDate: new Date("2023-07-01"),
    description: [
      "Worked with a small development team to maintain and improve an internal web application.",
      "Fixed bugs and made frontend and backend improvements under the guidance of senior engineers.",
      "Gained hands-on experience with AWS and Jira, and learned the basics of application deployment.",
    ],
    achievements: [
      "Fixed bugs and shipped small frontend and backend improvements to an internal web application under senior engineer guidance.",
      "Gained hands-on experience with AWS and Jira, and learned the basics of application deployment.",
      "Reviewed other developers' code, learning the team's coding standards and best practices.",
      "Attended daily stand-ups and contributed to documentation, improving code readability through refactoring.",
    ],
    skills: ["AWS", "Git"],
    logo: "/logo.png",
  },
  {
    id: "ikea-wembley",
    position: "Customer Services Specialist & Shift Coordinator",
    company: "IKEA Wembley",
    location: "Wembley, London, UK",
    startDate: new Date("2021-06-01"),
    endDate: "Present",
    description: [
      "Primary point of contact for 50+ customer interactions daily across phone, email, and in person.",
      "Resolve delivery, returns, and product quality issues via the CRM system, escalating to specialist teams when needed.",
      "Coordinate shift-based staff duties and process transactions on POS systems.",
    ],
    achievements: [
      "Handled 50+ customer interactions daily across phone, email, and in person as the primary point of contact.",
      "Resolved delivery, returns, and product quality issues through the CRM system, escalating to specialist teams when needed.",
      "Coordinated shift-based staff duties, ensuring timely task completion and adherence to service standards.",
      "Contributed to a customer support knowledge base, documenting FAQs and troubleshooting guides that reduced repeat tickets by 15%.",
    ],
    skills: [],
    logo: "/logo.png",
  },
];
