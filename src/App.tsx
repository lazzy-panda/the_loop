import styles from './style.ts';
import {
    Navbar, About, Awards, Reservation, Contacts, Philosophy,
} from './components'
import {benedikt, borsh, bowl, english, shakshuka, some_dish, soup, yogurt} from './assets';
import Team from './components/Team.tsx';

function App() {

    return (
        <div className={`bg-primary w-full overflow-hidden`}>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar/>
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`flex ${styles.boxWidth}`}>
                    <div className='left-col flex flex-col align-start w-[30%]'>
                        <img src={benedikt} alt=""/>
                        <img src={borsh} alt=""/>
                        <img src={english} alt=""/>
                        <img src={yogurt} alt=""/>
                    </div>
                    <div className='center-col w-[40%]'>
                        <About/>
                        <Philosophy/>
                        <Team/>
                        <Awards/>
                        <Reservation/>
                        <Contacts/>
                    </div>
                    <div className='right-col flex flex-col align-end w-[30%]'>
                        <img src={some_dish} alt=""/>
                        <img src={bowl} alt=""/>
                        <img src={shakshuka} alt=""/>
                        <img src={soup} alt=""/>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default App
