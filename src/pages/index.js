import { ContactCards } from "@/components/ContactCard";
import { NavButtons } from "@/components/NavButtons";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Login } from "@/components/Login";

export default function Home() {
  const user = useUser();

  if (!user) {
    return (
      <div>
        <Login />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-start items-center w-screen min-h-screen bg-green-900">
        <div className="px-10 mt-5 w-full">
          <NavButtons />
          <ContactCards />
        </div>
      </div>
    );
  }
}
