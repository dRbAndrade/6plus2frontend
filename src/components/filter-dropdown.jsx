import Dropdown from "react-bootstrap/Dropdown";
import { BsChevronDown } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import "../styles/filter-dropdown.scss"
import axios from "axios";

const FilterDropdown = ({children,param,handleFilter})=>{
  
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

  const [menuItems, setMenuItems] = useState([]);
  
  useEffect(()=>{
    getMenuItems(param).then(response=>setMenuItems(response))
  },[param])

  async function getMenuItems(param){
    const url = `http://localhost:8080/${param}`
    let menuItems = (await axios.get(url)).data.content;
    return menuItems;
  }

  return(
  <Dropdown onSelect={handleFilter} className="d-flex justify-content-center">
    <Dropdown.Toggle as={CustomToggle}>
      {children}
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item key={0} eventKey={`${param}=reset`}>Resetar</Dropdown.Item>
      {menuItems.map(item=>(
        <Dropdown.Item key={item.id} eventKey={`${param}=${param==="categories"?item.id:item.name}`}>{item.name}</Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default FilterDropdown;