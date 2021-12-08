import Swal from "sweetalert2";
export const cartReducer = (state,action) =>{
  const product = action.payload;
  const key = action.payload;
  switch (action.type){
    case 'ADD_ITEM':
      const chosenSize = document.querySelector(".product-size.selected").textContent;
      if(state.filter(e=>{
        return JSON.stringify(e.product)===JSON.stringify(product) && chosenSize===e.chosenSize
      }).length>0){
        Swal.fire({
          icon:"info",
          title:"Item já adicionado ao carrinho"
        });
        return state;
      }else{
        Swal.fire({
          icon:"success",
          title:"Item adicionado ao carrinho"
        });
        return[...state,{product,chosenSize}]
      }

    case 'REMOVE_ITEM':
      return state.filter(e=>e.product.title+e.chosenSize!==key);
    default:
      return new Error("Operação desconhecida");
  }
}