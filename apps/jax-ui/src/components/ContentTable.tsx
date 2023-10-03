import * as React from 'react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { Content } from "../model/Content";
import { RowActions } from "./RowActions";
import { inMemoryContent as defaultData } from "../api/in-memory";

const columnHelper = createColumnHelper<Content>();
const peopleColumns = [
  // Display Column
  columnHelper.display({
    id: 'actions',
    cell: props => <RowActions row={props.row} />
  }),
  columnHelper.group({
    header: 'About',
    footer: props => props.column.id,
    columns: [
      // Accessor Column
      columnHelper.accessor('title', {
        header: () => 'Title',
        cell: info => info.getValue(),
        footer: props => props.column.id,
      }),
      // Accessor Column
      columnHelper.accessor('description', {
        header: () => 'Description',
        cell: info => info.getValue(),
        footer: props => props.column.id,
      })
    ]
  }),
  // Grouping Column
  columnHelper.group({
    header: 'Media Details',
    footer: props => props.column.id,
    columns: [
      // Accessor Column
      columnHelper.accessor('contentType', {
        header: () => 'content type',
        footer: props => props.column.id,
      }),
      columnHelper.accessor('contentUrl', {
        header: () => 'content url',
        footer: props => props.column.id,
      }),
    ]
  }),
]


export const ContentTable = () => {
  const [data, setData] = React.useState<Content[]>(() => [...defaultData])
  const rerender = React.useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data,
    columns: peopleColumns,
    getCoreRowModel: getCoreRowModel<Content>(),
  })

  return (
    <div className="p-2">
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {table.getFooterGroups().map(footerGroup => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
    <div className="h-4" />
    <button onClick={() => rerender()} className="border p-2">
      Rerender
    </button>
  </div>
  )
}