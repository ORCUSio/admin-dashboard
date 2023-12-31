import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import LoGin from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Heads from "./Pages/ResetPassword";
import OrderLabel from "./Pages/OrderLabel";
import Orders from "./Pages/Orders";
import Deposit from "./Pages/Deposit";
import Sidebar from "./components/Sidebar";
import Transactions from "./Pages/Transactions";
import UserPage from "./Pages/UserPage";
import Commission from "./Pages/Commisions";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);
  return (
    <div className=" flex gap-4 w-[100vw] h-[100vh] justify-center items-center">
      <Link to={"/main"}>
        <button className="bg-gray-200 rounded-xl px-2 py-1">Dasboard</button>
      </Link>
      <Link to={"/login"}>
        <button className="bg-gray-200 rounded-xl px-2 py-1">Login</button>
      </Link>
      <Link to={"/signup"}>
        <button className="bg-gray-200 rounded-xl px-2 py-1">signup</button>
      </Link>
    </div>
  );
}
const RedirectingChildROutes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const updatePath = () => {
      const newPath = `${location.pathname}/Dashboard`;
      console.log(newPath);

      navigate(newPath);
    };

    updatePath();
  }, []);
  return (
    <>
      <div></div>
    </>
  );
};
const OuletPage = () => {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoGin />,
  },
  {
    path: "/resetpassword",
    element: <Heads />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/main",
    element: <OuletPage />,
    children: [
      {
        path: "/main",
        element: <RedirectingChildROutes />,
      },
      {
        path: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: "order-label",
        element: <OrderLabel />,
      },
      {
        path: "Orders",
        element: <Orders />,
      },
      {
        path: "Deposit",
        element: <Deposit />,
      },
      {
        path: "Commission",
        element: <Commission />,
      },
      {
        path: "UserPage",
        element: <UserPage />,
      },
      {
        path: "Transactions",
        element: <Transactions />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
