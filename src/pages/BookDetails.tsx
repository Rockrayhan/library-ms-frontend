import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SkeletonCard } from "@/components/layouts/SkeletonCard";
import { useGetBookByIdQuery } from "@/redux/api/baseApi";
import { Link, useParams } from "react-router";
import { Button } from "@/components/ui/button";

const BookDetails = () => {
  const { id } = useParams();
  const { data: response, isLoading, error } = useGetBookByIdQuery(id!);
  const book = response?.data;

  if (isLoading) return <SkeletonCard />;
  if (error || !book) return <p className="text-red-500">⚠️ Error fetching book.</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-background px-4">
      <Card className="max-w-lg w-full shadow-lg p-4 space-y-4">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">📚 {book.title}</CardTitle>
          <p className="text-muted-foreground text-sm">Detailed view of the book</p>
        </CardHeader>

        <CardContent className="space-y-2 text-base">
          <p><strong>👤 Author:</strong> {book.author}</p>
          <p><strong>🏷️ Genre:</strong> {book.genre}</p>
          <p><strong>🔢 ISBN:</strong> {book.isbn}</p>
          <p><strong>📦 Copies:</strong> {book.copies}</p>
          <p>
            <strong>✅ Available:</strong>{" "}
            <span className={book.available ? "text-green-600" : "text-red-500"}>
              {book.available ? "Yes" : "No"}
            </span>
          </p>
          <p><strong>📝 Description:</strong> {book.description || "No description availabe."}</p>
        </CardContent>

        <CardFooter>
          <Link to="/">
            <Button variant="outline">⬅ Back to All Books</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookDetails;
