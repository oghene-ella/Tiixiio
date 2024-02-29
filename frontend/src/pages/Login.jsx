import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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

export const Login = () => {
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
    <div className="flex flex-col items-center justify-center container max-w-[400px] my-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-center text-3xl font-semibold capitalize">
          Log in
        </h1>
        <p className=" text-center text-gray-400 font-light ">
          Enter your credentials to create your account
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1 relative">
                <FormLabel className="uppercase ">Email Address</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type="email"
                      className="w-full"
                      placeholder="Enter Email"
                      {...field}
                    />
                    <Mail
                      size={18}
                      color="#667185"
                      className="absolute right-2 top-3 "
                    />
                  </div>
                </FormControl>
                <FormMessage className="absolute" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-1 relative">
                <FormLabel className="uppercase ">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={passwordType ? "password" : "text"}
                      className="w-full"
                      placeholder="Enter Password"
                      {...field}
                    />
                    <EyeComponent
                      size={18}
                      color="#667185"
                      className="absolute right-2 top-3 "
                      onClick={() => {
                        setPasswordType((prev) => !prev);
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage className="absolute" />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className=" flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="!m-0 font-medium text-xs">
                    Remember me for 30 days
                  </FormLabel>
                </FormItem>
              )}
            />
            <Link className="text-xs text-gray-500 font-medium hover:underline duration-150">
              Forgot Password?
            </Link>
          </div>
          <Button className="w-full bg-[#EB5017] hover:bg-[#EB5017]/50 active:bg-[#EB5017]/20 ">
            Log into Account
          </Button>

          <div className="flex items-center gap-2">
            <hr className="w-full" />{" "}
            <span className="text-xs text-gray-400">Or</span>
            <hr className="w-full" />
          </div>
        </form>
      </Form>
      <div className="w-full space-y-4">
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
        <div className="text-xs text-center">
          Are you new here?{" "}
          <Link className="text-[#6358E1]">Create Account</Link>
        </div>
      </div>
    </div>
  );
};
