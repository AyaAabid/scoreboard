import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Typography, Input, Button } from "@material-tailwind/react";

export const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 drop-shadow-lg w-full">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Reset your password
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your new password below.
          </Typography>
          <form className="mt-20 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="New Password" />
              <Input size="lg" label="Confirm New Password" />
            </div>
            <Button
              onClick={() => {
                navigate("/");
              }}
              className="mt-6 bg-[#88B388]"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
};
