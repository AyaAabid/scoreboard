import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const Register = () => {
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 drop-shadow-lg">
      <Card color="transparent" shadow={false}>
        {/* Header  */}
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        {/* Form  */}
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" />
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6 bg-[#88B388]" fullWidth onClick={Register}>
            Register
          </Button>
          <Typography
            color="gray font-medium"
            className="mt-4 text-center font-normal"
          >
            Already have an account?{" "}
            <button onClick={Register} className="font-semibold text-gray-900">
              Sign In
            </button>
          </Typography>
        </form>
      </Card>
    </div>
  );
};
