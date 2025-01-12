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
  const [isModalOpen, setModalOpen] = useState(false);
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
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Kerberos ID</TableHead>
                    <TableHead>Meal</TableHead>
                    <TableHead>Booked/Used Slot</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                <TableRow>
                    <TableCell>No data available</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
                </TableBody>
            </Table>
            </TabsContent>

            {/* Tab Content: Find by User */}
            <TabsContent value="user">
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Kerberos ID</TableHead>
                    <TableHead>Meal</TableHead>
                    <TableHead>Booked/Used Slot</TableHead>
                    <TableHead>Enter Time</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                <TableRow>
                    <TableCell>No data available</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
                </TableBody>
            </Table>
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

