import React from "react";
import './Intro.css'
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
                    <button className="button i-button">Hire Me</button>
                </div>
            </div>
            <div className="i-right">
                 <span>dorem</span>
            </div>
        </div>
    )
}
export default Intro