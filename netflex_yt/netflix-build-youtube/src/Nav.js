import React,{useState, useEffect} from 'react'
import './Nav.css';

function Nav() {
    const[show, handleshow] = useState(false); 

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleshow(true);
        } else{
            handleshow(false);
        }
    }

    useEffect(() => { 
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);  
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
                <img className="nav__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTejO1SaGP6B5tqeaWx7cx0Z6w79SlbpsAXtg&usqp=CAU" alt="" />
            </div>
        </div>
    )
}

export default Nav
