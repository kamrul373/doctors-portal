import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { name, reviewText, img, location } = testimonial;
    return (
        <div>
            <p>{reviewText}</p>
            <div className='flex items-center gap-4 mt-8'>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt={name} />
                    </div>
                </div>
                <div>
                    <h5 className="text-xl font-semibold">{name}</h5>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;