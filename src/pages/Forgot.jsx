import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export const Forgot = () => {
    const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 drop-shadow-lg w-full">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Forgot your password ?
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your email below to receive password reset instructions.
        </Typography>
        <form className="mt-20 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" />
          </div>
          <Button  onClick={() =>{navigate("../../pages/ResetPassword")}} className="mt-6 bg-[#88B388]" fullWidth>
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};
