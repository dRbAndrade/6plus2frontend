import '../styles/toggleText.scss'
import React,{useState} from 'react'
import { ToggleButtonGroup } from 'react-bootstrap'

const ToggleText = ({toggle})=>{

  const [show, setShow] = useState(false)
  return(
    <>
    <div className="toggler">  
      <div className="toggleShow">
        <h2 className="toggleTitle">{toggle.title}</h2>
        <button onClick={() =>setShow(!show)}> { show ? "-" : "+"} </button> 
      </div>
      <p className="toggleDescription">
        {
          show ? toggle.description : null
        }
        </p>
        <hr className="divider"/> 
    </div>
    
    

    </>
  )

}

export default ToggleText;