import { createContext,useReducer,useEffect } from "react";
import { cartReducer } from "../reducers/cartReducer";
export const CartContext = createContext();

const CartContextProvider = ({children})=>{

  const [cartItems,dispatch] = useReducer(cartReducer,[],()=>{
    const localData = localStorage.getItem('cartItems');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  },[cartItems])

  const addItem = (item)=> dispatch({type: 'ADD_ITEM',payload:item})
  const removeItem = (key)=> dispatch({type: 'REMOVE_ITEM',payload:key})

  return(
    <CartContext.Provider value={{cartItems,addItem,removeItem}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;