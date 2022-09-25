import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { AdminDashboard, Cart, Checkout, Home, Kids, Login, Men, NotFound, Register, TrialRoom, UserDashboard, Women } from "./components/Pages";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
 // console.log(user);
  return (
    <>
      <Header user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/:id" element={<AdminDashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/trial-room/:personType/:figureType" element={<TrialRoom />} />
        <Route path="/user/:id" element={<UserDashboard />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
        {/* register */}
        <Route
          exact
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

/**
 * Colors
 * #6F38C5
 * #87A2FB
 * #ADDDD0
 */
