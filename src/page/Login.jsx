import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">LKC Chat</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmitForm}>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input style={{ display: "none" }} type="file" id="file" />
                    <button type="submit">Sign in</button>
                    {error && <span>{error}</span>}
                </form>

                <p>
                    You don't have an account? <Link to={"/register"}>Register</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
