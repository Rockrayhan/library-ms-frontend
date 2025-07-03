// import App from "@/App";
import App from "@/App";
import { createBrowserRouter } from "react-router";
import Books from "@/pages/Books";
import BookDetails from "@/pages/BookDetails";
import BorrowSummary from "@/pages/BorrowSummary";

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
      {
        path: "borrow-summary",
        Component: BorrowSummary,
      },
    ],
  },
]);

export default router;
