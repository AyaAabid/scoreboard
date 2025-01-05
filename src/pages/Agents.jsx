import React from "react";
import agents from "../data/agents.json";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  EllipsisHorizontalIcon,
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Button,
  Chip,
  CardFooter,
  Dialog,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";

const Agents = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const TABLE_HEAD = ["Biometric", "Name", "Function", "Status", "Actions"];
  const columns = [
    {
      name: "Biometric",
      selector: "biometric",
      sortable: true,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Function",
      selector: "function",
      sortable: true,
    },
    {
      name: "Status",
      selector: "status",
      sortable: true,
    },
    {
      name: "Actions",
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen mr-24 ml-24">
      <Card className="w-full">
        {/* Header */}
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8 mt-7 mr-2 ml-2">
            <div>
              <Typography variant="h5" color="blue-gray">
                Agents list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all agents
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                className="flex w-28 h-15 items-end gap-4"
                onClick={handleOpen}
              >
                Add Agent
              </Button>

              {/* Popup */}
              <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
              >
                <Card className="mx-auto w-full max-w-[24rem]">
                  <CardBody className="flex flex-col gap-4">
                    <Input label="Biometric" size="lg" />
                    <Input label="Name" size="lg" />
                    <Select color="blue-gray" label="Agent Type">
                      <Option>IT Lead</Option>
                      <Option>IT Agent Performance</Option>
                      <Option>IT Delivery Specialist</Option>
                    </Select>
                  </CardBody>
                  <CardFooter>
                    <Button
                      onClick={() => {
                        setOpen(true);
                      }}
                    >
                      Add
                    </Button>
                    <Button
                      className="ml-2"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      Cancel
                    </Button>
                  </CardFooter>
                </Card>
              </Dialog>
            </div>
          </div>
          <div className="flex items-center space-x-4 flex-col md:flex-row ml-2">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                color="blue-gray"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <div className="w-full md:w-72">
              <Select color="blue-gray" label="Select Agent">
                <Option>IT Lead</Option>
                <Option>IT Agent</Option>
                <Option>IT Delivery Specialist</Option>
              </Select>
            </div>
          </div>
        </CardHeader>

        {/* Table  */}
        <div className="mt-10">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {agents.map((agent, biometric) => (
                <tr key={biometric} className="bg-gray-50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {agent.biometric}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {agent.name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {agent.function}
                    </Typography>
                  </td>
                  <td className="p-3 w-10">
                    <div>
                      {agent.status === "Active" ? (
                        <Chip
                          variant="ghost"
                          color="green"
                          size="sm"
                          value="Active"
                          icon={
                            <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
                          }
                        />
                      ) : (
                        <Chip
                          variant="ghost"
                          color="red"
                          size="sm"
                          value="Inactive"
                          icon={
                            <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-red-900 content-['']" />
                          }
                        />
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <Menu>
                      <MenuHandler>
                        <IconButton variant="text">
                          <EllipsisHorizontalIcon className="h-4 w-4" />
                        </IconButton>
                      </MenuHandler>
                      <MenuList>
                        <MenuItem>
                          <IconButton variant="text">
                            <EyeIcon className="h-4 w-4" />
                          </IconButton>
                          View
                        </MenuItem>
                        <MenuItem>
                          <IconButton variant="text">
                            <PencilSquareIcon className="h-4 w-4" />
                          </IconButton>
                          Edit
                        </MenuItem>
                        <MenuItem>
                          <IconButton variant="text">
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                          Delete
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Agents;
