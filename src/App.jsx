import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./context/authContext";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import "./style.scss";

function App() {
    const { currentUser } = useAuthContext();
    console.log({ currentUser });

    function ProtectedRoute({ children }) {
        if (!currentUser) {
            return <Navigate to="/login" />;
        }
        return children;
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
