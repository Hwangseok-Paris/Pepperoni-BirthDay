import { createBrowserRouter } from "react-router-dom";

import Intro from "../components/Intro";
import Registration from "../components/Registration";
import App from "../App";
import Complete from "../components/Complete";
import ParisisAdmin from "../components/ParisIsAdmin";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Intro /> },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/complete",
        element: <Complete />,
      },
      {
        path: "/parisisadmin",
        element: <ParisisAdmin />,
      },
    ],
  },

  {
    path: "*",
    element: <></>,
  },
]);

export default router;
