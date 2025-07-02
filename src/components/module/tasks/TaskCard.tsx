import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import type { ITask } from '@/types';
import React from 'react';



interface IProps {
    task: ITask
}


const TaskCard = ({task} : IProps ) => {
  const { title, description,priority } = task;
    return (
        <div>
            <div className='bg-teal-900 text-white flex justify-around p-3'>

                

                <div>
                    <span className={cn('h-[50px] w-[50px] rounded-full p-1', {
                        'bg-green-500' : task.priority == "Low",
                        'bg-yellow-500' : task.priority == "Medium",
                        'bg-red-500' : task.priority == "High",
                    })}> {priority} </span>
                    <h3> {title} </h3>
                    <p> {description} </p>
                </div>

                <div>
                    <Checkbox/>
                </div>

            </div>
        </div>
    );
};

export default TaskCard;