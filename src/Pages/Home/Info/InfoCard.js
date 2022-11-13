import React from 'react';

const InfoCard = ({ data }) => {
    const { name, description, bgClass, icon } = data;
    return (
        <div className={`flex lg:flex-row flex-col items-center gap-4 p-8 ${bgClass}`}>
            <div>
                <img src={icon} alt={name} />
            </div>
            <div className='info-content text-white'>
                <h4 className='text-xl font-bold'>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;