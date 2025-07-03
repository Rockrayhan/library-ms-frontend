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
    <div>
      <h2 className="text-teal-300 text-4xl text-center font-bold my-6"> Here Are All {books.length} Books </h2>

      <AddBook />




      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((item: any) => (
          <SingleBook key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Books;
