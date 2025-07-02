import { AddBook } from '@/components/module/books/AddBook';
import TaskCard from '@/components/module/books/TaskCard';
import { useGetBooksQuery } from '@/redux/api/baseApi';
import { selectFilter, selectTasks } from '@/redux/features/tasks/taskSlice';
import { useAppSelector } from '@/redux/hooks';
import React from 'react';

const Tasks = () => {

    // const tasks = useAppSelector( selectTasks);
    // console.log(tasks);

    const {data : response, isLoading } = useGetBooksQuery(undefined) ;
    const books = response?.data ?? [];


  
    if( isLoading) {
        return <> <p> Loading... </p> </>
    }
    
    

    return (
        <div>
           <h1> This is tasks page </h1> 
           <AddBook/>
        
            {/* { !isLoading &&
                data?.map((item : any) => <div> {item.author}  </div> )
            }
          */}
            {books.map((item : any) => (
      <div key={item._id}>{item.title}</div>
    ))}
             
             
           
        </div>
    );
};

export default Tasks;