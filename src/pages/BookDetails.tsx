import { SkeletonCard } from "@/components/layouts/SkeletonCard";
import { useGetBookByIdQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const { data: response, isLoading, error } = useGetBookByIdQuery(id!);
  const book = response?.data;

   if (isLoading) {
     return (
       <>
         <SkeletonCard />
       </>
     );
   }
  if (error || !book) return <p>Error fetching book.</p>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">📚 {book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      <p><strong>Copies:</strong> {book.copies}</p>
      <p>
        <strong>Available:</strong>{" "}
        <span className={book.available ? "text-green-600" : "text-red-500"}>
          {book.available ? "Yes" : "No"}
        </span>
      </p>
      <p><strong>Description:</strong> {book.description || "No description."}</p>
    </div>
  );
};

export default BookDetails;
