import { ContactCards } from "@/components/ContactCard";
import { NavButtons } from "@/components/NavButtons";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center dark:bg-slate-400 bg-white w-screen min-h-screen">
      <NavButtons />
      <ContactCards />
    </div>
  );
}
