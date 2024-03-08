import {english_full, facebook, instagram} from '../assets';

const Contacts = () => {
    return (
        <section id='contacts' className='flex justify-center items-start'>
            <div className='flex flex-col items-center text-center'>
                <div className='my-5'>🥑🥑🥑</div>
                <h1 className='text-2xl'><b>Contacts</b></h1>
                <p>1st April street 115, Paralimni 5280 Cyprus</p>
                <p>23 74 07 07</p>
                <br/>
                <div className='flex gap-1'>
                    <a href="https://www.instagram.com/theloopcy/" target='_blank'>
                        <img className='w-[30px] h-[30px]' src={instagram} alt=""/>
                    </a>
                    <a href="https://www.instagram.com/theloopcy/" target='_blank'>
                        <img className='w-[30px] h-[30px]' src={facebook} alt=""/>
                    </a>
                </div>
                <img className='image' src={english_full} alt=""/>
            </div>
        </section>
    );
};

export default Contacts;
