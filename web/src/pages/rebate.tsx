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

const Rebate = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState(
        [
            {
                "_id": "675d443b0a9b904abb48426e",
                "user_id": {
                    "_id": "66d716e67df961bfb717818a",
                    "kerberos": "ee1201022",
                    "name": "Dawn Kunze",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": false,
                    "__v": 0
                },
                "admin_id": "66d72f70ceee0eded59fcbaa",
                "rebate_application_no": 1027,
                "from_date": "2024-12-04T00:00:00.000Z",
                "to_date": "2024-12-10T23:59:59.999Z",
                "days": 6,
                "approval_status": "Pending",
                "reason": "Home visit",
                "type": "Special",
                "amount": 903,
                "__v": 0
            },
            {
                "_id": "675d443c0a9b904abb484282",
                "user_id": {
                    "_id": "66d716e67df961bfb71793af",
                    "kerberos": "cs1202040",
                    "name": "Andres Hagenes-Wiegand",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": false,
                    "__v": 0
                },
                "admin_id": "66d72f70ceee0eded59fcbaa",
                "rebate_application_no": 1054,
                "from_date": "2024-11-23T00:00:00.000Z",
                "to_date": "2024-11-29T23:59:59.999Z",
                "days": 6,
                "approval_status": "Pending",
                "reason": "Home visit",
                "type": "Special",
                "amount": 467,
                "__v": 0
            },
            {
                "_id": "675d443c0a9b904abb484284",
                "user_id": {
                    "_id": "66d716e67df961bfb717909e",
                    "kerberos": "cse242225",
                    "name": "Sonia Schaefer",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "admin_id": "66d72f70ceee0eded59fcbaa",
                "rebate_application_no": 1044,
                "from_date": "2024-12-02T00:00:00.000Z",
                "to_date": "2024-12-10T23:59:59.999Z",
                "days": 8,
                "approval_status": "Rejected",
                "reason": "Medical leave",
                "type": "Special",
                "amount": 851,
                "__v": 0
            },
            {
                "_id": "675d443c0a9b904abb4842ae",
                "user_id": {
                    "_id": "66d716e67df961bfb71787f7",
                    "kerberos": "tt1211825",
                    "name": "Sheila Lindgren",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "admin_id": "66d72f70ceee0eded59fcbaa",
                "rebate_application_no": 1067,
                "from_date": "2024-12-08T00:00:00.000Z",
                "to_date": "2024-12-18T23:59:59.999Z",
                "days": 10,
                "approval_status": "Approved",
                "reason": "Family emergency",
                "type": "Normal",
                "amount": 635,
                "__v": 0
            },
            {
                "_id": "675d443c0a9b904abb4842d2",
                "user_id": {
                    "_id": "66d716e67df961bfb7178607",
                    "kerberos": "cs5241884",
                    "name": "Clark Baumbach",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "admin_id": "66d72f70ceee0eded59fcbaa",
                "rebate_application_no": 1088,
                "from_date": "2024-12-07T00:00:00.000Z",
                "to_date": "2024-12-16T23:59:59.999Z",
                "days": 9,
                "approval_status": "Approved",
                "reason": "Personal reasons",
                "type": "Normal",
                "amount": 703,
                "__v": 0
            },
            {
                "_id": "675d443c0a9b904abb484317",
                "user_id": {
                    "_id": "66d716e67df961bfb7178ef4",
                    "kerberos": "cse212164",
                    "name": "Micheal Marvin",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "admin_id": "66d72f70ceee0eded59fcbaa",
                "rebate_application_no": 1011,
                "from_date": "2024-12-14T00:00:00.000Z",
                "to_date": "2024-12-20T23:59:59.999Z",
                "days": 6,
                "approval_status": "Approved",
                "reason": "Personal reasons",
                "type": "Special",
                "amount": 863,
                "__v": 0
            },
            {
                "_id": "675d443d0a9b904abb484335",
                "user_id": {
                    "_id": "66d716e67df961bfb7179147",
                    "kerberos": "ee1241581",
                    "name": "Annette Welch II",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "admin_id": "66d72f70ceee0eded59fcbaa",
                "rebate_application_no": 1126,
                "from_date": "2024-12-10T00:00:00.000Z",
                "to_date": "2024-12-15T23:59:59.999Z",
                "days": 5,
                "approval_status": "Pending",
                "reason": "Medical leave",
                "type": "Special",
                "amount": 858,
                "__v": 0
            }
        ]);
    const [formData, setFormData] = useState({
        name: "",
        entry_no:"",
        start_time: "",
        end_time: "",
        reason:"",
      });
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    
    const totalPages = Math.ceil(data.length / rowsPerPage);

    const filteredData = data.filter((row) =>
        row.user_id.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.user_id.mess_id.toLowerCase().includes(searchQuery.toLowerCase())
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
        setCurrentPage(1);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); 
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
      const handleSubmit = () => {
        const newItem = {
          _id: uuidv4(),
          user_id:{
            _id: uuidv4(),
            kerberos:formData.entry_no,
            name:formData.name,
            photo:"fdgsgar",
            hostel:"VINDHYA",
            mess_id:uuidv4(),
            isActive:false,
            __v: 0
          },
          admin_id:uuidv4(),
          rebate_application_no:1127,
          from_date: formData.start_time,
          to_date: formData.end_time,
          days: 6,
            approval_status: "Approved",
            reason: "Personal reasons",
            type: "Special",
            amount: 863,
            __v: 0
        };
        setData((prevData) => [...prevData, newItem]);
        setFormData({
          name: "",
          entry_no:"",
          start_time: "",
          end_time: "",
          reason:"",
        });
        setIsDialogOpen(false);
      };
    return (
        <div className="pl-0 ml-10 pt-6 w-full h-screen overflow-hidden">
          <header className="flex justify-between">
            <div>
              <h1 className="text-xl font-bold">Rebate</h1>
              
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
                        <CiCirclePlus /> Create Rebate
                      </Button>
                    </DialogTrigger>
    
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Create New Rebate</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div>
                          <Label htmlFor="entry_no">Entry Number</Label>
                          <Input
                            id="entry_no"
                            name="entry_no"
                            placeholder="Entry Number"
                            value={formData.entry_no}
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
                          <Label htmlFor="start_time">From</Label>
                          <Input
                            id="start_time"
                            name="start_time"
                            type="date"
                            value={formData.start_time}
                            onChange={handleInputChange}
                          />
                        </div>
    
                        <div>
                          <Label htmlFor="end_time">To</Label>
                          <Input
                            id="end_time"
                            name="end_time"
                            type="date"
                            value={formData.end_time}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div>
                          <Label htmlFor="reason">Reason</Label>
                          <Input
                            id="reason"
                            name="reason"
                            placeholder="Reason"
                            value={formData.reason}
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
                            Get Rebate
                        </Button>
                </div>
              </div>
              <div className="m-4 h-[calc(100vh-300px)] overflow-y-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Application Number</TableHead>
                      <TableHead>Entry Number</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>From</TableHead>
                      <TableHead>To</TableHead>
                      <TableHead>Approval Status</TableHead>
                      <TableHead>Reason</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.rebate_application_no}</TableCell>
                        <TableCell>{row.user_id.kerberos}</TableCell>
                        <TableCell>{row.user_id.name}</TableCell>
                        <TableCell>{row.from_date}</TableCell>
                        <TableCell>{row.to_date}</TableCell>
                        <TableCell>{row.approval_status}</TableCell>
                        <TableCell>{row.reason}</TableCell>
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

export default Rebate;