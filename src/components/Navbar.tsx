import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
    const [toggle, setToggle] = useState(false )
    return (
        <nav className='w-full flex py-6 justi justify-between items-center navbar'>
            <img className='w-[60px] h-[60px]' src={logo} alt="The Loop"/>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1 '>
                {
                    navLinks.map((nav, index) => {
                        return <li
                            key={nav.id}
                            className={`font-quattrocento font-normal cursor-pointer ${index === navLinks.length - 1 ? 'mr-0': 'mr-10' }`}
                        >
                            <a href={`#${nav.id}`}>
                                { nav.title }
                            </a>
                        </li>
                    })
                }
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img
                    src={toggle ? close : menu }
                    alt="menu"
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div
                    className={`${toggle ? 'flex' : 'hidden '} p-6 bg-white-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className='list-none flex flex-col justify-end items-center flex-1 '>
                        {
                            navLinks.map((nav, index) => {
                                return <li
                                    key={nav.id}
                                    className={`font-quattrocento font-normal cursor-pointer ${index === navLinks.length - 1 ? 'mr-0': 'mb-4' }`}
                                >
                                    <a href={`#${nav.id}`}>
                                        { nav.title }
                                    </a>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
