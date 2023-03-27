import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { AiFillContacts } from "react-icons/ai";
import { RiUserAddFill } from "react-icons/ri";
import { GoSignOut } from "react-icons/go";
import Link from "next/link";

export const NavButtons = () => {
  const supabaseClient = useSupabaseClient();
  return (
    <div class="flex overflow-visible relative z-10 gap-5 justify-center items-center">
      <Link href="/">
        <button
          ontouchstart=""
          class="group flex items-center justify-center rounded-lg bg-cyan-700 px-4 py-3 shadow-[0px_0px_20px_rgba(0,255,0,1),10px_10px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-1px_-1px_5px_rgba(0,255,0,0.5),inset_1px_1px_5px_rgba(0,255,0,0.5)]"
        >
          <span class="sr-only">Home</span>
          <AiFillContacts className="text-white scale-150" />
        </button>
      </Link>

      <Link href="/components/ContactCard">
        <Link href="/createContact">
          <button
            ontouchstart=""
            class="group flex items-center justify-center rounded-lg bg-cyan-700 px-4 py-3 shadow-[0px_0px_20px_rgba(0,255,0,1),10px_10px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-1px_-1px_5px_rgba(0,255,0,0.5),inset_1px_1px_5px_rgba(0,255,0,0.5)]"
          >
            <span class="sr-only">Account</span>
            <RiUserAddFill className="text-white scale-125" />
          </button>
        </Link>
      </Link>
      <button
        onClick={() => {
          supabaseClient.auth.signOut();
        }}
        ontouchstart=""
        class="group flex items-center justify-center rounded-lg bg-cyan-700 px-4 py-3 shadow-[0px_0px_20px_rgba(0,255,0,1),10px_10px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-1px_-1px_5px_rgba(0,255,0,0.5),inset_1px_1px_5px_rgba(0,255,0,0.5)]"
      >
        <span class="sr-only">Explore</span>
        <GoSignOut className="text-white scale-150" />
      </button>
    </div>
  );
};
