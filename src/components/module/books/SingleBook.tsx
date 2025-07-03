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
import { EditBook } from "./EditBook";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";
import { Link } from "react-router";
import { BorrowBook } from "./BorrowBook";

export function SingleBook({ item }: { item: IBook }) {
  const [deleteBook, { isLoading }] = useDeleteBookMutation();

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete ?")) {
      try {
        await deleteBook(item._id!).unwrap();
        toast.success("✅ Book deleted successfully!");
      } catch (error) {
        toast.error("❌ Failed to delete book.");
        console.error(error);
      }
    }
  };

  return (
    <Card className="w-full max-w-sm col-span-1 my-5 hover:shadow-teal-700 shadow-md ">
      <CardHeader>
        <CardTitle className="text-2xl text-teal-300">{item.title}</CardTitle>
        <CardDescription>
          {item.description || "No description provided."}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p>
          <strong>Author:</strong> {item.author}
        </p>
        <p>
          <strong>Genre:</strong> {item.genre}
        </p>
        <p>
          <strong>ISBN:</strong> {item.isbn}
        </p>
        <p>
          <strong>Copies:</strong> {item.copies}
        </p>
        <p>
          <strong>Available:</strong>{" "}
          <span className={item.available ? "text-green-600" : "text-red-500"}>
            {item.available ? "Yes" : "No"}
          </span>
        </p>
      </CardContent>
      <CardFooter className="flex gap-2.5 flex-wrap">
        <p> Actions : </p>

        <EditBook book={item} />

        <Button
          className="bg-red-700"
          onClick={handleDelete}
          disabled={isLoading}
        >
          {isLoading ? "Deleting..." : "Delete"}
        </Button>

        {item.available == true ? (
          <button>
            <BorrowBook book={item} />
          </button>
        ) : (
          <Button className="bg-slate-600 hover:bg-slate-600 w-full sm:w-auto">  Unavailabe </Button>
        )}
      </CardFooter>

      <CardFooter>
        <Link
          to={`/books/${item._id}`}
          className="text-teal-400 hover:underline"
        >
          See More ⮞
        </Link>
      </CardFooter>
    </Card>
  );
}
