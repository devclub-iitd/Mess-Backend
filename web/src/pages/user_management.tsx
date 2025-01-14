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
import { Checkbox } from "@/components/ui/checkbox"

    


import { IoIosNotifications } from "react-icons/io";

const UserManagement = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState([
        {
            "id": "66d716e67df961bfb7177875",
            "name": "Earl Ortiz",
            "hostel": "VINDHYA",
            "kerberos": "ep1201512",
            "isActive": false
        },
        {
            "id": "66d716e67df961bfb7177882",
            "name": "Dr. Casey Tillman III",
            "hostel": "VINDHYA",
            "kerberos": "ph1222546",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177884",
            "name": "Brandon Buckridge",
            "hostel": "VINDHYA",
            "kerberos": "ce1211202",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177893",
            "name": "Zachary Fisher",
            "hostel": "VINDHYA",
            "kerberos": "mez222240",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177894",
            "name": "Violet Balistreri",
            "hostel": "VINDHYA",
            "kerberos": "mt1201156",
            "isActive": false
        },
        {
            "id": "66d716e67df961bfb71778a2",
            "name": "Jeanne Leffler",
            "hostel": "VINDHYA",
            "kerberos": "mt5221825",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb71778b1",
            "name": "Lee Botsford",
            "hostel": "VINDHYA",
            "kerberos": "ee3231572",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb71778c3",
            "name": "Francisco Cronin",
            "hostel": "VINDHYA",
            "kerberos": "ch7232321",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb71778c7",
            "name": "Gilberto Shanahan",
            "hostel": "VINDHYA",
            "kerberos": "mez202418",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb71778d0",
            "name": "Bradford Walsh PhD",
            "hostel": "VINDHYA",
            "kerberos": "tt1222075",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb71778da",
            "name": "Wilbert Kautzer",
            "hostel": "VINDHYA",
            "kerberos": "ee3231753",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb71778dc",
            "name": "Dr. Taylor Abernathy",
            "hostel": "VINDHYA",
            "kerberos": "mt1212698",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb71778e4",
            "name": "Saul Wisozk",
            "hostel": "VINDHYA",
            "kerberos": "ep1231954",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb71778e5",
            "name": "Shane Torphy",
            "hostel": "VINDHYA",
            "kerberos": "cse212483",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177901",
            "name": "Ann Schumm",
            "hostel": "VINDHYA",
            "kerberos": "mt5232086",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177902",
            "name": "Joel Prosacco",
            "hostel": "VINDHYA",
            "kerberos": "cs5242070",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb717791e",
            "name": "Ms. Desiree Herman II",
            "hostel": "VINDHYA",
            "kerberos": "me1201939",
            "isActive": false
        },
        {
            "id": "66d716e67df961bfb7177920",
            "name": "Lynn Abbott",
            "hostel": "VINDHYA",
            "kerberos": "mt1202180",
            "isActive": false
        },
        {
            "id": "66d716e67df961bfb7177933",
            "name": "Whitney Anderson",
            "hostel": "VINDHYA",
            "kerberos": "ch1241824",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177935",
            "name": "Adrienne Rutherford",
            "hostel": "VINDHYA",
            "kerberos": "ce1242030",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177940",
            "name": "Archie Kulas DVM",
            "hostel": "VINDHYA",
            "kerberos": "ce1211998",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177950",
            "name": "Ms. Myrtle Kutch",
            "hostel": "VINDHYA",
            "kerberos": "ch1211936",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177976",
            "name": "Kyle Larson MD",
            "hostel": "VINDHYA",
            "kerberos": "mes231902",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177983",
            "name": "Dewey Hoeger",
            "hostel": "VINDHYA",
            "kerberos": "cs5221085",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177985",
            "name": "Dr. Jonathon Conroy",
            "hostel": "VINDHYA",
            "kerberos": "ph1202324",
            "isActive": false
        },
        {
            "id": "66d716e67df961bfb7177987",
            "name": "Tricia Bechtelar",
            "hostel": "VINDHYA",
            "kerberos": "ep1241584",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb717798b",
            "name": "Brent Cole",
            "hostel": "VINDHYA",
            "kerberos": "mez201224",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177999",
            "name": "Reginald Runolfsson-Zboncak",
            "hostel": "VINDHYA",
            "kerberos": "ee1242265",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb717799b",
            "name": "Marc Donnelly",
            "hostel": "VINDHYA",
            "kerberos": "ep1211771",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb71779a3",
            "name": "Grant Stark-Ferry",
            "hostel": "VINDHYA",
            "kerberos": "cs1222613",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb71779b3",
            "name": "Pam Reichel",
            "hostel": "VINDHYA",
            "kerberos": "ep1242576",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb71779be",
            "name": "Vincent Williamson",
            "hostel": "VINDHYA",
            "kerberos": "mt5232018",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb71779d0",
            "name": "Aubrey Nicolas",
            "hostel": "VINDHYA",
            "kerberos": "ep1231749",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb71779d3",
            "name": "Cecelia Schultz V",
            "hostel": "VINDHYA",
            "kerberos": "mes241588",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb71779ea",
            "name": "Whitney Stoltenberg",
            "hostel": "VINDHYA",
            "kerberos": "mt5242646",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb71779ed",
            "name": "Eileen Yundt",
            "hostel": "VINDHYA",
            "kerberos": "ee3231335",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb71779fc",
            "name": "Delbert Watsica",
            "hostel": "VINDHYA",
            "kerberos": "ch7231730",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177a1b",
            "name": "Eula Corkery",
            "hostel": "VINDHYA",
            "kerberos": "ee3242363",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177a1c",
            "name": "Miss Ida Schoen",
            "hostel": "VINDHYA",
            "kerberos": "me2221711",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177a25",
            "name": "Bobby Roob",
            "hostel": "VINDHYA",
            "kerberos": "ch1221156",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177a39",
            "name": "Janice Schaefer",
            "hostel": "VINDHYA",
            "kerberos": "cs1241338",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177a3f",
            "name": "Cynthia Hansen",
            "hostel": "VINDHYA",
            "kerberos": "mes242657",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177a43",
            "name": "Lula Steuber",
            "hostel": "VINDHYA",
            "kerberos": "ep1201406",
            "isActive": false
        },
        {
            "id": "66d716e67df961bfb7177a5e",
            "name": "Dr. Angel Bahringer",
            "hostel": "VINDHYA",
            "kerberos": "tt1202109",
            "isActive": false
        },
        {
            "id": "66d716e67df961bfb7177a78",
            "name": "Lyle Stoltenberg",
            "hostel": "VINDHYA",
            "kerberos": "cs1222045",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177a8c",
            "name": "Erik Reynolds II",
            "hostel": "VINDHYA",
            "kerberos": "ch1201622",
            "isActive": false
        },
        {
            "id": "66d716e67df961bfb7177a95",
            "name": "Terri Volkman",
            "hostel": "VINDHYA",
            "kerberos": "cse212451",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177a9f",
            "name": "Cathy Braun",
            "hostel": "VINDHYA",
            "kerberos": "ee1222109",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177aad",
            "name": "Gary Abshire V",
            "hostel": "VINDHYA",
            "kerberos": "cs5241418",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177ab8",
            "name": "Craig Wunsch",
            "hostel": "VINDHYA",
            "kerberos": "cs5231026",
            "isActive": true
        },
        {
            "id": "66d716e67df961bfb7177ad1",
            "name": "Ruben Sporer",
            "hostel": "VINDHYA",
            "kerberos": "mt1231814",
            "isActive": true
        }
    
    
    ]);
    const [formData, setFormData] = useState({
        name: "",
        kerberos: "",
        hostel: "",
        isActive:true
      });
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const totalPages = Math.ceil(data.length / rowsPerPage);

    const filteredData = data.filter((row) =>
        row.kerberos.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.name.toLowerCase().includes(searchQuery.toLowerCase())
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
        const newUser = { id: uuidv4(), ...formData };
        setData((prevData) => [...prevData, newUser]);
        setFormData({
            name: "",
            kerberos: "",
            hostel: "",
            isActive: true,
          })
          setIsDialogOpen(false);}
    return (
        <div className="h-full p-6 overflow-auto">
            <header className="flex justify-between">
                <div>
                    <h1 className="text-xl font-bold">USER MANAGEMENT</h1>
                    <span className="text-slate-500 mt-3 pt-5">Items Details Information</span>
                </div>
                <div>
                    <Button className="mr-10"><IoIosNotifications /></Button>
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
                        {/* <Button variant="outline" className="bg-green-500 text-white">
                            
                            Create User
                        </Button> */}
                        {/* Create User Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="bg-green-500 text-white" onClick={() => setIsDialogOpen(true)}><CiCirclePlus /> Create User</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create New User</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {/* Name Field */}
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
              className="bg-gray-500 text-white" onClick={() => setIsDialogOpen(false)}
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
                <div className="m-4 h-[calc(100vh-300px)] overflow-y-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]"><Checkbox /></TableHead>
                                <TableHead>Kerberos</TableHead>
                                <TableHead>Hostel</TableHead>
                                <TableHead>Account</TableHead>
                                <TableHead className="">QR</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paginatedData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell><Checkbox /></TableCell>
                                    <TableCell>{row.kerberos}</TableCell>
                                    <TableCell>{row.hostel}</TableCell>
                                    <TableCell>{row.isActive ? "Activated" : "Not Activated"}</TableCell>
                                    <TableCell>
                                        <Button variant="outline" className="bg-blue-500 text-white">
                                            QR
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="mt-5"><div className="flex flex-col items-center">
                        
                        <input
                            type="range"
                            min="1"
                            max={totalPages}
                            value={currentPage}
                            onChange={(e) => handlePageChange(Number(e.target.value))}
                            className="w-64"
                        />
                        <span className="text-slate-500  ">Showing {currentPage} to 10 out of 60 records</span>
                        {/* <span className="ml-2 text-blue-500 font-semibold">
                            Page {currentPage} of {totalPages}
                        </span> */}
                    </div>
                    </div>
                <div className="flex items-center justify-between mt-4 sticky   w-full">
                    
                    <div className="flex items-center">
                        <span>Showing</span>
                        <select
                            className="mx-2 border border-gray-300 rounded p-1"
                            value={rowsPerPage}
                            onChange={handleRowsPerPageChange}
                        >
                            <option value={3}>3</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                        </select>
                        <span>rows per page</span>
                    </div>

                    <div className="flex items-center">
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
    )
    };

export default UserManagement;
