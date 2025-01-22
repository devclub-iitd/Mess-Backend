import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { PageHeader } from "@/components/ui/page-header";

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { v4 as uuidv4 } from "uuid";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Label } from "@/components/ui/label"

import { CiCirclePlus } from "react-icons/ci";

import { IoIosNotifications } from "react-icons/io";

import { DataTable } from "@/components/ui/data-table"
import { ColumnDef } from "@tanstack/react-table"
import { RefreshCcw } from "lucide-react"

interface RebateData {
  rebate_application_no: number;
  user_id: {
    kerberos: string;
    name: string;
  };
  from_date: string;
  to_date: string;
  approval_status: string;
  reason: string;
}

const columns: ColumnDef<RebateData>[] = [
  {
    accessorKey: "rebate_application_no",
    header: "Application Number",
  },
  {
    id: "entryNumber",
    accessorFn: (row) => row.user_id.kerberos,
    header: "Entry Number",
    enableSorting: true,
    filterFn: (row, id, value) => {
      if (!value) return true;
      const entryNumber = row.getValue(id) as string;
      return entryNumber.toLowerCase().includes((value as string).toLowerCase());
    }
  },
  {
    accessorKey: "user_id.name",
    header: "Name",
  },
  {
    accessorKey: "from_date",
    header: "From",
  },
  {
    accessorKey: "to_date",
    header: "To",
  },
  {
    accessorKey: "approval_status",
    header: "Approval Status",
    enableSorting: true,
    filterFn: (row, id, value) => {
      if (value === "all") return true;
      if (!value) return true;
      return row.getValue(id) === value;
    }
  },
  {
    accessorKey: "reason",
    header: "Reason",
  },
]

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
        <div className="h-screen overflow-hidden">
            <PageHeader 
                title="REBATE" 
                subtitle="Items Details Information" 
            />
            <div className="border rounded-md mx-6">
                <div className="p-6">
                    <div className="flex justify-end mb-6">
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
                                <RefreshCcw className="mr-2 h-4 w-4" />
                                Refresh
                            </Button>
                        </div>
                    </div>
                    <div className="h-[calc(100vh-300px)]">
                        <DataTable 
                            columns={columns} 
                            data={data}
                            searchableColumns={[
                                {
                                    id: "entryNumber",
                                    placeholder: "Search by entry number..."
                                }
                            ]}
                            filterableColumns={[
                                {
                                    id: "approval_status",
                                    title: "Status",
                                    options: [
                                        { label: "All", value: "all" },
                                        { label: "Pending", value: "Pending" },
                                        { label: "Approved", value: "Approved" },
                                        { label: "Rejected", value: "Rejected" }
                                    ]
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rebate;