import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Forgot } from "./pages/Forgot";
import { DashLayout } from "./layout/dash-layout";
import { Dashboard } from "./pages/Dashboard";
import Agents from "./pages/Agents";
import { Goals } from "./pages/Goals";
import { Attributes } from "./pages/Attributes";
import { EditProfile } from "./pages/EditProfile";
import { Password } from "./pages/Password";
import { ResetPassword } from "./pages/ResetPassword";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/pages/Signup" element={<Signup />} />
        <Route path="/pages/Forgot" element={<Forgot />} />
        <Route path="/pages/ResetPassword" element={<ResetPassword />} />

        <Route element={<DashLayout />}>
          <Route path="/pages/Dashboard" element={<Dashboard />} />
          <Route path="/pages/Agents" element={<Agents />} />
          <Route path="/pages/Attributes" element={<Attributes />} />
          <Route path="/pages/Goals" element={<Goals />} />
          <Route path="/pages/EditProfile" element={<EditProfile />} />
          <Route path="/pages/Password" element={<Password />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
