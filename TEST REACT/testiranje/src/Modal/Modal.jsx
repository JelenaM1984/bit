import React from "react";
import { useState } from "react";
import "./Modal.css";

export default function Modal(){
const[modal,setModal]=useState(false);

return (
<>
<button
onClick={()=>setModal(true)}
className='btn-modal'>
    Open pop-up
</button>
    {modal && (
<div className="modal">
    <div className="overlay">
     <div className="modal-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Hic accusamus distinctio eligendi velit. Odit atque molestiae illo, 
            dolorum amet iusto vero, non laborum illum magni expedita, esse iste. Ipsa, quo.
        </p>
        <button
        className="close-modal"
        onClick={()=>setModal(false)}>
        Close Pop-up
    </button>
        </div>  

    </div>
</div>
    )}
</>
)
}



