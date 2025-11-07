import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Waitlist from "./Waitlist"; // create this page next
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/waitlist", element: <Waitlist /> },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
