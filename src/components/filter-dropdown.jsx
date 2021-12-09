import Dropdown from "react-bootstrap/Dropdown";
import { BsChevronDown } from "react-icons/bs";
import React, { useContext, useEffect, useState } from "react";
import "../styles/filter-dropdown.scss"
import { ProductContext } from "../contexts/ProductContext";

const FilterDropdown = ({children,param,handleFilter})=>{

  const {categories,productSizes} = useContext(ProductContext);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(()=>{
    let items = [];
    if(param==="categories"){
      items = categories;
    }
    else {
      const size = productSizes.map(e=>e.size);
      items = [...new Set(size)]
    }
    setMenuItems(items)
  },[categories, param, productSizes])

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
  <Dropdown onSelect={handleFilter} className="d-flex justify-content-center">
    <Dropdown.Toggle as={CustomToggle}>
      {children}
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item key={0} eventKey={`${param}=reset`}>Resetar</Dropdown.Item>
      {menuItems.length>0&&menuItems.map(item=>{
        return <Dropdown.Item key={param==="categories"?item.name.toLowerCase():item} eventKey={`${param}=${param==="categories"?item.name.toLowerCase():item}`}>{param==="categories"?item.name:item}</Dropdown.Item>
      })}
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default FilterDropdown;