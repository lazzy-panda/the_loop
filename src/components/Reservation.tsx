import { useState, useEffect } from 'react';

const Reservation = () => {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [persons, setPersons] = useState('1');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    // Function to handle phone number validation
    const validatePhoneNumber = (number: any) => {
        const phoneNumberPattern = /^\+?(3[0-9]{2}|4[0-9]{2}|7[0-9]{2}|8[0-9]{2})\)?[- ]?([0-9]{2,4})?[- ]?([0-9]{2,4})?[- ]?([0-9]{2,4})$/;
        return phoneNumberPattern.test(number);
    };

    // Check if all conditions are met to enable the submit button
    useEffect(() => {
        if (
            validatePhoneNumber(phone) &&
            fullName.trim().length > 0 &&
            parseInt(persons) > 0
        ) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [phone, fullName, persons]); // This effect depends on phone, fullName, and persons

    // Handler for form submission
    const handleSubmit = (event: any) => {
        event.preventDefault();

        // If phone number is valid, proceed with reservation logic...
        alert('Reservation submitted for: ' + fullName);
        // Here you might clear the form or do something else, like sending data to a server
    };

    return (
        <section id='reservation' className='flex flex-col items-center bg-[#EFEFEF] rounded-2xl p-5'>
            <h1 className='text-2xl my-5'><b>Make a Reservation!</b></h1>
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className='w-full'>
                    <div className="mb-4">
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="full-name"
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={e => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            type="tel"
                            placeholder="Phone"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                </div>

                <div className='w-full'>
                    <div className='flex gap-2 items-center mb-4'>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="persons">
                            Persons
                        </label>
                        <select
                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
                            id="persons"
                            value={persons}
                            onChange={e => setPersons(e.target.value)}
                        >
                            {[...Array(20).keys()].map(num => (
                                <option key={num + 1} value={num + 1}>
                                    {num + 1}
                                </option>
                            ))}
                            {/* Add more options as needed */}
                        </select>
                        <button
                            className={`bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                                isButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
                            }`}
                            type="submit"
                            disabled={isButtonDisabled}
                        >
                            Send
                        </button>
                    </div>

                </div>
            </form>
        </section>
    );
};

export default Reservation;
