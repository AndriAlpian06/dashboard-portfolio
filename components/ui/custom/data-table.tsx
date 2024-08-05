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

interface DataTables<TData, TValue>{
  columns: ColumnDef<TData, TValue>[],
  data: TData[]
}

export function RencentSales() {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )

  const table = useReactTable({
    data,
    columns,
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
      
    </div>
  )
}
