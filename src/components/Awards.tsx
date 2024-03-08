import {awards1, awards2, awards3, awards4} from '../assets';

const Awards = () => {
    return (
        <section id='awards' className={`flex justify-center items-start`}>
            <div className='flex flex-col items-center text-center'>
                <h1 className='text-2xl my-5'><b>Our Awards</b></h1>
                <div className='flex flex-wrap justify-center gap-2 mb-10 px-10'>
                    <img className='w-[120px]' src={awards1} alt=""/>
                    <img className='w-[120px]' src={awards2} alt=""/>
                    <img className='w-[120px]' src={awards3} alt=""/>
                    <img className='w-[120px]' src={awards4} alt=""/>
                    <img className='w-[120px]' src={awards4} alt=""/>
                    <img className='w-[120px]' src={awards4} alt=""/>
                </div>
                <p>The Cyprus Takeout Awards celebrate the best takeout food in Cyprus, recognizing excellence in taste,
                    value, and service.</p>
                <br/>
                <p>For us to win these awards is significant, highlighting its commitment to quality and customer
                    satisfaction in the competitive takeout industry, and distinguishing it as a top choice for diners
                    seeking exceptional takeout options</p>
                <div className='my-5'>🥑🥑🥑</div>
            </div>
        </section>
    );
};

export default Awards;
