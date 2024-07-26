import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home";
import About from "./pages/About";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import JobDetails from "./pages/JobDetails";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import AllJobs from "./pages/AllJobs";
import CareerProfile from "./pages/CareerProfile";
import SignUpHome from "./pages/Auth";
import RegAsJobSeeker from "./pages/Auth/RegAsJobSeeker";
import Login from "./pages/Auth/Login";
import RegAsJobEmployer from "./pages/Auth/RegAsJobEmployer";
import VerifyAccount from "./pages/Auth/VerifyAccount";
import Employee from "./pages/Dashboard/Employee";
import Employer from "./pages/Dashboard/Employer";
import SpecialLayout from "./components/SpecialLayout";
import Dashboard from "./components/dashboard";
import PostJobs from "./components/dashboard/PostJobs";
import Applications from "./components/dashboard/Applications";
import ActiveListings from "./components/dashboard/ActiveListings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/job" element={<JobDetails />} />
          <Route path="/all-jobs" element={<AllJobs />} />
          <Route path="/career-profile" element={<CareerProfile />} />

          <Route path="/signup/home" element={<SignUpHome />} />
          <Route path="/signup/jobseeker" element={<RegAsJobSeeker />} />
          <Route path="/signup/verify" element={<VerifyAccount />} />
          <Route path="/signup/employer" element={<RegAsJobEmployer />} />

          {/* <Route path="/job/:jobId" element={<JobDetails />} /> */}
        </Route>
        <Route path="/" element={<SpecialLayout />}>
          <Route path="/dashboard/employee" element={<Employee />} />
          <Route path="/dashboard/employer" element={<Employer />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/active-listing" element={<ActiveListings />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/post-jobs" element={<PostJobs />} />
          <Route path="/analytics" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
