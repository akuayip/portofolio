import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

const sosmed = [
  { icon: <IconBrandGithub size={34} />, path: "" },
  { icon: <IconBrandLinkedin size={34} />, path: "" },
  { icon: <IconBrandInstagram size={34} />, path: "" },
];

const Sosmed = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-2">
      {sosmed.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className="text-white hover:text-accent "
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Sosmed;
