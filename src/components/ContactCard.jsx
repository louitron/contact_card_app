import { useQuery } from "@tanstack/react-query";

const getAllContacts = () => {
  const options = { method: "GET" };

  return fetch(
    "https://assets.breatheco.de/apis/fake/contact/agenda/agenda_2021"
  ).then((response) => response.json());
};

export const ContactCards = () => {
  const { data, isLoading, error } = useQuery(["contacts"], getAllContacts);

  return (
    <div className="relative w-screen flex min-h-screen flex-col justify-center overflow-auto bg-blue-100 py-6 px-5">
      {data &&
        data.map((contact, index) => {
          return (
            <div key={index} className="my-4">
              <div className="absolute inset-0 bg-center "></div>
              <div className="group relative mx-auto flex h-48 w-full max-w-md cursor-pointer flex-col justify-center overflow-hidden rounded-lg bg-white px-5 py-0 shadow-xl ring-1 ring-gray-900/5 [@media(hover:hover)]:justify-end [@media_not_(hover:hover)]:py-5">
                <div className="transition-all ease-out">
                  <h2 className="mt-2 text-lg font-semibold text-gray-800">
                    {contact.full_name}
                  </h2>
                  <p className="line-clamp-2 w-screen mt-1 text-gray-500">
                    Phone Number: {contact.phone}
                  </p>
                  <p className="line-clamp-2 w-screen mt-1 text-gray-500">
                    Email: {contact.email}
                  </p>
                  <p className="line-clamp-2 w-screen mt-1 text-gray-500">
                    Address: {contact.address}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
    
  );
};
