import { Row } from "@tanstack/react-table"

export type RowActionsProps<T> = {
  row: Row<T>
}

export const RowActions = <T,>({row}:RowActionsProps<T>) => (
  <div>
    <button>Edit</button>
    <button>Delete</button>
  </div>
)