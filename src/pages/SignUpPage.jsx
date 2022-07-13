import useToggleValue from "../hooks/useToggleValue";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import Label from "../components/label";
import Input from "../components/input";
import IconEyeToggle from "../components/icons/IconEyeToggle";
import FormGroup from "../components/common/FormGroup";
import CheckBox from "../components/checkbox";
import Button from "../components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IconGoogle } from "../constants/importImages";
const schema = yup.object({
  fullname: yup.string().required("Please enter your full name"),
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Password must be 8 character "),
});
const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const { value: term, onToggleValue: onToggleTerm } = useToggleValue(false);
  const { value: showPassword, onToggleValue: onShowPassword } =
    useToggleValue(false);
  const handleSigUp = (values) => {
    console.log("handleSigUp ~ values", values);
  };
  //term
  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="text-center text-xs lg:text-sm font-light text-text3 mb-6 lg:mb-8 ">
        Already have an account?{" "}
        <Link
          to="/sign-in"
          className="text-primary font-medium lg:underline dark:text-primary"
        >
          Sign Up{" "}
        </Link>
      </p>
      <button className="flex items-center justify-center py-3 border border-strock dark:border-darkStroke rounded-xl gap-x-3 mb-5 w-full">
        <img srcSet={IconGoogle + " 2x"} alt="google" />
        <span className="text-text2 dark:text-white font-semibold text-base">
          Sign up with google
        </span>
      </button>
      <p className="text-center text-xs text-normal lg:text-sm text-text2 lg:dark:text-white mb-4 lg:mb-8 cursor-pointer">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSigUp)} noValidate>
        <FormGroup>
          <Label htmlFor={"fullname"}>Full Name*</Label>
          <Input
            control={control}
            name="fullname"
            id="fullname"
            placeholder="Jhon Doe"
            error={errors.fullname?.message}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor={"email"}>Email*</Label>
          <Input
            control={control}
            name="email"
            id="email"
            inputType={"email"}
            error={errors.email?.message}
            placeholder="example@gmail.com"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor={"password"}>Password *</Label>
          <Input
            type={showPassword ? "text" : "password"}
            control={control}
            name="password"
            error={errors.password?.message}
            id="password"
            placeholder="Create a password"
          >
            <IconEyeToggle
              onClick={onShowPassword}
              open={showPassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <CheckBox name="term" checked={term} onClick={onToggleTerm}>
            <p className="text-sm text-text2 dark:text-text3">
              I agree to the{" "}
              <span className="text-secondary lg:underline">Terms of Use</span>{" "}
              and have read and understand the{" "}
              <span className="text-secondary lg:underline">
                Privacy policy
              </span>
              .
            </p>
          </CheckBox>
        </FormGroup>
        <Button type="submit" kind="primary" className={"w-full"}>
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
