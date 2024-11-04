import React from 'react'
import {
    FaCarSide,
    FaHeadphonesAlt,
    FaWallet,
    FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className='text-4xl md:text-5xl text-primary' />,
        title: "Safe Delivery",
        description: "shiping on all order",
    },
    {
        id: 2,
        icon: < FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
        title: "Safe Money",
        description: "30 days money back",
    },
    {
        id: 3,
        icon: < FaWallet className='text-4xl md:text-5xl text-primary' />,
        title: "Secure Payment",
        description: "All Payment Are Secured",
    },
    {
        id: 4,
        icon: < FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
        title: "Online Support 24/7",
        description: "Technical Support 24/7",
    },
];

const Services = () => {
  return (
    <div>
        <div className='container my-14 md:my-20'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
                {ServiceData.map((data) => (
                   <div className='flex flex-col items-start sm:flex-row gap-4'>
                     {data.icon}
                     <div>
                        <h1 className='lg:text-xl font-bold '>{data.title}</h1>
                        <h1 className='text-gray-600 '>{data.description}</h1>
                     </div>
                   </div>
                ))}
            </div>
        </div>
    </div>
  )
};

export default Services