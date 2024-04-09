import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { ResetPass } from "./pages/Resetpass";
import { Home } from "./pages/Home";
import { UserManual } from "./pages/UserManual";
import { Blog } from "./pages/Blog";
function App() {
  const islogin: boolean = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<ResetPass />} />
        <Route path="/" element={<Home />} />
        <Route path="/manual" element={<UserManual />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
