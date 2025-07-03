import { SkeletonCard } from "@/components/layouts/SkeletonCard";
import { useGetBorrowedBooksSummaryQuery } from "@/redux/api/baseApi";


const BorrowSummary = () => {
  const { data: response, isLoading, error } = useGetBorrowedBooksSummaryQuery(undefined);
  const borrowedBooks = response?.data || [];

    if (isLoading) {
      return (
        <>
          <SkeletonCard />
        </>
      );
    }
  if (error) return <p>Error loading borrowed books summary.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">📚 Borrowed Books Summary</h2>

      <table className="min-w-full border border-gray-300 rounded">
        <thead className="bg-slate-700 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Book Title</th>
            <th className="py-2 px-4 text-left">ISBN</th>
            <th className="py-2 px-4 text-left">Total Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {borrowedBooks.map((entry: any, idx: number) => (
            <tr key={idx} className="border-t border-gray-300">
              <td className="py-2 px-4">{entry.book.title}</td>
              <td className="py-2 px-4">{entry.book.isbn}</td>
              <td className="py-2 px-4">{entry.totalQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowSummary;
