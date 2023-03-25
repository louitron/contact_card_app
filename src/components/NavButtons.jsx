import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { AiFillContacts } from "react-icons/ai";
import { RiUserAddFill } from "react-icons/ri";
import { GoSignOut } from "react-icons/go";
import Link from "next/link";

export const NavButtons = () => {
  const supabaseClient = useSupabaseClient();
  return (
    <div class="flex overflow-visible relative z-10 gap-5 justify-center items-center">
      <button
        ontouchstart=""
        class="group flex items-center justify-center rounded-lg bg-slate-200 px-4 py-3 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)]"
      >
        <span class="sr-only">Home</span>
        <AiFillContacts className="text-gray-500 scale-150" />
      </button>
      <Link href="/components/ContactCard">
        <Link href="/createContact">
          <button
            ontouchstart=""
            class="group flex items-center justify-center rounded-lg bg-slate-200 px-4 py-3 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)]"
          >
            <span class="sr-only">Account</span>
            <RiUserAddFill className="text-gray-500 scale-125" />
          </button>
        </Link>
      </Link>
      <button
        onClick={() => {
          supabaseClient.auth.signOut();
        }}
        ontouchstart=""
        class="group flex items-center justify-center rounded-lg bg-slate-200 px-4 py-3 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)]"
      >
        <span class="sr-only">Explore</span>
        <GoSignOut className="text-gray-500 scale-150" />
      </button>
    </div>
  );
};
