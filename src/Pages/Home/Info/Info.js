import React from 'react';
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from './InfoCard';
const Info = () => {
    const infoCardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: "Open at 9 am to 5pm",
            bgClass: "bg-gradient-to-r from-secondary to-primary",
            icon: clock
        },
        {
            id: 2,
            name: 'Our Location',
            description: "Dhaka - 1210",
            bgClass: "bg-accent",
            icon: marker
        },
        {
            id: 3,
            name: 'Contact Us',
            description: "+880-9601201",
            bgClass: "bg-gradient-to-r from-secondary to-primary",
            icon: phone
        }
    ]
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 mt-4'>
            {
                infoCardData.map(data => <InfoCard
                    key={data.id}
                    data={data}
                ></InfoCard>)
            }
        </div>
    );
};

export default Info;