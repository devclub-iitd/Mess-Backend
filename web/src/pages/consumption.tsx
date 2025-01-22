import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { CiCirclePlus } from "react-icons/ci";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/ui/page-header";

interface CreateMealModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface ConsumptionData {
    _id: string;
    user_id: {
        _id: string;
        kerberos: string;
        name: string;
        photo: string;
        hostel: string;
        mess_id: string;
        isActive: boolean;
        __v: number;
    };
    meal_id: {
        _id: string;
        mess_id: string;
        name: string;
        start_time: string;
        __v: number;
    };
    status: string;
    __v: number;
    enter_time?: string | null;
}

const columns: ColumnDef<ConsumptionData>[] = [
    {
        id: "name",
        accessorFn: (row) => row.user_id.name,
        header: "Name",
        enableSorting: true,
        filterFn: (row, id, value) => {
            if (!value) return true;
            const name = row.getValue(id) as string;
            return name.toLowerCase().includes((value as string).toLowerCase());
        }
    },
    {
        accessorKey: "user_id.kerberos",
        header: "Entry Number",
    },
    {
        accessorKey: "meal_id.start_time",
        header: "Date",
    },
    {
        accessorKey: "status",
        header: "Status",
        enableSorting: true,
        filterFn: (row, id, value) => {
            if (value === "all") return true;
            if (!value) return true;
            return row.getValue(id) === value;
        }
    },
    {
        accessorKey: "enter_time",
        header: "Entry Time",
    },
]

