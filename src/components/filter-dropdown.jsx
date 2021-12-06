import Dropdown from "react-bootstrap/Dropdown";
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import "../styles/filter-dropdown.scss"

const FilterDropdown = ({children})=>{
  
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <button className="dropdown-button"
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}>
      <span>{children}</span>
      {<BsChevronDown/>}
    </button>  
  ));
  

  return(
  <Dropdown className="d-flex justify-content-center">
    <Dropdown.Toggle as={CustomToggle}>
      {children}
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item eventKey="1">Not implemented yet</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default FilterDropdown;