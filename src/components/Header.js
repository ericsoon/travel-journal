import React from "react"
import {IoMdGlobe} from "react-icons/io"

export default function Header(){
    return(
        <header>
            <IoMdGlobe className="globe"/>
            <h3 className="title">  
                my travel journal
            </h3>
        </header>
    )
}