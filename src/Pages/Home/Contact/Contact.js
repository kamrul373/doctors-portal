import React from 'react';
import { sectionTitle } from '../../../utility/sectionTitle';
import bg from "../../../assets/images/appointment.png";
import PrimaryButton from '../../../assets/components/PrimaryButton';

const Contact = () => {
    const data = {
        title: "Stay connected with us",
        subTitle: "Contact Us",
        titleColor: "text-white"
    }
    return (
        <section className='mt-12 text-center py-20 px-8' style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
            <div className='py-8'>
                {sectionTitle(data)}
            </div>
            <div>
                <form className='flex flex-col  gap-4'>
                    <div>
                        <input type="email" placeholder="Email Address" className="input input-bordered input-primary lg:w-1/2 w-full" />
                    </div>
                    <div>
                        <input type="text" placeholder="Subject" className="input input-bordered input-primary w-full lg:w-1/2" />
                    </div>
                    <div>
                        <textarea className="textarea textarea-primary w-full lg:w-1/2" placeholder="Your Message"></textarea>
                    </div>
                    <div className=''>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white lg:w-1/3 w-full">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;