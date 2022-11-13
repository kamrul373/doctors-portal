import React from 'react';
import PrimaryButton from '../../../assets/components/PrimaryButton';
import doctor from "../../../assets/images/doctor-small.png";
import bg from "../../../assets/images/appointment.png";
import { sectionTitle } from '../../../utility/sectionTitle';

const MakeAppointment = () => {
    const data = {
        title: "Make an appointment Today",
        subTitle: "Appointment",
        titleColor: "text-white"
    }
    return (
        <section style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", }}>
            <div className="px-12 lg:mt-32 mt-8">
                <div className="flex lg:flex-row items-center ">
                    <img src={doctor} alt="doctor" className="w-1/2 lg:-mt-32  hidden lg:block" />
                    <div className='text-white py-12 lg:py-0'>
                        {sectionTitle(data)}
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;