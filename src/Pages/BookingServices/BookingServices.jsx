import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';

const BookingServices  = () => {
    const service = useLoaderData();
    const { title, _id,img, price } = service;
    const {user}=useContext(AuthContext);
    const handleBooking =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            date,
            img,
            service:title,
            service_id:_id,
            price:price
        }
        console.log(booking);
        fetch('https://car-doctor-server-pearl-five.vercel.app/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res =>res.json())
        .then(data =>{
           console.log(data);
           if(data.insertedId>1){
            alert('Order Successfull')
           }
        })
    }
    return (
        <div>
            <h2 className='text-center text-3xl my-5'>Booked Services: {title}</h2>

            <div className="card bg-base-200 w-full ">
                <form onSubmit={handleBooking} className="card-body">
                    <div className=' grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" placeholder="date" name='date' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" placeholder="due" name='due' defaultValue={`$`+ price} className="input input-bordered" required />
                        </div>
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-error">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default BookingServices;
