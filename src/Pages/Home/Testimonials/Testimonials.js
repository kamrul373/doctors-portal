import React from 'react';
import { sectionTitle } from '../../../utility/sectionTitle';
import people1 from "../../../assets/images/people1.png"
import people2 from "../../../assets/images/people2.png"
import people3 from "../../../assets/images/people3.png"
import quote from "../../../assets/icons/quote.svg";
import Testimonial from './Testimonial';

const Testimonials = () => {
    const data = {
        subTitle: "Testimonial",
        title: "What Our Patients Says"
    }
    const reviews = [
        {
            id: 1,
            name: "Winson Herry",
            reviewText: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
            img: people1

        },
        {
            id: 2,
            name: "Winson Herry",
            reviewText: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
            img: people2

        },
        {
            id: 3,
            name: "Winson Herry",
            reviewText: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
            img: people3

        }
    ]
    return (
        <section className='mt-10'>
            <div className='flex justify-between items-center'>
                {sectionTitle(data)}
                <img src={quote} alt="quote" className='lg:w-48 w-24' />
            </div>
            <div className="testimonials grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
                {
                    reviews.map(review => <Testimonial
                        key={review.id}
                        testimonial={review}
                    ></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;