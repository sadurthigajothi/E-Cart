import '../Components/Navbar/Navbar.css';
import React, { useState } from 'react';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert(`Welcome back, ${storedUser.name}!`);
      } else {
        alert("Invalid email or password!");
      }
    } else {
      const newUser = { name, email, password };
      localStorage.setItem("user", JSON.stringify(newUser));
      alert(" Account Created Successfully!");
      setIsLogin(true);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        <form onSubmit={handleSubmit} className="loginsignup-fields">
          {!isLogin && (
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            {isLogin ? "Login" : "Continue"}
          </button>
        </form>

        <p className="loginsignup-login">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={handleToggle}>
            {isLogin ? " Sign Up" : " Login here"}
          </span>
        </p>

        {!isLogin && (
          <div className="loginsignup-agree">
            <input type="checkbox" required />
            <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
