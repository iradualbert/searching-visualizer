import React from "react";
import './Pointer.css'

const Pointer = (props) => {

    const {
        left,
        pointerType,
    } = props

    return (
        <div className={
            `pointer ${pointerType}`} 
            style={{ 
                left: `${left}px`, 
            }}>
         
        </div>
    )
}

export default Pointer;