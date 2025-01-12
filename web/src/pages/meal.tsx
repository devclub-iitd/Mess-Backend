import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CiCalendar } from "react-icons/ci";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { v4 as uuidv4 } from "uuid";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Label } from "@/components/ui/label"

import { CiCirclePlus } from "react-icons/ci";
import { Checkbox } from "@/components/ui/checkbox"

    


import { IoIosNotifications } from "react-icons/io";

const Meal = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState(
        [
            {
                "_id": "6712831e9edfb01dd0a41574",
                "mess_id": {
                    "_id": "66d7128a1c004b02f7459921",
                    "name": "VINDHYA",
                    "capacity": 1000,
                    "__v": 0
                },
                "name": "Updation Demo",
                "start_time": "2024-10-18T13:47:00.000Z",
                "end_time": "2024-10-19T03:47:00.000Z",
                "capacity": 1000,
                "price": 0,
                "fooditem_ids": [],
                "__v": 0
            },
            {
                "_id": "66d72ec120fcf3299c0ce339",
                "mess_id": {
                    "_id": "66d7128a1c004b02f7459921",
                    "name": "VINDHYA",
                    "capacity": 1000,
                    "__v": 0
                },
                "name": "Dinner",
                "start_time": "2024-09-07T13:15:00.000Z",
                "end_time": "2024-09-07T15:45:00.000Z",
                "capacity": 1000,
                "price": 0,
                "fooditem_ids": [],
                "__v": 0
            },
            {
                "_id": "66d72ec120fcf3299c0ce32b",
                "mess_id": {
                    "_id": "66d7128a1c004b02f7459921",
                    "name": "VINDHYA",
                    "capacity": 1000,
                    "__v": 0
                },
                "name": "Lunch",
                "start_time": "2024-09-07T06:15:00.000Z",
                "end_time": "2024-09-07T08:45:00.000Z",
                "capacity": 1000,
                "price": 0,
                "fooditem_ids": [],
                "__v": 0
            },
            {
                "_id": "66d72ec120fcf3299c0ce31d",
                "mess_id": {
                    "_id": "66d7128a1c004b02f7459921",
                    "name": "VINDHYA",
                    "capacity": 1000,
                    "__v": 0
                },
                "name": "Breakfast",
                "start_time": "2024-09-07T01:15:00.000Z",
                "end_time": "2024-09-07T04:15:00.000Z",
                "capacity": 1000,
                "price": 0,
                "fooditem_ids": [],
                "__v": 0
            },
            {
                "_id": "66d72ec120fcf3299c0ce30f",
                "mess_id": {
                    "_id": "66d7128a1c004b02f7459921",
                    "name": "VINDHYA",
                    "capacity": 1000,
                    "__v": 0
                },
                "name": "Dinner",
                "start_time": "2024-09-06T13:15:00.000Z",
                "end_time": "2024-09-06T15:45:00.000Z",
                "capacity": 1000,
                "price": 0,
                "fooditem_ids": [],
                "__v": 0
            },
            {
                "_id": "66d72ec120fcf3299c0ce301",
                "mess_id": {
                    "_id": "66d7128a1c004b02f7459921",
                    "name": "VINDHYA",
                    "capacity": 1000,
                    "__v": 0
                },
                "name": "Lunch",
                "start_time": "2024-09-06T06:15:00.000Z",
                "end_time": "2024-09-06T08:45:00.000Z",
                "capacity": 1000,
                "price": 0,
                "fooditem_ids": [],
                "__v": 0
            },
            {
                "_id": "66d72ec120fcf3299c0ce2f3",
                "mess_id": {
                    "_id": "66d7128a1c004b02f7459921",
                    "name": "VINDHYA",
                    "capacity": 1000,
                    "__v": 0
                },
                "name": "Breakfast",
                "start_time": "2024-09-06T01:15:00.000Z",
                "end_time": "2024-09-06T04:15:00.000Z",
                "capacity": 1000,
                "price": 0,
                "fooditem_ids": [],
                "__v": 0
            },
            {
                "_id": "66d72ec120fcf3299c0ce2e5",
                "mess_id": {
                    "_id": "66d7128a1c004b02f7459921",
                    "name": "VINDHYA",
                    "capacity": 1000,
                    "__v": 0
                },
                "name": "Dinner",
                "start_time": "2024-09-05T13:15:00.000Z",
                "end_time": "2024-09-05T15:45:00.000Z",
                "capacity": 1000,
                "price": 0,
                "fooditem_ids": [],
                "__v": 0
            },
            {
                "_id": "66d72ec120fcf3299c0ce2d7",
                "mess_id": {
                    "_id": "66d7128a1c004b02f7459921",
                    "name": "VINDHYA",
                    "capacity": 1000,
                    "__v": 0
                },
                "name": "Lunch",
                "start_time": "2024-09-05T06:15:00.000Z",
                "end_time": "2024-09-05T08:45:00.000Z",
                "capacity": 1000,
                "price": 0,
                "fooditem_ids": [],
                "__v": 0
            },
            {
                "_id": "66d72ec120fcf3299c0ce2c9",
                "mess_id": {
                    "_id": "66d7128a1c004b02f7459921",
                    "name": "VINDHYA",
                    "capacity": 1000,
                    "__v": 0
                },
                "name": "Breakfast",
                "start_time": "2024-09-05T01:15:00.000Z",
                "end_time": "2024-09-05T04:15:00.000Z",
                "capacity": 1000,
                "price": 0,
                "fooditem_ids": [],
                "__v": 0
            }
    
    
    ]);
    const [formData, setFormData] = useState({
        name: "",
        start_time: "",
        end_time: "",
      });
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    
    


    // Calculate total pages
    const totalPages = Math.ceil(data.length / rowsPerPage);

    // Paginate data
    const filteredData = data.filter((row) =>
        row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.mess_id.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const paginatedData = filteredData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(event.target.value));
        setCurrentPage(1); // Reset to first page
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Reset to first page on new search
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
      const handleSubmit = () => {
        const newItem = {
          _id: uuidv4(),
          name: formData.name,
          mess_id: {
            _id: uuidv4(),
            name: "VINDHYA",
            "capacity": 1000,
                    "__v": 0
          },
          start_time: formData.start_time,
          end_time: formData.end_time,
          capacity: 1000,
          price: 0,
          fooditem_ids: [],
          __v: 0,
        };
        setData((prevData) => [...prevData, newItem]);
        setFormData({
          name: "",
          start_time: "",
          end_time: "",
        });
        setIsDialogOpen(false);
      };
    return (
        <div className="pl-0 ml-10 pt-6 w-full">
          <header className="flex justify-between">
            <div>
              <h1 className="text-xl font-bold">MEALS MANAGEMENT</h1>
              <span className="text-slate-500 mt-3 pt-5">Items Details Information</span>
            </div>
            <div>
              <Button className="mr-10">
                <IoIosNotifications />
              </Button>
            </div>
          </header>
          <div className="border-2 m-8 ml-4 mb-3 rounded-md">
            <div className="m-10 border-spacing-2">
              <div className="flex justify-between">
                <div>
                  <Input
                    placeholder="Search Item"
                    className="w-80 text-green"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
                <div className="flex gap-4">
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                        className="bg-green-500 text-white"
                        onClick={() => setIsDialogOpen(true)}
                      >
                        <CiCirclePlus /> Create Meal
                      </Button>
                    </DialogTrigger>
    
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Create New Meal</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Menu Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Enter menu name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
    
                        {/* <div>
                          <Label htmlFor="mess_id">Mess Name</Label>
                          <Input
                            id="mess_id"
                            name="mess_id"
                            placeholder="Enter mess name"
                            value={formData.mess_id}
                            onChange={handleInputChange}
                          />
                        </div> */}
    
                        <div>
                          <Label htmlFor="start_time">Start Time</Label>
                          <Input
                            id="start_time"
                            name="start_time"
                            type="datetime-local"
                            value={formData.start_time}
                            onChange={handleInputChange}
                          />
                        </div>
    
                        <div>
                          <Label htmlFor="end_time">End Time</Label>
                          <Input
                            id="end_time"
                            name="end_time"
                            type="datetime-local"
                            value={formData.end_time}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
    
                      <DialogFooter>
                        <Button
                          className="bg-gray-500 text-white"
                          onClick={() => setIsDialogOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button className="bg-blue-500 text-white" onClick={handleSubmit}>
                          Submit
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" className="bg-blue-500 text-white">
                            <CiCirclePlus />
                            Get User
                        </Button>
                </div>
              </div>
              <div className="m-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Menu</TableHead>
                      <TableHead>Hostel</TableHead>
                      <TableHead>Start Time</TableHead>
                      <TableHead>End Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.mess_id.name}</TableCell>
                        <TableCell>{row.start_time}</TableCell>
                        <TableCell>{row.end_time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  Showing
                  <select
                    className="mx-2 border border-gray-300 rounded p-1"
                    value={rowsPerPage}
                    onChange={handleRowsPerPageChange}
                  >
                    <option value={3}>3</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                  </select>
                  rows per page
                </div>
                <div>
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <span className="mx-4">${currentPage} of ${totalPages}</span>
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Meal;