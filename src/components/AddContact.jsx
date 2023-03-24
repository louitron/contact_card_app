import { useForm } from "react-hook-form";

export const AddContact = () => {
  const { register, handleSubmit } = useForm();
  const handleSubmitForm = (data) => {
    console.log(data);
  };
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">
              Add Contact
            </h1>
            <p className="mt-2 text-gray-500">
              Fill out the information below to create a new contact
            </p>
          </div>
          <div className="mt-8">
            <form
              action=""
              onSubmit={handleSubmit(handleSubmitForm)}
              className="group"
            >
              <div className="mb-6">
                <label for="name" className="mb-2 block text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  {...register("full_name")} //TAKE NOTE OF THIS!!
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2.5 placeholder-gray-300 shadow shadow-gray-100 focus:border-gray-500 focus:outline-none valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
                  autocomplete="off"
                  required
                  pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <span className="mt-2 hidden text-sm text-red-400">
                  Please enter a name
                </span>
              </div>
              <div className="mb-6">
                <div className="mb-2 flex justify-between">
                  <label for="phone" className="text-sm text-gray-600">
                    Phone Number
                  </label>
                  <a
                    href="#!"
                    tabindex="-1"
                    className="text-sm text-gray-400 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="text"
                  name="phone"
                  id="name"
                  placeholder="Phone Number"
                  className="peer w-full rounded-md border border-gray-300 px-3 py-2.5 placeholder-gray-300 shadow shadow-gray-100 focus:border-gray-500 focus:outline-none valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
                  pattern=".{6,}"
                  required
                />
                <span className="mt-2 hidden text-sm text-red-400">
                  Enter a 10-digit phone number
                </span>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-500 px-3 py-4 text-white focus:bg-indigo-600 focus:outline-none group-invalid:pointer-events-none group-invalid:opacity-70"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
