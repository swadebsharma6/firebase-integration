
import {  GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/firebase.config";



const Google = () => {
     
      const googleProvider = new GoogleAuthProvider();


      const handleGoogleLogin = ()=>{
            signInWithPopup(auth, googleProvider)
            .then(result =>{
                  const user = result.user;
                  console.log(user)
            })
            .catch(error =>{
                  console.log(error.message)
            })
      }

      return (
            <div>
                <button 
                onClick={handleGoogleLogin}
                className="btn btn-accent">Google Login</button>  
            </div>
      );
};

export default Google;