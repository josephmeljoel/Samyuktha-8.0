'use client'; // Ensure this is a Client Component

import React, { useState } from 'react'
import Footer from '@/app/components/main/Footer'
import Navbar from '@/app/components/main/Navbar'


export default function page() {
    const [formData, setFormData] = useState({
        name: 'sdds',
        event: 'Treasure Hunt',
        college: 'Kristu Jyothi College',
        department: 'wefwf',
        phonenumber: '9016268071',
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };

    const handleSubmit = async () => {
        console.log("wef")
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            console.log(formData)
            // Send the data to an API route or external service
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            console.log(result)

            // if (result.success) {
            //     setSuccess(true);
            //     setFormData({
                    // name: '',
                    // event: '',
                    // college: '',
                    // department: '',
                    // phonenumber: '',
            //     });
            // } else {
            //     setError('Error submitting form');
            // }
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('Submission failed. Try again later.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <Navbar />
            <div className="text-center text-[80px]"><button className="z-50" onClick={() => handleSubmit()}>
                Button
            </button></div>


            <Footer />
        </>
    )
}
