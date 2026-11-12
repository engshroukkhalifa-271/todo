import { BrowserRouter, Route, Routes } from "react-router"
import Home from "../pages/Home"
import Profile from "../pages/profile"
import MainLayout from "../layouts/MainLayout"
import Login from "../pages/Auth/Login/index"
import Register from "../pages/Auth/Register";

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                        <Route index element={<Home />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="login" element={<Login/>} />
                        <Route path="register" element={<Register/>} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default Router
