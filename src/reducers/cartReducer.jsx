import Swal from "sweetalert2";
export const cartReducer = (state,action) =>{
  const product = action.payload;
  const key = action.payload;
  const cartCounter = document.querySelector(".header .collapsed .counter");  
  switch (action.type){
    case 'ADD_ITEM':
      let chosenSize = document.querySelector(".product-size.selected");
      if(!chosenSize){
        Swal.fire({
          icon:"error",
          title:"Escolha um tamanho"
        });
        return state;
      }else chosenSize = chosenSize.textContent;
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
        cartCounter.classList.add("show");
        cartCounter.classList.add("animate")
        cartCounter.style.animationPlayState = "running";
        setTimeout(()=>cartCounter.style.animationPlayState = "paused",300);
        return[...state,{product,chosenSize}]
      }
    case 'REMOVE_ITEM':
      if(state.length===1){
        cartCounter.classList.remove("show");
      }
      return state.filter(e=>e.product.title+e.chosenSize!==key);
    default:
      return new Error("Operação desconhecida");
  }
}