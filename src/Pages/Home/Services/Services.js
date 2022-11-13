import React from 'react';
import { sectionTitle } from '../../../utility/sectionTitle';
import fluoride from "../../../assets/images/fluoride.png"
import whitening from "../../../assets/images/whitening.png"
import cavity from "../../../assets/images/cavity.png"
import ServiceCard from './ServiceCard';

const Services = () => {
    const data = { title: "Services We Provide", subTitle: "OUR SERVICES" }
    const services = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride
        },
        {
            id: 2,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity
        },
        {
            id: 3,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening
        },
    ]
    return (
        <div className='my-20'>
            <div className='text-center'>
                {sectionTitle(data)}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-8 gap-8'>
                {services.map(service => <ServiceCard
                    key={service.id}
                    service={service}
                ></ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;