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
      <div className="flex flex-col justify-start items-center dark:bg-black bg-gray-800 w-screen min-h-screen">
        <div className="mt-10">
          <NavButtons />
          <ContactCards />
        </div>
      </div>
    );
  }
}
