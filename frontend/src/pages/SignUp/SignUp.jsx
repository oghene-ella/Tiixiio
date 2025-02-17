import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../../config";
import { FcGoogle } from "react-icons/fc";
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
import { User } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import { EyeIcon, EyeOff } from "lucide-react";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string(),
  rememberMe: z.boolean().default(false).optional(),
});

const SignUp = () => {
  const [passwordType, setPasswordType] = useState(true);
  const EyeComponent = passwordType ? EyeOff : EyeIcon;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/signup`, data);
      //const response = await axios.post(`https://tiixiio.onrender.com/auth/signup`, data);
      console.log(response.data);
      if (response.status === 201) {
        toast.success("SignUp successful, Redirecting to the login page!");
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }  

  return (
    <section
      className="bg-login_signUp_url w-full h-max sm:h-screen flex items-center justify-center">
        <section className="bg-white_bg lg:w-[45%] h-fit py-16 rounded-xl flex justify-center items-center">
          <main className="w-10/12 md:9/12 lg:w-7/12 flex flex-col gap-10">
            <header className="text-center flex flex-col gap-3"> 
              <h1 className="text-header_black font-medium text-4xl">Sign Up </h1>
              <p className="text-light_gray font-light text-lg">Enter your Credentials to access your account</p>
            </header>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 w-full"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-1 relative flex flex-col gap-4">
                      <FormLabel className="uppercase text-header_black font-normal">Username</FormLabel>
                      <FormControl>
                        <div className="relative flex items-center">
                          <Input
                            type="text"
                            className="w-full py-7 shadow"
                            placeholder="Enter Username"
                            {...field}
                          />
                          <User
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
                            placeholder="Repeat your Password"
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
                <Button className="w-full bg-green-800 hover:bg-green-800/50 active:bg-green-800/20">
                  Sign Up
                </Button>

                <div className="flex items-center gap-2">
                  <hr className="w-full bg-green-100" />{" "}
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

              <section className="text-base text-center text-light_gray font-light flex gap-2 justify-center">
                Have an account?{" "}
                <Link className="text-[#6358E1] font-medium"
                to="/login">Login</Link>
              </section>
            </section>
          </main>
        </section>
    </section>
  );
};

export default SignUp;