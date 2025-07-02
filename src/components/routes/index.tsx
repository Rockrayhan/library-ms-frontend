// import App from "@/App";
import App from "@/App";
import Home from "@/pages/Home";
import Tasks from "@/pages/Tasks";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    // Component: App,
    element: <App/>,
    children: [
        {
            // path: "",
            index:true,
            Component: Home
        },
        {
            path: "users",
            Component: Users
        },
        {
            path: "tasks",
            Component: Tasks
        }
    ]
  },
]);

export default router ;