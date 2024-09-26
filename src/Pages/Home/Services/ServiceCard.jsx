import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions flex justify-between items-center text-red-500">
                    <p>Price: ${price}</p>
                    <Link to={`/bookings/${_id}`}>
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 12h14m-7 7l7-7-7-7" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
