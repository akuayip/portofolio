import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

const sosmed = [
  { icon: <IconBrandGithub />, path: "https://github.com/akuayip" },
  { icon: <IconBrandLinkedin />, path: "https://www.linkedin.com/in/arriefrahman/" },
  { icon: <IconBrandInstagram />, path: "https://www.instagram.com/arriefrahman_/" },
];

type SocialProps = {
  containerStyles: string;
  iconStyles: string;
};

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {sosmed.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
