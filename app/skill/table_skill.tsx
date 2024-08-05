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
    skill_id: 7,
    user_id: 43,
    skill_name: "HTML",
    picture_skill: "http://api.andrialpian.my.id/api-andrialpian/uploads/picture_skill-1719216541460-183655366.png",
  },
  {
    skill_id: 8,
    user_id: 43,
    skill_name: "CSS",
    picture_skill: "http://api.andrialpian.my.id/api-andrialpian/uploads/picture_skill-1719216619458-520883046.png",
  },
  {
    skill_id: 9,
    user_id: 43,
    skill_name: "JAVASCRIPT",
    picture_skill: "http://api.andrialpian.my.id/api-andrialpian/uploads/picture_skill-1719370931746-232464430.png",
  },
  {
    skill_id: 10,
    user_id: 43,
    skill_name: "REACT",
    picture_skill: "http://api.andrialpian.my.id/api-andrialpian/uploads/picture_skill-1719370602420-458184238.png",
  },
  {
    skill_id: 11,
    user_id: 43,
    skill_name: "GITHUB",
    picture_skill: "http://api.andrialpian.my.id/api-andrialpian/uploads/picture_skill-1719370630541-683760665.png",
  },
  {
    skill_id: 12,
    user_id: 43,
    skill_name: "NODE JS",
    picture_skill: "http://api.andrialpian.my.id/api-andrialpian/uploads/picture_skill-1719370652104-532615581.png",
  },
  {
    skill_id: 13,
    user_id: 43,
    skill_name: "TYPESCRIPT",
    picture_skill: "http://api.andrialpian.my.id/api-andrialpian/uploads/picture_skill-1719370683154-764074194.png",
  },
  {
    skill_id: 14,
    user_id: 43,
    skill_name: "TAILWIND",
    picture_skill: "http://api.andrialpian.my.id/api-andrialpian/uploads/picture_skill-1719370703685-11570845.png",
  },
  
]

export type Sales = {
  skill_id: number
  user_id: number
  skill_name: string
  picture_skill: string
}

export const columns: ColumnDef<Sales>[] = [
  {
    accessorKey: "skill_id",
    header: "Id"
  },
  {
    accessorKey: "user_id",
    header: "User Id"
  },
  {
    accessorKey: "skill_name",
    header: "Skill Name"
  },
  {
    accessorKey: "picture_skill",
    header: "Picture Skill"
  },
  {
    accessorKey: "action",
    header: "Action"
  }
]

export function TableSkill() {
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
          value={(table.getColumn("skill_name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("skill_name")?.setFilterValue(event.target.value)
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
