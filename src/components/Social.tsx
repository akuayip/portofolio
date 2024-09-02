import Link from "next/link";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

const sosmed = [
  { icon: <IconBrandGithub />, path: "" },
  { icon: <IconBrandLinkedin />, path: "" },
  { icon: <IconBrandInstagram />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {sosmed.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
