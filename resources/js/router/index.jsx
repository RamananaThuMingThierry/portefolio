import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RooteLayout";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/frontend/Home";
import { SECTION_ROUTES } from "../utils/sectionNavigation";

export const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <PublicLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: SECTION_ROUTES.services.slice(1), element: <Home /> },
          { path: SECTION_ROUTES.projects.slice(1), element: <Home /> },
          { path: SECTION_ROUTES.method.slice(1), element: <Home /> },
          { path: SECTION_ROUTES.pricing.slice(1), element: <Home /> },
          { path: SECTION_ROUTES.contact.slice(1), element: <Home /> },
        ],
      },
    ]
  }
]);
