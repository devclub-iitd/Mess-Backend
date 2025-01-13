import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Input } from "../components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select";

interface CreateMealModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CreateMealModal: React.FC<CreateMealModalProps> = ({ isOpen, onClose}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Blurred Background */}
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg">
          {/* Modal Header */}
          <h2 className="text-xl font-semibold mb-4">Create meal</h2>

          {/* Name, ID Section */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">NAME, ID</label>
            <Input
              placeholder="Enter name and ID"
              className="w-full"
            />
          </div>

          {/* Hostel Dropdown */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Hostel</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select store" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hostel1">Hostel 1</SelectItem>
                <SelectItem value="hostel2">Hostel 2</SelectItem>
                <SelectItem value="hostel3">Hostel 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <Button
              variant="outline"
              className="px-4 py-2"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className="bg-brown-600 text-white px-6 py-2 rounded-md"
            >
              Create
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const Consumption = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [userdata , setUserData] = useState(
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
    const [currentUserPage, setCurrentUserPage] = useState(1);
    const [currentMealPage, setCurrentMealPage] = useState(1);
    const [rowsPerUserPage, setRowsPerUserPage] = useState(10);
    const [rowsPerMealPage, setRowsPerMealPage] = useState(10);
    const totalMealPages = Math.ceil(mealdata.length / rowsPerMealPage);
    const totalUserPages = Math.ceil(userdata.length / rowsPerUserPage)
    const [isModalOpen, setModalOpen] = useState(false);
    const paginatedUserData = userdata.slice(
    (currentUserPage - 1) * rowsPerUserPage,
    currentUserPage * rowsPerUserPage
);
  const paginatedMealData = mealdata.slice(
    (currentMealPage - 1) * rowsPerMealPage,
    currentMealPage * rowsPerMealPage
  );

const handleUserPageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalUserPages) {
        setCurrentUserPage(newPage);
    }
};

const handleMealPageChange = (newPage: number) => {
  if (newPage > 0 && newPage <= totalMealPages) {
      setCurrentUserPage(newPage);
  }
};

const handleRowsPerUserPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerUserPage(Number(event.target.value));
    setCurrentUserPage(1); // Reset to first page
};

const handleRowsPerMealPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  setRowsPerMealPage(Number(event.target.value));
  setCurrentMealPage(1); // Reset to first page
};


// const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//     setCurrentPage(1); // Reset to first page on new search
// };
  return (
    <div>
        <div className="p-6 relative ${isModalOpen ? 'blur-sm' : ''}">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
            <div>
            <h1 className="text-2xl font-bold">Consumption</h1>
            <p className="text-gray-600">Items detail Information</p>
            </div>
            <div className="flex items-center gap-4">
            <Input placeholder="Search..." className="w-60" />
            <div className="flex items-center gap-2">
                <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
                />
                <div>
                <p className="font-medium">Mathias W.</p>
                <p className="text-sm text-gray-500">Store Manager</p>
                </div>
            </div>
            </div>
        </div>

        {/* Create Meal Token Button */}
        <div className="mb-6">
            <Button className="bg-green-600 text-white px-6 py-2 rounded-md" onClick={() => setModalOpen(true)}>
            Create meal token
            </Button>
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
            <div className="m-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Entry Number</TableHead>
                      <TableHead>Meal</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedMealData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.user_id.name}</TableCell>
                        <TableCell>{row.user_id.kerberos}</TableCell>
                        <TableCell>{row.meal_id.start_time}</TableCell>
                        <TableCell>{row.status}</TableCell>
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
                    value={rowsPerMealPage}
                    onChange={handleRowsPerMealPageChange}
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
                    onClick={() => handleMealPageChange(currentMealPage - 1)}
                    disabled={currentMealPage === 1}
                  >
                    Previous
                  </Button>
                  <span className="mx-4">${currentMealPage} of ${totalMealPages}</span>
                  <Button
                    variant="outline"
                    onClick={() => handleMealPageChange(currentMealPage + 1)}
                    disabled={currentMealPage === totalMealPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Tab Content: Find by User */}
            <TabsContent value="user">
            <div className="m-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Entry Number</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Entry Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedUserData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.user_id.name}</TableCell>
                        <TableCell>{row.user_id.kerberos}</TableCell>
                        <TableCell>{row.meal_id.start_time}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell>{row.enter_time}</TableCell>
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
                    value={rowsPerMealPage}
                    onChange={handleRowsPerUserPageChange}
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
                    onClick={() => handleUserPageChange(currentUserPage - 1)}
                    disabled={currentUserPage === 1}
                  >
                    Previous
                  </Button>
                  <span className="mx-4">${currentUserPage} of ${totalUserPages}</span>
                  <Button
                    variant="outline"
                    onClick={() => handleUserPageChange(currentUserPage + 1)}
                    disabled={currentUserPage === totalUserPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </TabsContent>
        </Tabs>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
            <div className="text-gray-600">Showing 1 to 10 out of 40 records</div>
            <div className="flex items-center gap-2">
            <Button variant="outline" className="w-8 h-8">
                1
            </Button>
            <Button variant="outline" className="w-8 h-8">
                2
            </Button>
            <Button variant="outline" className="w-8 h-8">
                3
            </Button>
            <Button variant="outline" className="w-8 h-8">
                4
            </Button>
            </div>
        </div>
        </div>
        <CreateMealModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
    
  );
};

export default Consumption;

