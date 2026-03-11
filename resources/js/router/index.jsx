import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RooteLayout";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/frontend/Home";

export const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <PublicLayout />,
        children: [
          { index: true, element: <Home /> },
        ],
      },
    ]
  }
]);
