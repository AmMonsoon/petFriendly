import React from "react";
import { NavLink } from "react-router-dom";
// import dog from '../images/lightdog.jpeg'
import dogTwo from '../images/happydog.jpeg'
import dogThree from '../images/dockdog.jpeg'
import dogFour from '../images/workdog.jpeg'
import dogFive from '../images/lazydog.jpeg'
import dogSix from '../images/ladydog.jpeg'
import dogSeven from '../images/ownerpet.jpeg'
import curtisDog from '../images/curtisdog.jpg'
import coltonDog from '../images/coltondog.JPG'
import amandaDog from '../images/amandadog.JPG'
import cat from '../images/layingcat.jpeg'
// import catTwo from '../images/cutecats.jpeg'
import catThree from '../images/pawfive.jpeg'
// import catFour from '../images/petcat.jpeg'
import catFive from '../images/liftcat.jpeg'
import catSix from '../images/bedcat.jpeg'

import "./Home.css"
const Home = () => {


            // <div className='home-page-wrapper'>
            //     <h1>Welcome to PetFriendly</h1>
            // </div>
    return(
     <div className='home-page-display'>
         <div className='home-page-header'>
            <h1> Welcome to PetFriendly </h1>
            
         </div>
         <div className='home-page-desc'>
            <span>PetFriendly is way for users to find locations where they can bring their<br /> furry companions.
You can sign up and express thoughts/interests on<br /> locations with a review. Check out our most recent listings <NavLink className= 'spots-link'to='/spots'>here</NavLink> .</span>
            
         </div>
            <div className='home-page-container'>
                <div className="big">
                    <img src={coltonDog} alt="" />
                </div>
                <div className="vertical">
                    <img src={cat} alt="" />
                </div>
                <div>
                    <img src={dogTwo} alt="" />
                </div>
                <div className="horizontal">
                    <img src={amandaDog} alt="" />
                </div>
                <div className="vertical">
                    <img src={dogThree} alt="" />
                    <p className="text">Text to overlay</p>
                </div>
                <div>
                    <img src={catThree} alt="" />
                </div>
                <div className="horizontal">
                    <img src={dogFour} alt="" />
                </div>
                <div className="big">
                    <img src={curtisDog} alt="" />
                </div>
                <div>
                    <img src={dogFive} alt="" />
                </div>
                <div className="horizontal">
                    <img src={catFive} alt="" />
                </div>
                <div>
                    <img src={dogSix} alt="" />
                </div>
                <div>
                    <img src={catSix} alt="" />
                </div>
                <div>
                    <img src={dogSeven} alt="" />
                </div>
            
        </div>
        <div className='footer'>
        <a href='https://www.linkedin.com/in/alex-monson-144151222/'>

            <div className='linked-in'>
            <i className="fab fa-linkedin-in fa-2x"></i>
            </div>
            </a>
            <div>
                <pre> 
                    <p>Created by:
                         Alex Monson
                    </p>
                    </pre>
            </div>
            <a href='https://github.com/AmMonsoon'>
            <div className='github'>
            <i className="fab fa-github fa-2x"></i>
            </div>
            </a>
        </div>
    </div>
    )
}


export default Home;