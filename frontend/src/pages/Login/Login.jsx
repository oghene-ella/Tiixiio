import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import { EyeIcon, EyeOff } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string(),
  rememberMe: z.boolean().default(false).optional(),
});

const Login = () => {
  const [passwordType, setPasswordType] = useState(true);
  const EyeComponent = passwordType ? EyeIcon : EyeOff;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <section
      className="bg-login_signUp_url w-full h-max sm:h-screen flex items-center justify-center">
        <section className="bg-white_bg lg:w-[45%] h-fit py-16 rounded-xl flex justify-center items-center">
          <main className="w-10/12 md:9/12 lg:w-7/12 flex flex-col gap-10">
            <header className="text-center flex flex-col gap-3"> 
              <h1 className="text-header_black font-medium text-4xl">Log In </h1>
              <p className="text-light_gray font-light text-lg">Enter your credentials to access your account</p>
            </header>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 w-full"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-1 relative flex flex-col gap-4">
                      <FormLabel className="uppercase text-header_black font-normal">Email Address</FormLabel>
                      <FormControl>
                        <div className="relative flex items-center">
                          <Input
                            type="email"
                            className="w-full py-7 shadow"
                            placeholder="Enter Email"
                            {...field}
                          />
                          <Mail
                            size={18}
                            color="#667185"
                            className="absolute right-4 top-5 "
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="absolute py-2" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-1 relative flex flex-col gap-4">
                      <FormLabel className="uppercase text-header_black font-normal ">Password</FormLabel>
                      <FormControl>
                        <div className="relative flex items-center">
                          <Input
                            type={passwordType ? "password" : "text"}
                            className="w-full py-7 shadow"
                            placeholder="Enter Password"
                            {...field}
                          />
                          <EyeComponent
                            size={18}
                            color="#667185"
                            className="absolute right-4 top-5 "
                            onClick={() => {
                              setPasswordType((prev) => !prev);
                            }}
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="absolute py-2" />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className=" flex items-center gap-4 ">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border border-light_gray"
                          />
                        </FormControl>
                        <FormLabel className="!m-0 text-sm text-header_black font-normal">
                          Remember me for 30 days
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  <Link className="text-xs text-gray-500 font-medium hover:underline duration-150">
                    Forgot Password?
                  </Link>
                </div>
                <Button className="w-full bg-green-700 hover:bg-green-700/50 active:bg-green-700/20">
                  Log into Account
                </Button>

                <div className="flex items-center gap-2">
                  <hr className="w-full bg-red-100" />{" "}
                  <span className="text-xs text-gray-400">Or</span>
                  <hr className="w-full" />
                </div>
              </form>
            </Form>

            <section className="w-full space-y-4">
              <Button
                variant="outline"
                className="w-full gap-4 items-center font-semibold text-base"
              >
                <FcGoogle size={20} />
                Continue With Google
              </Button>

              <Button
                variant="outline"
                className="w-full gap-4 items-center font-semibold text-base"
              >
                <RiTwitterFill color="#1DA1F2" size={20} />
                Continue With Twitter
              </Button>

              <section className="text-base text-center text-light_gray font-light flex gap-2 justify-center">
                Are you new here?{" "}
                <Link className="text-[#6358E1] font-medium"
                to="/sign_up">Create Account</Link>
              </section>
            </section>
          </main>
        </section>
    </section>
  );
};

export default Login;