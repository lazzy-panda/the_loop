import {benediktFull, logo, menu_paper} from '../assets';
const About = () => {
    return (
        <section id='about' className='flex justify-center items-start'>
            <div className='flex flex-col items-center text-center'>
                    <img src={logo} alt="logo" />
                <div className='my-5'>🥑🥑🥑</div>
                <h1 className='text-2xl'><b>Brunch And Breakfast<br/>Restaurant</b></h1>
                <a href="https://drive.google.com/file/d/14VMWIpn1QpUkMRtUERW9XsUh1j1iQ1WG/view?fbclid=IwAR1V2lkZJPK67UDPlqMSxqiqzOBrRxcDYX6oEpskW7T4YGn964ztNAUCn8M" target='_blank'><img className='w-[80px] my-8' src={menu_paper} alt=""/></a>
                <p>Cozy atmosphere and the best place for brunch!<br/>Always fresh food, homemade cakes and good coffee!<br/>Stay with us in The Loop!</p>
                <div className='divider my-5'>🥑🥑🥑</div>
                <img className='image' src={benediktFull} alt=""/>
            </div>
        </section>

    );
};
export default About;
