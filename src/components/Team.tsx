import {english_full, team} from '../assets';

const Team = () => {
    return (
        <section id='team' className={`flex justify-center items-start`}>
            <div className='flex flex-col items-center text-center'>
                <h1 className='text-2xl mb-5'><b>Our Team</b></h1>
                <p>Cozy atmosphere and the best place for brunch!<br/>Always fresh food, homemade cakes and good coffee!<br/>Stay with us in The Loop!</p>
                <img src={team} alt="team" className='w-[350px] mt-10'/>
                <div className='my-5'>🥑🥑🥑</div>

            </div>
        </section>
    );
};

export default Team;
