import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg' ;

import axios from 'axios';
import UseAuth from '../../hooks/useAuth';
const Login = () => {
    const {signIn}=UseAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogIn=e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(res => {
            const userLogged = res.user;
            console.log(userLogged);
            const user={email};
            axios.post('https://car-doctor-server-pearl-five.vercel.app/jwt',user)
            .then(res => {
                console.log(res.data);
                if(res.data.success){
                    navigate(location?.state? location?.state :'/')
                }
            })
            // 

        })
        .catch(error=>
            console.log(error)
        )
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
            <div className="hidden lg:block lg:w-1/2 mr-5">
                    <img src={login} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogIn} className="card-body">
                    <h1 className="text-4xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-error">Sign In</button>
                        </div>
                    </form>
                    <p className='text-center py-5'>Don't have any account? <Link to='/signup' className='text-red-500'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
