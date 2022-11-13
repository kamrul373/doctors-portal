import React from 'react';
import PrimaryButton from '../../../assets/components/PrimaryButton';
import chair from "../../../assets/images/chair.png";
import "./Banner.css"
const Banner = () => {
    return (
        <div className='banner'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt='chair' />
                    <div className="px-4">
                        <h1 className="lg:text-5xl text-3xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;