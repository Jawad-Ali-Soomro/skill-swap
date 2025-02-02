import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Onboarding from "./components/Onboarding";
import Dashboard from "./pages/Dashboard";

function App() {
  const isLoggedIn = window.localStorage.getItem("_skillink_auth_token")
  window.localStorage.setItem("_skillink_auth_token", "empty token to test")
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Dashboard /> : <Home />}></Route>
          <Route path="/onboard" element={<Onboarding />}></Route>
          <Route path="*" element={<>Not FOund</>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
