import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  Textarea,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Select,
  Option,
  CardHeader,
} from "@material-tailwind/react";
import {
  EllipsisHorizontalIcon,
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";

import DataTable from "react-data-table-component";

import goals from "../data/goals.json";

export const Goals = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [formData, setFormData] = useState({
    name: "",

    weigtage: "",

    workObjective: "",
  });

  // Handle form submission

  const handleSubmit = (e) => {
    console.log("clicked");
    console.log(e.target.id);
  };

  const columns = [
    {
      name: "Goal Name",

      selector: "name",

      sortable: true,
    },

    {
      name: "Parameter Definition",

      selector: "paramDef",

      sortable: true,
    },

    {
      name: "Frequency of reports",

      selector: "fqRep",

      sortable: true,
    },

    {
      name: "Calculation method",

      selector: "calcMeth",

      sortable: true,
    },

    {
      name: "Weigtage",

      selector: "weigtage",

      sortable: true,
    },
    {
      name: "Candidate",

      selector: "candidate",

      sortable: true,
    },
    {
      name: "Actions",
      button: true,
      cell: (row) => (
        <button
          className="btn btn-outline btn-xs"
          onClick={(e) => handleSubmit(e, row.id)}
        >
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
        </button>
      ),
    },
  ];

  return (
    <>
      <div className="min-h-screen mt-24">
        <div className="container mx-auto p-4">
          {/* Header */}

          <div className="bg-white p-6 rounded-lg shadow-md mt-24">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <div className="mb-8 flex items-center justify-between gap-8">
                <div>
                  <Typography variant="h5" color="blue-gray">
                    Goal list
                  </Typography>
                  <Typography color="gray" className="mt-1 font-normal">
                    See information about all goals
                  </Typography>
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                  <Button
                    onClick={handleOpen}
                    className="mb-5 flex w-28 items-end gap-4"
                  >
                    Add Goal
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-4 flex-col md:flex-row">
                <div className="w-full md:w-72">
                  <Input
                    label="Search"
                    color="blue-gray"
                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  />
                </div>
              </div>
            </CardHeader>

            {/* Popup  */}
            <Dialog
              size="xs"
              open={open}
              handler={handleOpen}
              className="bg-transparent shadow-none"
            >
              <Card className="mx-auto w-full max-w-[24rem] p-10">
                <CardBody className="flex flex-col gap-4">
                  <Input label="Goal Name" size="lg" />
                  <Textarea label="Parameter Definition" size="lg" />
                  <Textarea label="Calculation method" size="lg" />
                  <Select label="Frequency of reports">
                    <Option>Weekly</Option>
                    <Option>Monthly</Option>
                  </Select>
                  <Select label="Weigtage">
                    <Option>15</Option>
                    <Option>20</Option>
                    <Option>25</Option>
                  </Select>
                  <Typography color="gray" className="mt-1 font-bold">
                    Agents
                  </Typography>
                  <Checkbox
                    ripple={false}
                    className="h-8 w-8 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                    label="IT Agent Performance"
                  />
                  <Checkbox
                    ripple={false}
                    className="h-8 w-8 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                    label="IT Delivery Specialist"
                  />
                  <Checkbox
                    ripple={false}
                    className="h-8 w-8 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                    label="IT Lead"
                  />
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

            {/* Table  */}
            <div className="mt-5">
              <DataTable
                columns={columns}
                data={goals}
                striped
                highlightOnHover
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
