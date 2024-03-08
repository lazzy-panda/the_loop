import { some_dish_full} from '../assets';

const Philosophy = () => {
    return (
        <section id='philosophy' className='flex justify-center items-start'>
            <div className='flex flex-col items-center text-center px-10'>
                <h1 className='text-2xl'><b>Welcome to The Loop:</b><br/>Where Every Meal is a Moment</h1>
                <br/>
                ***
                <br/>
                <p>At The Loop, we believe in creating a space that feels like a cozy embrace, making our restaurant the
                    perfect spot for brunch enthusiasts.</p>
                <br/>
                ***
                <br/>
                <p> Our philosophy is simple: serve fresh, top-quality meals, from heartwarming homemade cakes to the
                    perfect cup of coffee, in an atmosphere that feels like home.</p>
                <br/>
                ***
                <br/>
                <p> It's not just about dining with us; it's about savoring the simple joys and creating memories.</p>
                <br/>
                ***
                <br/>
                <p> Dive into the comfort, taste, and warmth at The Loop, your go-to place for unforgettable meals and
                    cozy vibes.</p>
                <br/>
                <div className='divider my-5'>🥑🥑🥑</div>
                <img className='image' src={some_dish_full} alt=""/>

            </div>
        </section>
    );
};

export default Philosophy;
