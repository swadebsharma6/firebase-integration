import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

  const [regError, setRegError] = useState("");
      const [success, setSuccess] = useState('');

      const emailRef = useRef(null);

  const handleLogin = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

     // Reset 

     setRegError('');
     setSuccess('');

    // Login user
    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      console.log("LoginUser :", user);
      setSuccess('User Login Successfully')
      form.reset();
    } )
    .catch(error =>{
      const err = error.message;
        setRegError(err)
        console.log(err);
    })
  }

  const handleForgetPassword = () =>{
    const email = emailRef.current.value;
    if(!email){
      alert('Please use a email address');
      return;
    }
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
      alert('Please Provide a valid email address');
      return;
    }
    // send password reset email
    sendPasswordResetEmail(auth, email)
    .then(()=>{
      alert('Please check your Email please.')
    })
    .catch(error =>{
      console.log(error)
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
                  ref={emailRef}
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
                  <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
              {
                  regError && <p className=" text-red-600 font-bold">{regError}</p>
              }
              {
                success && <p className=" text-primary font-bold">{success}</p>
              }
            </form>
           <p className="text-sm text-center pb-6 font-bold">New to this website, Please <Link className="text-primary" to='/register'>Register</Link></p>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Login;
