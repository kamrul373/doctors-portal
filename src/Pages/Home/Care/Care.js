import React from 'react';
import PrimaryButton from '../../../assets/components/PrimaryButton';
import treatment from "../../../assets/images/treatment.png"

const Care = () => {
    return (
        <div className='py-16 lg:px-20 px-4'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <img src={treatment} className="lg:w-1/3 rounded-lg shadow-2xl" alt='treatment' />
                    <div>
                        <h1 className="lg:text-5xl text-4xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Care;