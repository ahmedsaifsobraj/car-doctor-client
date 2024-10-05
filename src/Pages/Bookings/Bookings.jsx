import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import BookingRow from './BookingRow';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();
    const url = `/bookings?email=${user?.email}`;
    
    useEffect(() => {
       axiosSecure.get(url)
       .then(res => setBookings(res.data))
       
    }, [url,axiosSecure])

    const handleDelete = id => {
        const proceed = confirm("Are you sure you want to delete?");
        if (proceed) {
            fetch(`https://car-doctor-server-pearl-five.vercel.app/bookings/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                }
            }
            )
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfuly');
                        const remaining = bookings.filter(booking=>booking._id !== id);
                        setBookings(remaining);
                    }
                })
            }}
    return (
        <div>
            <h2>{bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Details</th>
                            
                        </tr>
                    </thead>
                    <tbody>    
                       {
                        bookings.map(booking=><BookingRow key={booking._id} booking={booking} handleDelete={handleDelete}></BookingRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Bookings;
