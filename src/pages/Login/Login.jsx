import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase.jsx";
import netflix_spinner from "../../assets/netflix_spinner.gif";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth(); 

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!email || !email.includes("@")) {
      alert("Введите корректный email");
      setLoading(false);
      return;
    }

    try {
      let user;
      if (signState === "Sign In") {
        user = await login(email, password);
      } else {
        if (!name) {
          alert("Введите имя");
          setLoading(false);
          return;
        }
        user = await signup(name, email, password);

        setCurrentUser({
          uid: user.uid,
          email: user.email,
          name: name,
        });
      }

      navigate("/");
    } catch (err) {
      console.error("Ошибка авторизации:", err);
      alert("Не удалось войти. Проверьте данные.");
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <div className="login-spinner">
      <img src={netflix_spinner} alt="loading" />
    </div>
  ) : (
    <div className="login">
      <img src={logo} className="login-logo" alt="logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          {signState === "Sign Up" && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Your password"
          />
          <button type="submit">{signState}</button>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
