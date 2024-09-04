"use client";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+62 82280589373",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "arriefrahmann@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lampung",
  },
];

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  // Initialize EmailJS with the public key
  useEffect(() => {
    emailjs.init("pMORuNZfysLCQQ_cp");
  }, []);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const templateParams = {
      firstname,
      lastname,
      email,
      phone,
      service,
      message,
    };

    emailjs
      .send(
        "service_xhvrk3g", 
        "template_2ymhwok",
        templateParams
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Pesan telah dikirim!");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Terjadi kesalahan dalam mengirim pesan.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 relative" // Tambahkan posisi relatif
    >
      <ParticlesBackground /> 
      <div className="container mx-auto relative z-10"> 
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-accent text-4xl">Let's Work Together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus distinctio tempore culpa sed aliquam ipsum aperiam
                quidem libero voluptatum veritatis soluta, omnis ducimus quos
                sapiente, impedit dolor iste voluptate quaerat!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="text-white"
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  className="text-white"
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-white"
                />
                <Input
                  type="text"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-white"
                />
              </div>
              {/* select */}
              <Select onValueChange={(value) => setService(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {/* btn */}
              <Button
                type="submit"
                className="max-w-40 rounded-full text-black bg-accent hover:bg-white"
              >
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center ">
                      <div>{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white">{item.title}</p>
                      <h3 className="text-xl text-white">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
