import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export function CreateContact() {
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  const postContact = (payload) => {
    return supabaseClient.from("contact_information").insert({
      full_name: payload.full_name,
      email: payload.email,
      phone: payload.phone,
      address: payload.address,
      user_id: user.id,
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const queryClient = useQueryClient();
  ``;
  const { mutate, isLoading } = useMutation({
    mutationFn: postContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contact_information"] });
      router.push("/");
    },
  });

  const handleSubmitForm = (data) => {
    mutate(data);
  };

  return (
    <div className="flex overflow-visible relative flex-col justify-center px-4 py-6 w-screen min-h-screen sm:py-12">
      <div className="relative px-6 pt-10 pb-8 mx-auto w-full max-w-md bg-cyan-800 ring-1 shadow-[-2px_-2px_20px_rgba(0,255,0,1),3px_3px_10px_rgba(0,0,0,0.2)]  ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white">New Contact</h1>
          </div>
          <div className="mt-8">
            <form onSubmit={handleSubmit(handleSubmitForm)}>
              <div className="relative mt-5">
                <label
                  htmlFor="full_name"
                  className="absolute top-0 left-0 px-1 ml-3 text-sm text-gray-500 bg-white rounded transition-all duration-100 ease-in-out transform origin-left -translate-y-1/2 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Full Name:
                </label>
                <input
                  {...register("full_name", { required: true })}
                  type="text"
                  name="full-name"
                  id="full_name"
                  placeholder="Full Name"
                  className="px-3 py-3 w-full rounded-md border border-gray-300 shadow peer shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autoComplete="off"
                />
                {errors.full_name && <div className="error">Required</div>}
              </div>
              <div className="relative mt-5">
                <label
                  htmlFor="email"
                  className="absolute top-0 left-0 px-1 ml-3 text-sm text-gray-500 bg-white rounded transition-all duration-100 ease-in-out transform origin-left -translate-y-1/2 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Email:
                </label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="px-3 py-3 w-full rounded-md border border-gray-300 shadow peer shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
              </div>

              <div className="relative mt-5">
                <label
                  htmlFor="phone"
                  className="absolute top-0 left-0 px-1 ml-3 text-sm text-gray-500 bg-white rounded transition-all duration-100 ease-in-out transform origin-left -translate-y-1/2 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Phone:
                </label>
                <input
                  {...register("phone", {
                    pattern: /1?-?\(?[0-9]{3}[\-\)][0-9]{3}-[0-9]{4}/,
                  })}
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  className="px-3 py-3 w-full rounded-md border border-gray-300 shadow peer shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
              </div>
              <div className="relative mt-5">
                <label
                  htmlFor="address"
                  className="absolute top-0 left-0 px-1 ml-3 text-sm text-gray-500 bg-white rounded transition-all duration-100 ease-in-out transform origin-left -translate-y-1/2 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Address:
                </label>
                <input
                  {...register("address")}
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  className="px-3 py-3 w-full rounded-md border border-gray-300 shadow peer shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
              </div>
              <div className="my-6">
                <button
                  type="submit"
                  className="px-3 py-4 w-full text-white bg-black rounded-md focus:bg-neutral-800 focus:outline-none"
                  disabled={isLoading}
                >
                  {isLoading ? "Saving contact" : "Save Contact"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
