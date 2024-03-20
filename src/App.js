import "./App.css";
import Header from "./components/Navbar/Header";
import Navbar from "./components/Navbar/Navbar";
import Plant from "./components/Files/Plant";
import Seed from "./components/Files/Seed";
import Home from "./components/Home";
import Pro from "./components/Files/Pro";
import G_toolS from "./components/Files/G_toolS";
import Services from "./components/Files/Services";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/Plant",
      element: (
        <>
          <Navbar />
          <Plant />
        </>
      ),
    },
    {
      path: "/Seed",
      element: (
        <>
          <Navbar />
          <Seed />
        </>
      ),
    },
    {
      path: "/G_Tools",
      element: (
        <>
          <Navbar />
          <G_toolS />
        </>
      ),
    },
    {
      path: "/Services",
      element: (
        <>
          <Navbar />
          <Services/>
        </>
      ),
    },
    {
      path: "/Seed",
      element: (
        <>
          <Navbar />
          <Seed />
        </>
      ),
    },
    {
      path: "/Pro",
      // "/Pro/:id"
      element: (
        <>
          <Pro />
        </>
      ),
    },
  ]);

  return (
    <>
      <Header />

      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
