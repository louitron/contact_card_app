import {
  SupabaseClient,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export const Login = () => {
  const supabaseClient = useSupabaseClient();

  return (
    <div className="h-screen w-screen md:max-h-screen-md md:max-h-screen-md  flex flex-col justify-center items-center">
      <div className="text-4xl">Welcome!</div>
      <div className="w-1/3">
        <Auth
          supabaseClient={supabaseClient}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
        />
      </div>
    </div>
  );
};