const Consumption = () => {
    const [userdata, setUserData] = useState(
        [
            {
                "_id": "66d734ca2f8b42b2547af400",
                "user_id": {
                    "_id": "66d716e67df961bfb7177882",
                    "kerberos": "ph1222546",
                    "name": "Dr. Casey Tillman III",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "66d72ec120fcf3299c0cdd89",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Breakfast",
                    "start_time": "2024-08-04T01:15:00.000Z",
                    "end_time": "2024-08-04T04:15:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "enter_time": null,
                "__v": 0
            },
            {
                "_id": "66d734cb2f8b42b2547b0f58",
                "user_id": {
                    "_id": "66d716e67df961bfb7177882",
                    "kerberos": "ph1222546",
                    "name": "Dr. Casey Tillman III",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "66d72ec120fcf3299c0cdd97",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Lunch",
                    "start_time": "2024-08-04T06:15:00.000Z",
                    "end_time": "2024-08-04T08:45:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "USED",
                "enter_time": "2024-08-04T08:10:01.149Z",
                "__v": 0
            },
            {
                "_id": "66d734cb2f8b42b2547b2ab0",
                "user_id": {
                    "_id": "66d716e67df961bfb7177882",
                    "kerberos": "ph1222546",
                    "name": "Dr. Casey Tillman III",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "66d72ec120fcf3299c0cdda5",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Dinner",
                    "start_time": "2024-08-04T13:15:00.000Z",
                    "end_time": "2024-08-04T15:45:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "USED",
                "enter_time": "2024-08-04T13:43:09.733Z",
                "__v": 0
            },
            {
                "_id": "66d734cb2f8b42b2547b4608",
                "user_id": {
                    "_id": "66d716e67df961bfb7177882",
                    "kerberos": "ph1222546",
                    "name": "Dr. Casey Tillman III",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "66d72ec120fcf3299c0cddb3",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Breakfast",
                    "start_time": "2024-08-05T01:15:00.000Z",
                    "end_time": "2024-08-05T04:15:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "USED",
                "enter_time": "2024-08-05T02:42:14.831Z",
                "__v": 0
            },
            {
                "_id": "66d734cc2f8b42b2547b6160",
                "user_id": {
                    "_id": "66d716e67df961bfb7177882",
                    "kerberos": "ph1222546",
                    "name": "Dr. Casey Tillman III",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "66d72ec120fcf3299c0cddc1",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Lunch",
                    "start_time": "2024-08-05T06:15:00.000Z",
                    "end_time": "2024-08-05T08:45:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "USED",
                "enter_time": "2024-08-05T06:33:14.729Z",
                "__v": 0
            },
            {
                "_id": "66d734cc2f8b42b2547b7cb8",
                "user_id": {
                    "_id": "66d716e67df961bfb7177882",
                    "kerberos": "ph1222546",
                    "name": "Dr. Casey Tillman III",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "66d72ec120fcf3299c0cddcf",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Dinner",
                    "start_time": "2024-08-05T13:15:00.000Z",
                    "end_time": "2024-08-05T15:45:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "USED",
                "enter_time": "2024-08-05T14:15:05.897Z",
                "__v": 0
            },
            {
                "_id": "66d734cc2f8b42b2547b9810",
                "user_id": {
                    "_id": "66d716e67df961bfb7177882",
                    "kerberos": "ph1222546",
                    "name": "Dr. Casey Tillman III",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "66d72ec120fcf3299c0cdddd",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Breakfast",
                    "start_time": "2024-08-06T01:15:00.000Z",
                    "end_time": "2024-08-06T04:15:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "enter_time": null,
                "__v": 0
            },
            {
                "_id": "66d734cc2f8b42b2547bb368",
                "user_id": {
                    "_id": "66d716e67df961bfb7177882",
                    "kerberos": "ph1222546",
                    "name": "Dr. Casey Tillman III",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "66d72ec120fcf3299c0cddeb",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Lunch",
                    "start_time": "2024-08-06T06:15:00.000Z",
                    "end_time": "2024-08-06T08:45:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "enter_time": null,
                "__v": 0
            },
            {
                "_id": "66d734cc2f8b42b2547bcec0",
                "user_id": {
                    "_id": "66d716e67df961bfb7177882",
                    "kerberos": "ph1222546",
                    "name": "Dr. Casey Tillman III",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "66d72ec120fcf3299c0cddf9",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Dinner",
                    "start_time": "2024-08-06T13:15:00.000Z",
                    "end_time": "2024-08-06T15:45:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "USED",
                "enter_time": "2024-08-06T15:11:25.200Z",
                "__v": 0
            },
            {
                "_id": "66d734cd2f8b42b2547bea18",
                "user_id": {
                    "_id": "66d716e67df961bfb7177882",
                    "kerberos": "ph1222546",
                    "name": "Dr. Casey Tillman III",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "66d72ec120fcf3299c0cde07",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Breakfast",
                    "start_time": "2024-08-07T01:15:00.000Z",
                    "end_time": "2024-08-07T04:15:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "USED",
                "enter_time": "2024-08-07T03:28:19.684Z",
                "__v": 0
            },
        ]
    )
    const [mealdata, setMealData] = useState(
        [
            {
                "_id": "6712831f9edfb01dd0a41596",
                "user_id": {
                    "_id": "66d716e67df961bfb7177999",
                    "kerberos": "ee1242265",
                    "name": "Reginald Runolfsson-Zboncak",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a4157b",
                "user_id": {
                    "_id": "66d716e67df961bfb7177875",
                    "kerberos": "ep1201512",
                    "name": "Earl Ortiz",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": false,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a41590",
                "user_id": {
                    "_id": "66d716e67df961bfb7177950",
                    "kerberos": "ch1211936",
                    "name": "Ms. Myrtle Kutch",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a41585",
                "user_id": {
                    "_id": "66d716e67df961bfb71778da",
                    "kerberos": "ee3231753",
                    "name": "Wilbert Kautzer",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a4159a",
                "user_id": {
                    "_id": "66d716e67df961bfb71779be",
                    "kerberos": "mt5232018",
                    "name": "Vincent Williamson",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a4157c",
                "user_id": {
                    "_id": "66d716e67df961bfb7177882",
                    "kerberos": "ph1222546",
                    "name": "Dr. Casey Tillman III",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a41580",
                "user_id": {
                    "_id": "66d716e67df961bfb71778a2",
                    "kerberos": "mt5221825",
                    "name": "Jeanne Leffler",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a4157d",
                "user_id": {
                    "_id": "66d716e67df961bfb7177884",
                    "kerberos": "ce1211202",
                    "name": "Brandon Buckridge",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a415a3",
                "user_id": {
                    "_id": "66d716e67df961bfb7177a39",
                    "kerberos": "cs1241338",
                    "name": "Janice Schaefer",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a415a5",
                "user_id": {
                    "_id": "66d716e67df961bfb7177a43",
                    "kerberos": "ep1201406",
                    "name": "Lula Steuber",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": false,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a415a8",
                "user_id": {
                    "_id": "66d716e67df961bfb7177a8c",
                    "kerberos": "ch1201622",
                    "name": "Erik Reynolds II",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": false,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a415ab",
                "user_id": {
                    "_id": "66d716e67df961bfb7177aad",
                    "kerberos": "cs5241418",
                    "name": "Gary Abshire V",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a415a1",
                "user_id": {
                    "_id": "66d716e67df961bfb7177a1c",
                    "kerberos": "me2221711",
                    "name": "Miss Ida Schoen",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a415a4",
                "user_id": {
                    "_id": "66d716e67df961bfb7177a3f",
                    "kerberos": "mes242657",
                    "name": "Cynthia Hansen",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a415b0",
                "user_id": {
                    "_id": "66d716e67df961bfb7177aef",
                    "kerberos": "mes231859",
                    "name": "Ada Schamberger Sr.",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a415b1",
                "user_id": {
                    "_id": "66d716e67df961bfb7177b30",
                    "kerberos": "cs5231210",
                    "name": "Patrick Murphy",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a415b3",
                "user_id": {
                    "_id": "66d716e67df961bfb7177b52",
                    "kerberos": "mt5212412",
                    "name": "Pearl Gerhold",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a415b9",
                "user_id": {
                    "_id": "66d716e67df961bfb7177ba4",
                    "kerberos": "ce1232171",
                    "name": "Julia Kreiger",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a4157f",
                "user_id": {
                    "_id": "66d716e67df961bfb7177894",
                    "kerberos": "mt1201156",
                    "name": "Violet Balistreri",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": false,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a41581",
                "user_id": {
                    "_id": "66d716e67df961bfb71778b1",
                    "kerberos": "ee3231572",
                    "name": "Lee Botsford",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a41589",
                "user_id": {
                    "_id": "66d716e67df961bfb7177901",
                    "kerberos": "mt5232086",
                    "name": "Ann Schumm",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a4158d",
                "user_id": {
                    "_id": "66d716e67df961bfb7177933",
                    "kerberos": "ch1241824",
                    "name": "Whitney Anderson",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a4159f",
                "user_id": {
                    "_id": "66d716e67df961bfb71779fc",
                    "kerberos": "ch7231730",
                    "name": "Delbert Watsica",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a415a0",
                "user_id": {
                    "_id": "66d716e67df961bfb7177a1b",
                    "kerberos": "ee3242363",
                    "name": "Eula Corkery",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": true,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
            {
                "_id": "6712831f9edfb01dd0a415a6",
                "user_id": {
                    "_id": "66d716e67df961bfb7177a5e",
                    "kerberos": "tt1202109",
                    "name": "Dr. Angel Bahringer",
                    "photo": "rhrhjhgkshkrg.jpg",
                    "hostel": "VINDHYA",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "isActive": false,
                    "__v": 0
                },
                "meal_id": {
                    "_id": "6712831e9edfb01dd0a41574",
                    "mess_id": "66d7128a1c004b02f7459921",
                    "name": "Updation Demo",
                    "start_time": "2024-10-18T13:47:00.000Z",
                    "end_time": "2024-10-19T03:47:00.000Z",
                    "capacity": 1000,
                    "price": 0,
                    "fooditem_ids": [],
                    "__v": 0
                },
                "status": "BOOKED",
                "__v": 0
            },
        ]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        hostel: ""
    });
    const [kerberos, setKerberos] = useState("");
    const [meal, setMeal] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCreateMealToken = async () => {
        try {
            const response = await fetch("/api/manager/createMealToken", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({ kerberos, meal_id: meal }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 201) {
                console.log("Meal Token Successfully Created!");
            } else {
                const errorText = await response.text();
                console.log(errorText);
            }
        } catch (error) {
            console.log("An error occurred while creating the meal token.");
            console.error(error);
        }
    };

    const handleSubmit = () => {
        setKerberos(formData.name);
        setMeal(formData.hostel); // This should be meal id
        handleCreateMealToken();
        setFormData({
            name: "",
            hostel: ""
        });
        setIsDialogOpen(false);
    };

    return (
        <div className="h-screen overflow-hidden">
            <PageHeader 
                title="CONSUMPTION" 
                subtitle="Items Details Information" 
            />

            <div className="border rounded-lg mx-6">
                <div className="p-6 h-[calc(100vh-8rem)]">
                    {/* Create Meal Token Button with Dialog */}
                    <div className="flex justify-end gap-4 mb-4">
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <Button className="bg-green-500 text-white">
                                    <CiCirclePlus className="mr-2" /> Create meal token
                                </Button>
                            </DialogTrigger>

                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Create Meal Token</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                    <div>
                                        <Label htmlFor="name">NAME, ID</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Enter name and ID"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="hostel">Hostel</Label>
                                        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, hostel: value }))}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select hostel" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="VINDHYA">Vindhya</SelectItem>
                                                <SelectItem value="HIMADRI">Himadri</SelectItem>
                                                <SelectItem value="KAILASH">Kailash</SelectItem>
                                            </SelectContent>
                                        </Select>
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
                                        Create
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>

                    {/* Tabs Section */}
                    <Tabs defaultValue="meal">
                        <TabsList className="mb-4 flex justify-center gap-4">
                            <TabsTrigger
                                value="meal"
                                className="px-6 py-2 border-b-2 border-blue-500 text-blue-500"
                            >
                                Find by meal
                            </TabsTrigger>
                            <TabsTrigger value="user" className="px-6 py-2 text-gray-600">
                                Find by user
                            </TabsTrigger>
                        </TabsList>

                        {/* Tab Content: Find by Meal */}
                        <TabsContent value="meal">
                            <div className="h-[calc(100vh-300px)]">
                                <DataTable columns={columns} data={mealdata} />
                            </div>
                        </TabsContent>

                        {/* Tab Content: Find by User */}
                        <TabsContent value="user">
                            <div className="h-[calc(100vh-300px)]">
                                <DataTable
                                    columns={columns}
                                    data={userdata}
                                    searchableColumns={[
                                        {
                                            id: "name",
                                            placeholder: "Search by name..."
                                        }
                                    ]}
                                    filterableColumns={[
                                        {
                                            id: "status",
                                            title: "Status",
                                            options: [
                                                { label: "All", value: "all" },
                                                { label: "Booked", value: "BOOKED" },
                                                { label: "Used", value: "USED" }
                                            ]
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

export default Consumption;

