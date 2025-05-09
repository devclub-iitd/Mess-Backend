import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/ui/page-header"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
import { useUser } from "@/context/UserContext";

interface Meal {
    _id: string;
    name: string;
    mess_id: {
        name: string;
    };
    start_time: string;
    end_time: string;
}

const columns: ColumnDef<Meal>[] = [
    {
        accessorKey: "name",
        header: "Menu",
        enableSorting: true,
        enableGlobalFilter: true
    },
    {
        accessorKey: "mess_id.name",
        header: "Hostel",
    },
    {
        accessorKey: "start_time",
        header: "Start Time",
        enableSorting: true,
        filterFn: (row, id, value) => {
            const startTime = new Date(row.getValue(id));
            const filterDate = new Date(value);
            return startTime.toDateString() === filterDate.toDateString();
        }
    },
    {
        accessorKey: "end_time",
        header: "End Time",
    },
]

const Meal = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentMeals, setCurrentMeals] = useState<Meal[]>([]);
    const [futureMeals, setFutureMeals] = useState<Meal[]>([]);
    const [pastMeals, setPastMeals] = useState<Meal[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [name, setName] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [capacity, setCapacity] = useState(1000); // default capacity
    const [price, setPrice] = useState(0); // default price
    const [assignToAll, setAssignToAll] = useState(false);
    const [message, setMessage] = useState("");
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

    const { user } = useUser();

    const fetchMeals = async () => {
        try {
            setIsLoading(true);
            // Fetch current meals
            const currentResponse = await fetch(
                `/api/manager/getMeals?limit=0&messName=${user!.messNames[0]}`,
                { credentials: "include" }
            );
            const currentData: Meal[] = await currentResponse.json();
            setCurrentMeals(currentData);

            // Fetch future meals
            const futureResponse = await fetch(
                `/api/manager/getMeals?limit=10000&messName=${user!.messNames[0]}`,
                { credentials: "include" }
            );
            const futureData: Meal[] = await futureResponse.json();
            setFutureMeals(futureData);

            // Fetch past meals
            const pastResponse = await fetch(
                `/api/manager/getMeals?limit=-10000&messName=${user!.messNames[0]}`,
                { credentials: "include" }
            );
            const pastData: Meal[] = await pastResponse.json();
            setPastMeals(pastData);
        } catch (error) {
            console.error("Error fetching meals:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMeals();
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        start_time: "",
        end_time: "",
    });
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Reset to first page on new search
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleCreateMeal = async () => {
        const { user } = useUser();
        const messName = user!.messNames[0];
        try {
            const response = await fetch("/api/manager/createMeal", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    name,
                    start_time: startTime,
                    end_time: endTime,
                    capacity,
                    price,
                    messName,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 201) {
                setMessage("Meal Successfully Created!");
                if (assignToAll) {
                    const result = await response.json();
                    const mealId = result["_id"];
                    setMessage((prev) => `${prev}\nAssigning to all users...`);

                    const bulkResponse = await fetch("/api/manager/bulkCreateMealToken", {
                        method: "POST",
                        credentials: "include",
                        body: JSON.stringify({ meal_id: mealId }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    if (bulkResponse.status === 201) {
                        setMessage((prev) => `${prev}\nAssigned to all users!`);
                    } else {
                        const bulkError = await bulkResponse.text();
                        setMessage((prev) => `${prev}\n${bulkError}`);
                    }
                }
            } else {
                const errorText = await response.text();
                setMessage(errorText);
            }
        } catch (error) {
            setMessage("An error occurred while creating the meal.");
            console.error(error);
        }
    };

    const handleSubmit = () => {
        setName(formData.name);
        setStartTime(formData.start_time);
        setEndTime(formData.end_time);
        handleCreateMeal();
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

    // Function to categorize meals
    const categorizeMeals = (meals: Meal[]) => {
        const now = new Date();
        const pastMeals: Meal[] = [];
        const presentMeals: Meal[] = [];
        const futureMeals: Meal[] = [];

        meals.forEach(meal => {
            const startTime = new Date(meal.start_time);
            const endTime = new Date(meal.end_time);

            if (endTime < now) {
                pastMeals.push(meal);
            } else if (startTime > now) {
                futureMeals.push(meal);
            } else {
                presentMeals.push(meal);
            }
        });

        return { pastMeals, presentMeals, futureMeals };
    };

    const { pastMeals: categorizedPastMeals, presentMeals: categorizedPresentMeals, futureMeals: categorizedFutureMeals } = categorizeMeals(data);

    return (
        <div className="flex-1 overflow-auto">
            <PageHeader 
                title="MEALS MANAGEMENT" 
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
                            <Button variant="outline" className="bg-blue-500 text-white" onClick={fetchMeals}>
                                <RefreshCcw className="mr-2 h-4 w-4" />
                                Refresh
                            </Button>
                        </div>
                    </div>

                    <Tabs defaultValue="present">
                        <TabsList className="mb-4">
                            <TabsTrigger value="present">Present Meals</TabsTrigger>
                            <TabsTrigger value="past">Past Meals</TabsTrigger>
                            <TabsTrigger value="future">Future Meals</TabsTrigger>
                        </TabsList>

                        <TabsContent value="present">
                            <div>
                                <DataTable
                                    columns={columns}
                                    data={categorizedPresentMeals}
                                    searchableColumns={[
                                        {
                                            id: "name",
                                            placeholder: "Search by meal..."
                                        }
                                    ]}
                                    filterableColumns={[
                                        {
                                            id: "start_time",
                                            title: "Start Time",
                                            type: "date",
                                            options: []
                                        }
                                    ]}
                                />
                            </div>
                        </TabsContent>

                        <TabsContent value="past">
                            <div>
                                <DataTable
                                    columns={columns}
                                    data={categorizedPastMeals}
                                    searchableColumns={[
                                        {
                                            id: "name",
                                            placeholder: "Search by meal..."
                                        }
                                    ]}
                                    filterableColumns={[
                                        {
                                            id: "start_time",
                                            title: "Start Time",
                                            type: "date",
                                            options: []
                                        }
                                    ]}
                                />
                            </div>
                        </TabsContent>

                        <TabsContent value="future">
                            <div>
                                <DataTable
                                    columns={columns}
                                    data={categorizedFutureMeals}
                                    searchableColumns={[
                                        {
                                            id: "name",
                                            placeholder: "Search by meal..."
                                        }
                                    ]}
                                    filterableColumns={[
                                        {
                                            id: "start_time",
                                            title: "Start Time",
                                            type: "date",
                                            options: []
                                        }
                                    ]}
                                />
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Meal;