import React, { useState ,useContext} from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './Styles.scss';
import Context from '../Context/CreateContext';

const data = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Skills', to: '/skills' },
    { label: 'Resume', to: '/resume' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);
    const {hashToggle,setHashToggle} = useContext(Context);
console.log(toggleIcon);
    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
        setHashToggle(!hashToggle);
    };

    const handleLink= ()=>{
        setToggleIcon(false)
        setHashToggle(false);
    }



    return (
        <div className="navbar">
            <div className="navbar__container">
                <Link to="/" className="navbar__container__logo">
                    <FaReact size={30} />
                </Link>
            </div>
            <ul className={`navbar__container__menu ${toggleIcon ? `active` : ''}`}>
                {data.map((item, key) => (
                    <li key={key} className="navbar__container__menu__item">
                        <Link className="navbar__container__menu__item__links" to={item.to} onClick={handleLink}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="nav-icon" onClick={handleToggleIcon}>
                {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
            </div>
        </div>
    );
};

export default Navbar;

