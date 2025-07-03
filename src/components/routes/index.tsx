// import App from "@/App";
import App from "@/App";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";
import Books from "@/pages/Books";
import BookDetails from "@/pages/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    // Component: App,
    element: <App />,
    children: [
      {
        // path: "",
        index: true,
        Component: Books,
      },
      {
        path: "/books",
        Component: Books,
      },
      {
        path: "books/:id",
        Component: BookDetails,
      },
    ],
  },
]);

export default router;
