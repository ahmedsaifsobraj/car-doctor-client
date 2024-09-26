import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import BookingRow from './BookingRow';
import axios from 'axios';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    
    useEffect(() => {
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {setBookings(data);})
        axios.get(url,{withCredentials:true})
        .then(result => setBookings(result.data))
    }, [])

    const handleDelete = id => {
        const proceed = confirm("Are you sure you want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
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
