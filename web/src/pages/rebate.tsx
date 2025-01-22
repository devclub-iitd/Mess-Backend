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
    const [data, setData] = useState<any[]>([]);
    const [formData, setFormData] = useState({
        name: "",
        entry_no:"",
        start_time: "",
        end_time: "",
        reason:"",
      });
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const fetchRebates = async () => {
        try {
            const response = await fetch("/api/manager/fetchRebates", {
                method: "GET",
                credentials: "include",
            });

            if (response.status === 200) {
                const rebateData = await response.json();
                setData(rebateData);
            } else {
                const errorText = await response.text();
                console.log(errorText);
            }
        } catch (error) {
            console.log("An error occurred while fetching rebates.");
            console.error(error);
        }
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
        <div className="flex-1 overflow-auto">
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
                            <Button variant="outline" className="bg-blue-500 text-white" onClick={fetchRebates}>
                                <RefreshCcw className="mr-2 h-4 w-4" />
                                Refresh
                            </Button>
                        </div>
                    </div>

                    <div>
                        <DataTable
                            columns={columns}
                            data={data}
                            searchableColumns={[
                                {
                                    id: "user_id.kerberos",
                                    placeholder: "Search by kerberos..."
                                }
                            ]}
                            filterableColumns={[
                                {
                                    id: "status",
                                    title: "Status",
                                    options: [
                                        { label: "Pending", value: "PENDING" },
                                        { label: "Approved", value: "APPROVED" },
                                        { label: "Rejected", value: "REJECTED" }
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