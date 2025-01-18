import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { useState } from "react";
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
    const [data, setData] = useState<UserData[]>([
        {
            "_id": "66d716e67df961bfb7177875",
            "name": "Earl Ortiz",
            "hostel": "VINDHYA",
            "kerberos": "ep1201512",
            "isActive": false,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177882",
            "name": "Dr. Casey Tillman III",
            "hostel": "VINDHYA",
            "kerberos": "ph1222546",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177884",
            "name": "Brandon Buckridge",
            "hostel": "VINDHYA",
            "kerberos": "ce1211202",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177893",
            "name": "Zachary Fisher",
            "hostel": "VINDHYA",
            "kerberos": "mez222240",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177894",
            "name": "Violet Balistreri",
            "hostel": "VINDHYA",
            "kerberos": "mt1201156",
            "isActive": false,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb71778a2",
            "name": "Jeanne Leffler",
            "hostel": "VINDHYA",
            "kerberos": "mt5221825",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb71778b1",
            "name": "Lee Botsford",
            "hostel": "VINDHYA",
            "kerberos": "ee3231572",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb71778c3",
            "name": "Francisco Cronin",
            "hostel": "VINDHYA",
            "kerberos": "ch7232321",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb71778c7",
            "name": "Gilberto Shanahan",
            "hostel": "VINDHYA",
            "kerberos": "mez202418",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb71778d0",
            "name": "Bradford Walsh PhD",
            "hostel": "VINDHYA",
            "kerberos": "tt1222075",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb71778da",
            "name": "Wilbert Kautzer",
            "hostel": "VINDHYA",
            "kerberos": "ee3231753",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb71778dc",
            "name": "Dr. Taylor Abernathy",
            "hostel": "VINDHYA",
            "kerberos": "mt1212698",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb71778e4",
            "name": "Saul Wisozk",
            "hostel": "VINDHYA",
            "kerberos": "ep1231954",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb71778e5",
            "name": "Shane Torphy",
            "hostel": "VINDHYA",
            "kerberos": "cse212483",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177901",
            "name": "Ann Schumm",
            "hostel": "VINDHYA",
            "kerberos": "mt5232086",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177902",
            "name": "Joel Prosacco",
            "hostel": "VINDHYA",
            "kerberos": "cs5242070",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb717791e",
            "name": "Ms. Desiree Herman II",
            "hostel": "VINDHYA",
            "kerberos": "me1201939",
            "isActive": false,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177920",
            "name": "Lynn Abbott",
            "hostel": "VINDHYA",
            "kerberos": "mt1202180",
            "isActive": false,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177933",
            "name": "Whitney Anderson",
            "hostel": "VINDHYA",
            "kerberos": "ch1241824",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177935",
            "name": "Adrienne Rutherford",
            "hostel": "VINDHYA",
            "kerberos": "ce1242030",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177940",
            "name": "Archie Kulas DVM",
            "hostel": "VINDHYA",
            "kerberos": "ce1211998",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177950",
            "name": "Ms. Myrtle Kutch",
            "hostel": "VINDHYA",
            "kerberos": "ch1211936",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177976",
            "name": "Kyle Larson MD",
            "hostel": "VINDHYA",
            "kerberos": "mes231902",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177983",
            "name": "Dewey Hoeger",
            "hostel": "VINDHYA",
            "kerberos": "cs5221085",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177985",
            "name": "Dr. Jonathon Conroy",
            "hostel": "VINDHYA",
            "kerberos": "ph1202324",
            "isActive": false,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177987",
            "name": "Tricia Bechtelar",
            "hostel": "VINDHYA",
            "kerberos": "ep1241584",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb717798b",
            "name": "Brent Cole",
            "hostel": "VINDHYA",
            "kerberos": "mez201224",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177999",
            "name": "Reginald Runolfsson-Zboncak",
            "hostel": "VINDHYA",
            "kerberos": "ee1242265",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb717799b",
            "name": "Marc Donnelly",
            "hostel": "VINDHYA",
            "kerberos": "ep1211771",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb71779a3",
            "name": "Grant Stark-Ferry",
            "hostel": "VINDHYA",
            "kerberos": "cs1222613",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb71779b3",
            "name": "Pam Reichel",
            "hostel": "VINDHYA",
            "kerberos": "ep1242576",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb71779be",
            "name": "Vincent Williamson",
            "hostel": "VINDHYA",
            "kerberos": "mt5232018",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb71779d0",
            "name": "Aubrey Nicolas",
            "hostel": "VINDHYA",
            "kerberos": "ep1231749",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb71779d3",
            "name": "Cecelia Schultz V",
            "hostel": "VINDHYA",
            "kerberos": "mes241588",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb71779ea",
            "name": "Whitney Stoltenberg",
            "hostel": "VINDHYA",
            "kerberos": "mt5242646",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb71779ed",
            "name": "Eileen Yundt",
            "hostel": "VINDHYA",
            "kerberos": "ee3231335",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb71779fc",
            "name": "Delbert Watsica",
            "hostel": "VINDHYA",
            "kerberos": "ch7231730",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177a1b",
            "name": "Eula Corkery",
            "hostel": "VINDHYA",
            "kerberos": "ee3242363",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177a1c",
            "name": "Miss Ida Schoen",
            "hostel": "VINDHYA",
            "kerberos": "me2221711",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177a25",
            "name": "Bobby Roob",
            "hostel": "VINDHYA",
            "kerberos": "ch1221156",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177a39",
            "name": "Janice Schaefer",
            "hostel": "VINDHYA",
            "kerberos": "cs1241338",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177a3f",
            "name": "Cynthia Hansen",
            "hostel": "VINDHYA",
            "kerberos": "mes242657",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177a43",
            "name": "Lula Steuber",
            "hostel": "VINDHYA",
            "kerberos": "ep1201406",
            "isActive": false,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177a5e",
            "name": "Dr. Angel Bahringer",
            "hostel": "VINDHYA",
            "kerberos": "tt1202109",
            "isActive": false,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177a78",
            "name": "Lyle Stoltenberg",
            "hostel": "VINDHYA",
            "kerberos": "cs1222045",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177a8c",
            "name": "Erik Reynolds II",
            "hostel": "VINDHYA",
            "kerberos": "ch1201622",
            "isActive": false,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177a95",
            "name": "Terri Volkman",
            "hostel": "VINDHYA",
            "kerberos": "cse212451",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177a9f",
            "name": "Cathy Braun",
            "hostel": "VINDHYA",
            "kerberos": "ee1222109",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177aad",
            "name": "Gary Abshire V",
            "hostel": "VINDHYA",
            "kerberos": "cs5241418",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177ab8",
            "name": "Craig Wunsch",
            "hostel": "VINDHYA",
            "kerberos": "cs5231026",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        },
        {
            "_id": "66d716e67df961bfb7177ad1",
            "name": "Ruben Sporer",
            "hostel": "VINDHYA",
            "kerberos": "mt1231814",
            "isActive": true,
            "photo": "",
            "mess_id": "",
            "__v": 0
        }


    ]);
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

    const handleSubmit = () => {
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
            <header className="flex justify-between p-6">
                <div>
                    <h1 className="text-xl font-bold">USER MANAGEMENT</h1>
                    <span className="text-slate-500">Items Details Information</span>
                </div>
                <div>
                    <Button className="mr-10"><IoIosNotifications /></Button>
                </div>
            </header>

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
