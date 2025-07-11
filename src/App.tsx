import { Footer } from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import { Toaster } from "./components/ui/sonner";
import "./index.css";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Navbar />

      <Toaster position="top-right" closeButton={true}/>

      <div className="container min-h-screen">
      <Outlet />
      </div>


      <Footer/>
    </>
  );
}

export default App;
