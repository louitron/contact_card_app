import { AiFillContacts } from "react-icons/ai";
import { RiUserAddFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";

export const NavButtons = () => {
  return (
    <div class="relative z-10 flex justify-center overflow-auto items-center gap-5">
      <button
        ontouchstart=""
        class="group flex items-center justify-center rounded-lg bg-slate-200 px-4 py-3 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)]"
      >
        <span class="sr-only">Explore</span>
        <AiFillHome className="scale-150 text-gray-500" />
      </button>
      <button
        ontouchstart=""
        class="group flex items-center justify-center rounded-lg bg-slate-200 px-4 py-3 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)]"
      >
        <span class="sr-only">Home</span>
        <AiFillContacts className="scale-150 text-gray-500" />
      </button>
      <button
        ontouchstart=""
        class="group flex items-center justify-center rounded-lg bg-slate-200 px-4 py-3 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)]"
      >
        <span class="sr-only">Account</span>
        <RiUserAddFill className="text-gray-500 scale-125" />
      </button>
    </div>
  );
};
