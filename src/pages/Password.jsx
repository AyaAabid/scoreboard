import React from "react";
import { KeyIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import {
  Card,
  Button,
  CardFooter,
  Dialog,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import PinInput from "react-pin-input";

const navigation = [
  {
    name: "Account",
    href: "../../pages/EditProfile",
    icon: UserCircleIcon,
    current: false,
  },
  {
    name: "Password",
    href: "../../pages/Password",
    icon: KeyIcon,
    current: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Password = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Form submitted");
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <div className="flex items-center justify-center h-screen mr-24 ml-24">
      <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3 mb-96 mr-2 w-40">
        <nav className="space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-white text-[#004d40] hover:text-[#004d40] hover:bg-white"
                  : "text-gray-900 hover:text-gray-900 hover:bg-gray-50",
                "group rounded-md px-3 py-2 flex items-center text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-[#004d40] group-hover:text-[#004d40]"
                    : "text-gray-400 group-hover:text-gray-500",
                  "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                )}
                aria-hidden="true"
              />
              <span className="truncate">{item.name}</span>
            </a>
          ))}
        </nav>
      </aside>
      <div className="w-full">
        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9 mb-24">
          <form onSubmit={handleSubmit} method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Password Change
                  </h3>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="current-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Current password
                  </label>
                  <input
                    type="password"
                    name="current-password"
                    id="current-password"
                    autoComplete="current-password"
                    className="mt-1 block w-80 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#004d40] focus:border-[#004d40] sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="new-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    New password
                  </label>
                  <input
                    type="password"
                    name="new-password"
                    id="new-password"
                    autoComplete="new-password"
                    className="mt-1 block w-80 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#004d40] focus:border-[#004d40] sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <input
                    placeholder="Confirm new password"
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    autoComplete="confirm-email"
                    className="mt-1 block w-80 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#004d40] focus:border-[#004d40] sm:text-sm"
                  />
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="reset"
                  className="mr-3 bg-[#fafafa] rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-[#263238] border border-[#263238]"
                >
                  Cancel
                </button>

                <Button onClick={handleOpen}>Save</Button>
                <Dialog
                  size="xs"
                  open={open}
                  handler={handleOpen}
                  className="bg-transparent shadow-none"
                >
                  <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                      <Typography className="items-center font-bold text-[#020617]">
                        Enter Verification Code
                        <p className="items-center font-medium text-[#6b7280]">
                          We've sent a code to your email
                        </p>
                      </Typography>
                      <div className="mt-5 ml-11">
                        <PinInput
                          length={4}
                          initialValue=""
                          secret
                          secretDelay={100}
                          onChange={(value, index) => {}}
                          type="numeric"
                          inputMode="number"
                          style={{ padding: "10px", borderRadius: "8px" }}
                          inputStyle={{ borderColor: "gray" }}
                          inputFocusStyle={{ borderColor: "gray" }}
                          onComplete={(value, index) => {}}
                          autoSelect={true}
                          regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                        />
                      </div>
                    </CardBody>
                    <CardFooter>
                      <button
                        onClick={() => {
                          setOpen(true);
                        }}
                        className="ml-10 bg-gray-50 w-20 h-10 text-black rounded-lg border border-gray-200"
                      >
                        Resend
                      </button>
                      <Button
                        className="ml-20"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        Verify
                      </Button>
                      <Typography>
                        <center className="mt-5">
                          <p className="items-center font-normal text-xs text-[#6b7280]">
                            Didn't get any code?
                            <button className="underline text-gray-900 font-medium ml-1">
                              Resend code
                            </button>
                          </p>
                        </center>
                      </Typography>
                    </CardFooter>
                  </Card>
                </Dialog>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
