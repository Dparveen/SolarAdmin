import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
function Login() {
    const navigate = useNavigate();
  const [Pass, setPass] = useState("");
  const [User, setUser] = useState("");
  const handlePass = async (e) => {
    console.log("Data" + e.target.value);
    setPass(e.target.value);
  };

  const handleUser = async (e) => {
    console.log("Data" + e.target.value);
    setUser(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(Pass, User);
    localStorage.setItem('UserDetails',JSON.stringify({username:User, password:Pass}));
    navigate('/admin/dashboard')
  }
  return (
    <>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  onChange={(e) => handleUser(e)}
                  placeholder="User name / Email"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  onChange={(e) => handlePass(e)}
                  placeholder="Password"
                />
              </div>
              <button className="button login__submit" onClick={handleLogin}>
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            {/* <div className="social-login">
				<h3>log in via</h3>
				<div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div>
			</div> */}
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
