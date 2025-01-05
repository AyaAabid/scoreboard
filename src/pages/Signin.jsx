import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

 export const Signin = () => {
  const navigate = useNavigate();
  const Register = () => {
    navigate("../../pages/Signup");
  };
  const Signin = () => {
    navigate("../../pages/Dashboard");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 drop-shadow-lg">
      <Card color="transparent" shadow={false}>
        {/* Header  */}
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>

        {/* Form  */}
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>
          <Button className="mt-6 bg-[#88B388]" fullWidth onClick={Signin}>
            Sign In
          </Button>
          <Typography
            color="gray font-medium"
            className="mt-4 text-center font-normal"
          >
            <button onClick={() =>{navigate("../../pages/Forgot")}} className="font-semibold text-gray-900">
              Forgot your password?
            </button>
          </Typography>
          <Typography
            color="gray font-medium"
            className="mt-4 text-center font-normal"
          >
            You don't have an account?{" "}
            <button onClick={Register} className="font-semibold text-gray-900">
              Sign Up
            </button>
          </Typography>
        </form>
      </Card>
    </div>
  );
};