import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Hackim7200",
    icon: Icons.gitHub,
    link: "https://github.com/Hackim7200",
  },
  {
    name: "LinkedIn",
    username: "Hikmatullah Hakim",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/hikmatullah-hakim-02abab221/",
  },
  {
    name: "Gmail",
    username: "hikmathakim7200",
    icon: Icons.gmail,
    link: "mailto:hikmathakim7200@gmail.com",
  },
];
