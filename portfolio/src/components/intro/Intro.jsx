import React from "react";
import './Intro.css'

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesemoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import gitHub from '../../img/github.png'
import linkedin from '../../img/Facebook.png'
import FloatingDiv from "../FloatingDiv/floatingdiv";
const Intro = ()=>{
    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hey There, I'm </span>
                    <span>Ibrahim Aziz</span>
                    <span>Smart Contract Developer, with high experience using Solidity(hardhat Framework)
                        ERC20, ERC721, ERC1155, DeFi, GameFi Mastermind
                    </span>
                    
                </div>
                <button className="button i-button">Hire Me</button>
                <div className="i-icons">

                    <img src={gitHub} alt="github" srcset="" />
                    <img src={linkedin} alt="" srcset="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" srcset="" />
                <img src={Vector2} alt="" srcset="" />
                <img src={boy} alt="" srcset="" />
                <div style={{top: '-4%', left: '68%' }}>
                <FloatingDiv image = {crown} txt1 = "Smart Contract" txt2 = "Developer"/>
                </div>
               <div style={{top: '63%', left: '-4%'}}>
                <FloatingDiv image={thumbup} txt1 = "DeFi, GameFi" txt2="Mastermind" />
            </div>
            </div>
            

        </div>
    )
}
export default Intro