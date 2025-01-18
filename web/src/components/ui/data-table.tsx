"use client"

import * as React from "react"
import { useState } from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  getFilteredRowModel,
  ColumnFiltersState,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Input } from "./input"
import { Button } from "./button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "./dropdown-menu"
import { DataTablePagination } from "../data-table-pagination"

interface DataTableProps<TData> {
  columns: ColumnDef<TData, any>[]
  data: TData[]
  searchableColumns?: {
    id: string
    placeholder?: string
  }[]
  filterableColumns?: {
    id: string
    title: string
    options: {
      label: string
      value: string
    }[]
    type?: "date"
  }[]
}

const renderCell = (value: unknown): React.ReactNode => {
  if (value === null || value === undefined) return '';
  if (React.isValidElement(value)) return value;
  return String(value);
};

export function DataTable<TData>({
  columns,
  data,
  searchableColumns = [],
  filterableColumns = [],
}: DataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div>
      <div className="flex items-center gap-4 py-4">
        {searchableColumns.map(({ id, placeholder }) => (
          <Input
            key={id}
            placeholder={placeholder}
            value={(table.getColumn(id)?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn(id)?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        ))}
        {filterableColumns.map(({ id, title, options, type }) => (
          <DropdownMenu key={id}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                {title} {table.getColumn(id)?.getFilterValue() ? '✓' : ''}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {type === "date" ? (
                <Input
                  type="date"
                  onChange={(e) => table.getColumn(id)?.setFilterValue(e.target.value)}
                  className="m-2"
                />
              ) : (
                options.map((option) => (
                  <DropdownMenuCheckboxItem
                    key={option.value}
                    checked={table.getColumn(id)?.getFilterValue() === option.value}
                    onCheckedChange={() =>
                      table.getColumn(id)?.setFilterValue(
                        table.getColumn(id)?.getFilterValue() === option.value
                          ? undefined
                          : option.value
                      )
                    }
                  >
                    {option.label}
                  </DropdownMenuCheckboxItem>
                ))
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const canSort = header.column.getCanSort()
                  return (
                    <TableHead 
                      key={header.id}
                      className={canSort ? "cursor-pointer select-none" : ""}
                      onClick={canSort ? header.column.getToggleSortingHandler() : undefined}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {renderCell(flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      ))}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  )
} 