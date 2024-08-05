"use client"

import * as React from "react"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "postcss"
import { Button } from "@/components/ui/button"

const data: Sales[] = [
  {
    id: "1",
    product: "Laptop",
    qty: 2,
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "2",
    product: "Flashdisk",
    qty: 2,
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3",
    product: "RAM",
    qty: 2,
    amount: 316,
    status: "pending",
    email: "ken99@yahoo.com",
  },
  {
    id: "4",
    product: "CPU",
    qty: 2,
    amount: 316,
    status: "pending",
    email: "ken99@yahoo.com",
  },
  {
    id: "5",
    product: "Keyboard",
    qty: 2,
    amount: 316,
    status: "processing",
    email: "ken99@yahoo.com",
  },
  {
    id: "6",
    product: "Mouse",
    qty: 2,
    amount: 316,
    status: "processing",
    email: "ken99@yahoo.com",
  },
  {
    id: "7",
    product: "Laptop Macbook M1",
    qty: 2,
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "8",
    product: "Laptop Lenovo Thinkpad",
    qty: 2,
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "9",
    product: "Laptop Hp",
    qty: 2,
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "10",
    product: "Laptop Macbook M2",
    qty: 2,
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "11",
    product: "Laptop Macbook M2",
    qty: 2,
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  }
]

export type Sales = {
  id: string
  product: string
  amount: number
  qty: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Sales>[] = [
  {
    accessorKey: "product",
    header: "Product"
  },
  {
    accessorKey: "amount",
    header: "Amount"
  },
  {
    accessorKey: "qty",
    header: "Qty"
  },
  {
    accessorKey: "status",
    header: "status"
  },
  {
    accessorKey: "email",
    header: "email"
  }
]

export function RecentSales() {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )

  const table = useReactTable({
    data,
    columns,
    initialState:{
      pagination:{
        "pageIndex":0,
        "pageSize":5
      }
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <input
          placeholder="Filter product..."
          value={(table.getColumn("product")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("product")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
