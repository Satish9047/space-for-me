import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TableHeading<T> = {
  id: number;
  title: string;
  key: keyof T;
  className?: string;
  position?: number;
};

type TableInfo<T extends { id: number }> = {
  numberOfHeading?: number;
  headings: TableHeading<T>[];
  data: T[];
};

type Props<T extends { id: number }> = {
  tableInfo: TableInfo<T>;
};

export function BookingsTable<T extends { id: number }>({
  tableInfo,
}: Props<T>) {
  return (
    <Table className="w-full border rounded-md">
      <TableHeader>
        <TableRow>
          {tableInfo.headings.map((heading) => {
            return (
              <TableHead key={heading.id} className={heading.className}>
                {heading.title}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableInfo.data.map((rowItem) => (
          <TableRow key={rowItem.id}>
            {tableInfo.headings.map((heading) => {
              return (
                <TableCell key={heading.id} className={heading.className}>
                  {String(rowItem[heading.key])}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
