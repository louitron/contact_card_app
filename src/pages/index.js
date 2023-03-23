import { ContactCards } from "@/components/ContactCard";
import { NavButtons } from "@/components/NavButtons";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-white w-screen h-screen">
      <NavButtons className="" />
      <ContactCards />
    </div>
  );
}
