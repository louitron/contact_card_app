import { CreateContact } from "@/components/CreateContact";
import { NavButtons } from "@/components/NavButtons";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center w-screen min-h-screen bg-green-900">
      <NavButtons />
      <CreateContact />
    </div>
  );
}
