import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img
                        src={person}
                        className=" rounded-lg shadow-2xl w-3/4" />
                    <img
                        src={parts}
                        className=" absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl w-1/2" />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <h3 className='text-3xl text-red-500 font-bold'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified<br /> & of experience<br /> in this field</h1>
                    <p className="py-6">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p className="py-6">
                        The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.                     </p>
                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
}

export default About;
