import { AddBook } from "@/components/module/books/AddBook";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import { SkeletonCard } from "@/components/layouts/SkeletonCard";
import { SingleBook } from "@/components/module/books/SingleBook";

const Books = () => {
  const { data: response, isLoading } = useGetBooksQuery(undefined);
  const books = response?.data ?? [];

  if (isLoading) {
    return (
      <>
        <SkeletonCard />
      </>
    );
  }

  return (
    <div className="container">
      <h1> This is tasks page </h1>
      <AddBook />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {books.map((item: any) => (
          <SingleBook key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Books;
