import { AddTask } from '@/components/module/tasks/AddTask';
import TaskCard from '@/components/module/tasks/TaskCard';
import { selectFilter, selectTasks } from '@/redux/features/tasks/taskSlice';
import { useAppSelector } from '@/redux/hooks';
import React from 'react';

const Tasks = () => {

    const tasks = useAppSelector( selectTasks);
    console.log(tasks);
    

    return (
        <div>
           <h1> This is tasks page </h1> 
           <AddTask/>
           {
            tasks.map( task => ( <TaskCard  task={task} key={task.id}/> ))
           }
           
        </div>
    );
};

export default Tasks;