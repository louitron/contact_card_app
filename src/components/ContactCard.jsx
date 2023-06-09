import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

export const ContactCards = () => {
  const supabaseClient = useSupabaseClient();
  const getAllContacts = () => {
    return supabaseClient
      .from("contact_information")
      .select("*")
      .then((response) => response.data);
  };

  const queryClient = useQueryClient(); // Add this line to get the queryClient instance

  const handleFavorites = async (contactId, is_favorite) => {
    console.log("contactId:", contactId, "is_favorite:", is_favorite);

    const { data: beforeUpdate } = await supabaseClient
      .from("contact_information")
      .select("*")
      .eq("id", contactId)
      .single();
    console.log("Row data before update:", beforeUpdate);

    const { data: updatedData, error: updateError } = await supabaseClient
      .from("contact_information")
      .update({ is_favorite: !is_favorite })
      .eq("id", contactId);

    const { data: afterUpdate } = await supabaseClient
      .from("contact_information")
      .select("*")
      .eq("id", contactId)
      .single();
    console.log("Row data after update:", afterUpdate);

    if (updateError) {
      console.error("Error updating favorite status:", updateError);
    } else {
      queryClient.invalidateQueries("contact_information");
    }
  };

  const { data, isLoading, error } = useQuery(
    ["contact_information"],
    getAllContacts
  );

  return (
    <div className="mt-10 p-4 bg-gray-800 border border-gray-200 rounded-lg  sm:p-8 dark:border-gray-700 shadow-[-2px_-2px_20px_rgba(0,255,0,1),3px_3px_10px_rgba(0,0,0,0.2)] ">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          My Contacts
        </h5>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="pl-0 divide-y divide-gray-200 dark:divide-gray-700"
        >
          {data &&
            data.map((contacts, index) => {
              return (
                <li key={index} className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="mb-1 text-sm font-medium text-gray-900 truncate dark:text-white">
                        {contacts.full_name}
                      </p>
                      <p className="mb-1 text-sm text-gray-500 truncate dark:text-gray-400">
                        phone: {contacts.phone}
                      </p>
                      <p className="mb-1 text-sm text-gray-500 truncate dark:text-gray-400">
                        email: {contacts.email}
                      </p>
                      <p className="mb-1 text-sm text-gray-500 truncate dark:text-gray-400">
                        address: {contacts.address}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      PIC{/* INSERT PICTURE HERE */}
                    </div>
                    <div className="text-white scale-150">
                      <button
                        onClick={() =>
                          handleFavorites(contacts.id, contacts.is_favorite)
                        }
                      >
                        <AiFillStar />
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
