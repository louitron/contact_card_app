import {
  SupabaseClient,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export const Login = () => {
  const supabaseClient = useSupabaseClient();

  return (
    <div className="flex flex-col justify-start items-center pt-4 w-screen h-screen bg-green-900">
      <div className="flex flex-col justify-start items-center w-1/2 bg-cyan-800 rounded-3xl border-2">
        <div className="text-4xl text-white">Welcome!</div>
        <div className="w-1/3 text-white">
          <Auth
            supabaseClient={supabaseClient}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    inputBackground: "white",
                    inputLabelText: "lightgray",
                  },
                },
              },
            }}
            providers={[]}
          />
        </div>
      </div>
    </div>
  );
};
