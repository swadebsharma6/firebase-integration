import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";

const Registration = () => {

      const [regError, setRegError] = useState("");
      const [success, setSuccess] = useState('');
      const [showPass, setShowPass] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if(password.length < 6){
      setRegError('Password must be 6 character or Longer');
      return;
    }
    else if(!/[A-Z]/.test(password)){
      setRegError("Should be One UpperCase Latter");
      return;
    }

    // Reset 

    setRegError('');
    setSuccess('');

    // Create User
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess('User created Successfully')
        form.reset();
      })
      .catch((error) => {
        const err = error.message;
        setRegError(err)
        console.log(err);
      });
  };

  return (
    <div>
      <div className="hero  min-h-[700px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Please Registration now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
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
                  type={showPass ? "text" :"password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span className="cursor-pointer font-bold text-primary" onClick={()=> setShowPass(!showPass)}>Show</span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Registration"
                />
              </div>
              {
                  regError && <p className=" text-red-600 font-bold">{regError}</p>
              }
              {
                success && <p className=" text-primary font-bold">{success}</p>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
