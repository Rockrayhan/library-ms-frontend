import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import type { IBook } from "@/types";



export function SingleBook({ item }: { item: IBook }) {
  return (
    <Card className="w-full max-w-sm col-span-1 my-5 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl">{item.title}</CardTitle>
        <CardDescription>{item.description || "No description provided."}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p><strong>Author:</strong> {item.author}</p>
        <p><strong>Genre:</strong> {item.genre}</p>
        <p><strong>ISBN:</strong> {item.isbn}</p>
        <p><strong>Copies:</strong> {item.copies}</p>
        <p>
          <strong>Available:</strong>{" "}
          <span className={item.available ? "text-green-600" : "text-red-500"}>
            {item.available ? "Yes" : "No"}
          </span>
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline">
          Actions
        </Button>
      </CardFooter>
    </Card>
  );
}
