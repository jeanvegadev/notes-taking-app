import coffee from "@/public/assets/coffee.svg";
import Image from "next/image";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-brown-700">
      {/* <img src={coffee} className="w-60 mb-4" /> */}
      <Image src={coffee} alt="coffee" className="notes-image" />
      <p className="text-xl">
        I'm just here waiting for your charming notes...
      </p>
    </div>
  );
}
