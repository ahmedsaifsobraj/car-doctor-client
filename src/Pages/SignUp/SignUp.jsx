import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg' ;
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
const SignUp = () => {
    const {createUser}=useContext(AuthContext);
    const handleSignUp=e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
        createUser(email,password)
        .then(res => {
            const user = res.user;
            console.log(user);
        })
        .then(error=>
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
                    <form onSubmit={handleSignUp} className="card-body">
                    <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
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
                    <p className='text-center py-5'>Already have an account? <Link to='/login' className='text-red-500'>Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
