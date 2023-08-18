import "./LoginStyles.css";
import LoginImg from "../assets/7.jpg";
function Login() {
  return (
    <>
      <div className="relative w-full h-screen bg-zinc-900/90">
        <img className="image" src={LoginImg} alt="" />
        <section>
          <div className="form-box">
            <div className="form-value">
              <form action="">
                <h2>Login</h2>
                <div className="inputbox">
                  <i class="fa fa-envelope"></i>
                  <input type="email" required></input>
                  <label for="">Email</label>
                </div>
                <div className="inputbox">
                  <i class="fa fa-lock"></i>
                  <input type="password" required></input>
                  <label for="">Password</label>
                </div>
                <div className="forget">
                  <label for="">
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <a href="/">Forget password</a>
                </div>
                <button>Login</button>
                <div className="register">
                  <p>
                    Don't have an account<a href="">Register</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Login;
