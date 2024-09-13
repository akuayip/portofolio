"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { AllManfess } from "@/components/AllManfess";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { DemoManfess } from "@/components/DemoManfess";

interface Manfess {
  id: string;
  message: string;
  timestamp: string;
}

const Manfess: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [manfessList, setManfessList] = useState<Manfess[]>([]);

  useEffect(() => {
    fetchManfess();
  }, []);

  const submitManfess = async () => {
    if (!message.trim()) {
      alert("Message cannot be empty");
      return;
    }

    try {
      const res = await axios.post("/api/manfess", { message });
      if (res.data.success) {
        setManfessList([res.data.data, ...manfessList]);
        setMessage("");
      }
    } catch (error) {
      console.error("Failed to submit manfess", error);
    }
  };

  const fetchManfess = async () => {
    try {
      const res = await axios.get("/api/manfess");
      setManfessList(res.data.data.reverse());
    } catch (error) {
      console.error("Failed to fetch manfess", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12 md:mt-32 border-none bg-transparent">
      <ParticlesBackground />
      <div className="bg-black/75 shadow-lg p-6 rounded-lg w-full max-w-md mb-10">
        <h1 className="text-2xl font-bold mb-4 text-center">Submit Manfess</h1>
        <textarea
          className="w-full p-3 border rounded mb-4 text-black"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your confession"
        />
        <div className="flex justify-end mb-4">
          <button
            onClick={submitManfess}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
          >
            Submit
          </button>
        </div>
      </div>
      <DemoManfess manfessList={manfessList} />
    </div>
  );
};

export default Manfess;
