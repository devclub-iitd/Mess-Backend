import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { v4 as uuidv4 } from "uuid";
import { IoIosNotifications } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { Label } from "@/components/ui/label"
import { DataTable } from "@/components/ui/data-table"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, RefreshCcw } from "lucide-react"
import { useUser } from "@/context/UserContext";
import { PageHeader } from "@/components/ui/page-header"

interface UserData {
    _id: string;
    name: string;
    kerberos: string;
    photo: string;
    hostel: string;
    mess_id: string;
    isActive: boolean;
    __v: number;
}

const columns: ColumnDef<UserData>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
            )
        },
        enableSorting: true,
        enableHiding: false,
        filterFn: (row, id, value) => {
            if (!value) return true;
            const name = row.getValue(id) as string;
            return name.toLowerCase().includes((value as string).toLowerCase());
        }
    },
    {
        accessorKey: "kerberos",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    Entry Number
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
            )
        },
        enableSorting: true,
        filterFn: (row, id, value) => {
            if (!value) return true;
            const kerberos = row.getValue(id) as string;
            return kerberos.toLowerCase().includes((value as string).toLowerCase());
        }
    },
    {
        accessorKey: "hostel",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    Hostel
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
            )
        },
        enableSorting: true,
    },
    {
        id: "isActive",
        accessorKey: "isActive",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
            )
        },
        enableSorting: true,
        cell: ({ row }) => (
            <span className={row.original.isActive ? "text-green-500" : "text-red-500"}>
                {row.original.isActive ? "Active" : "Inactive"}
            </span>
        ),
        filterFn: (row, id, value) => {
            if (value === "all") return true;
            return row.getValue(id) === (value === "true");
        },
    }
]

const UserManagement = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<UserData[]>([]);
    const [kerberos, setKerberos] = useState("");
    const [name, setName] = useState("");
    const [hostel, setHostel] = useState("");
    const { user } = useUser();

    const getUsers = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/manager/getUsers?messName=${user!.messNames[0]}`, {
                credentials: "include",
            });
            const data: UserData[] = await response.json();
            setData(data);
        } catch (error) {
            console.error("Failed to fetch users:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUsers();
    }, [])

    const [formData, setFormData] = useState({
        name: "",
        kerberos: "",
        hostel: "",
        isActive: true
    });
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCreateUser = async () => {
        try {
            const response = await fetch("/api/manager/createUser", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    kerberos,
                    name,
                    hostel,
                    messName: hostel,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 201) {
                console.log("User Successfully Created!");
            } else {
                const errorText = await response.text();
                console.log(errorText);
            }
        } catch (error) {
            console.log("An error occurred while creating the user.");
            console.error(error);
        }
    };

    const handleSubmit = () => {
        setKerberos(formData.kerberos);
        setName(formData.name);
        setHostel(formData.hostel);
        handleCreateUser();
        const newUser: UserData = {
            _id: uuidv4(),
            ...formData,
            photo: "",
            mess_id: "",
            "__v": 0
        }
        setData((prev) => [...prev, newUser])
        setFormData({
            name: "",
            kerberos: "",
            hostel: "",
            isActive: true,
        })
        setIsDialogOpen(false)
    }

    return (
        <div className="h-screen overflow-hidden">
            <PageHeader 
                title="USER MANAGEMENT" 
                subtitle="Items Details Information" 
            />

            <div className="border rounded-lg mx-6">
                <div className="p-6 h-[calc(100vh-8rem)]">
                    <div className="flex justify-end gap-4 mb-4">
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <Button className="bg-green-500 text-white" onClick={() => setIsDialogOpen(true)}>
                                    <CiCirclePlus className="mr-2" /> Create User
                                </Button>
                            </DialogTrigger>

                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Create New User</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                    <div>
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Enter name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="kerberos">Kerberos ID</Label>
                                        <Input
                                            id="kerberos"
                                            name="kerberos"
                                            placeholder="Enter Kerberos ID"
                                            value={formData.kerberos}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="hostel">Hostel</Label>
                                        <Input
                                            id="hostel"
                                            name="hostel"
                                            placeholder="Enter hostel"
                                            value={formData.hostel}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <DialogFooter>
                                    <Button
                                        variant="outline"
                                        onClick={() => setIsDialogOpen(false)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button onClick={handleSubmit}>
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

                    <div className="h-[calc(100%-4rem)]">
                        <DataTable
                            columns={columns}
                            data={data}
                            searchableColumns={[
                                {
                                    id: "name",
                                    placeholder: "Search by name..."
                                },
                                {
                                    id: "kerberos",
                                    placeholder: "Search by entry number..."
                                }
                            ]}
                            filterableColumns={[
                                {
                                    id: "isActive",
                                    title: "Status",
                                    options: [
                                        { label: "All", value: "all" },
                                        { label: "Active", value: "true" },
                                        { label: "Inactive", value: "false" }
                                    ]
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserManagement;
