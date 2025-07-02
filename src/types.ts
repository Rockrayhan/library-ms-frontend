export interface ITask {
  // id: string;
  title: string;
  description: string; 
  // dueDate: string;
  // isComplete: boolean;
  // priority: "High" | "Medium" | "Low"; 
}



export interface IBook {
  _id?: string;
  title: string;
  author: string;
  genre: "FICTION" | "NON_FICTION" | "SCIENCE" | "HISTORY" | "BIOGRAPHY" | "FANTASY";
  isbn: string;
  description?: string;
  copies: number;
  available?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
