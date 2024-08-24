import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";


const Login = () => {

  const handleLogin = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    // Login user
    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      console.log("LoginUser :", user)
    } )
    .catch(error =>{
      console.log(error.message)
    })
  }

  return (
    <>
      <div className="hero  min-h-[700px]">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Please Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
           
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Login;
