import React from 'react'
import {useSelector} from 'react-redux';
import {selectUser} from '../features/userSlice';
import './ProfileScreen.css';
import Nav from '../Nav';
import {auth} from '../firebase';

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen_body'>
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTejO1SaGP6B5tqeaWx7cx0Z6w79SlbpsAXtg&usqp=CAU" alt=""/>
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <button onClick={() => auth.signOut()} className="profileScreen__signOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
