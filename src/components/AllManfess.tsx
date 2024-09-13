import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import axios from "axios";

interface Manfess {
  id: string;
  message: string;
  timestamp: string;
  name?: string;
}

const ReviewCard = ({
  name = "Anonym",
  body,
}: {
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border-none p-4",

        "border-gray-950/[.1] bg-black hover:bg-gray-900",

        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-black">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

// Komponen AllManfess untuk menampilkan daftar manfess
export function AllManfess({ manfessList }: { manfessList: Manfess[] }) {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl border-none">
      <Marquee pauseOnHover className="[--duration:20s]">
        {manfessList.map((manfess) => (
          <ReviewCard
            key={manfess.id}
            name={manfess.name || "Anonym"}
            body={manfess.message}
          />
        ))}
      </Marquee>
    </div>
  );
}

// Komponen utama untuk mengelola state manfess dan submit
const ManfessApp: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [manfessList, setManfessList] = useState<Manfess[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch manfess saat halaman pertama kali dibuka
  useEffect(() => {
    fetchManfess();
  }, []);

  // Mengirim manfess baru ke backend
  const submitManfess = async () => {
    if (!message.trim()) {
      alert("Message cannot be empty");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await axios.post("/api/manfess", { message });
      if (res.data.success) {
        // Tambahkan manfess baru ke daftar secara aman
        setManfessList((prevList) => [...prevList, res.data.data]);
        setMessage(""); // Kosongkan input setelah submit
      }
    } catch (error) {
      setError("Failed to submit manfess. Please try again.");
      console.error("Failed to submit manfess", error);
    } finally {
      setLoading(false);
    }
  };

  // Mengambil daftar manfess dari backend
  const fetchManfess = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("/api/manfess");
      setManfessList(res.data.data); // Set manfess list dari response API
    } catch (error) {
      setError("Failed to fetch manfess. Please try again.");
      console.error("Failed to fetch manfess", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen border-none">
      <div className="bg-black/75 shadow-lg p-6 rounded-lg w-full max-w-md mb-10">
        <h1 className="text-2xl font-bold mb-4 text-center">Submit Manfess</h1>
        <textarea
          className="w-full p-3 border rounded mb-4 text-black"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your confession"
        />
        <div className="flex justify-between mb-4">
          <button
            onClick={submitManfess}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <AllManfess manfessList={manfessList} />
      )}
    </div>
  );
};

export default ManfessApp;
