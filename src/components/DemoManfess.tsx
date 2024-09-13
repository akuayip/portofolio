import { HoverEffect } from "../components/ui/card-hover-effect";

interface Manfess {
  id: string;
  message: string;
  timestamp: string;
  name?: string;
}

export function DemoManfess({ manfessList }: { manfessList: Manfess[] }) {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect
        items={manfessList.map((manfess) => ({
          title: manfess.name || "Anonym",  // Gunakan 'Anonym' jika nama tidak ada
          description: manfess.message,     // Menampilkan pesan sebagai deskripsi
          timestamp: `${new Date(manfess.timestamp).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          })}`,
          link:"#",                        // Gunakan '#' atau sesuaikan dengan kebutuhan
        }))}
      />
    </div>
  );
}
