import {
  createBrowserRouter,
} from "react-router-dom";
import { HomeLayout } from "../Components/Layouts/HomeLayout";
import { Home } from "../Pages/Home/Home";
import Navbar from "@/Components/Navbar/Navbar";
import Contact from "@/Pages/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import AllProperties from "@/Pages/AllProperties/AllProperties";
import Error from "@/Components/Error/Error";
import Services from "@/Pages/Services/Services";
import FamilyHouse from "@/Pages/Home/FamilyHouse/FamilyHouse";
import Villa from "@/Pages/Home/Villa/Villa";
import Apartment from "@/Pages/Home/Apartment/Apartment";
import Favourite from "@/Pages/Favourite/Favourite";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/all-properties",
        element: <AllProperties />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/family-house",
        element: <FamilyHouse />
      },
      {
        path: "/villa",
        element: <Villa />
      },
      {
        path: "/apartment",
        element: <Apartment />
      },
      {
        path: "/favourite",
        element: <Favourite />
      },
      {
        path: "/navbar",
        element: <Navbar />
      },
      {
        path: "/footer",
        element: <Footer />
      },
      {
        path: "/error",
        element: <Error />
      }
    ]
  },
]);

export default router;


