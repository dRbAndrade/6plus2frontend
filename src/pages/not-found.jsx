import { useEffect, useState } from 'react';
import '../styles/not-found.scss'

const NotFound = ()=>{

  const [counter,setCounter] = useState(5);

  useEffect(()=>{
    const countdown = setTimeout(()=>setCounter(counter-1),1000)
    if(counter<1){
      clearTimeout(countdown);
      window.location.href="https://wplanet.com.br";
    }
  })

  return(
    <div className="body">
      <h1>404 - Nothing to see here, move along</h1>
      <h3>Você será redirecionado em:{counter}</h3>
    </div>
  );


}

export default NotFound;