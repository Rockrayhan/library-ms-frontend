import { AddBook } from "@/components/module/books/AddBook";
import TaskCard from "@/components/module/books/TaskCard";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import { selectFilter, selectTasks } from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonCard } from "@/components/layouts/SkeletonCard";
import { SingleBook } from "@/components/module/books/SingleBook";

const Books = () => {
  // const tasks = useAppSelector( selectTasks);
  // console.log(tasks);

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
          // <div key={item._id}>{item.title}</div>
          <SingleBook key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Books;
