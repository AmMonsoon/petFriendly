import React from "react";
import dog from '../images/lightdog.jpeg'
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
import catTwo from '../images/cutecats.jpeg'
import catThree from '../images/pawfive.jpeg'
import catFour from '../images/petcat.jpeg'
import catFive from '../images/liftcat.jpeg'
import catSix from '../images/bedcat.jpeg'

import "./Home.css"
const Home = () => {


            // <div className='home-page-wrapper'>
            //     <h1>Welcome to PetFriendly</h1>
            // </div>
    return(
        <div className='home-page-container'>
            <div class="big">
                <img src={coltonDog} alt="" />
            </div>
            <div class="vertical">
                <img src={cat} alt="" />
            </div>
            <div>
                <img src={dogTwo} alt="" />
            </div>
            <div class="horizontal">
                <img src={amandaDog} alt="" />
            </div>
            <div class="vertical">
                <img src={dogThree} alt="" />
            </div>
            <div>
                <img src={catThree} alt="" />
            </div>
            <div class="horizontal">
                <img src={dogFour} alt="" />
            </div>
            <div class="big">
                <img src={curtisDog} alt="" />
            </div>
            <div>
                <img src={dogFive} alt="" />
            </div>
            <div class="vertical">
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
  
    )
}


export default Home;