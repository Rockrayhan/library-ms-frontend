// import App from "@/App";
import App from "@/App";
import Home from "@/pages/Home";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router";
import Books from "@/pages/Books";


const router = createBrowserRouter([
  {
    path: "/",
    // Component: App,
    element: <App/>,
    children: [
        {
            // path: "",
            index:true,
            Component: Books
        },
        {
            path: "users",
            Component: Users
        },
        {
            path: "tasks",
            Component: Books
        }
    ]
  },
]);

export default router ;