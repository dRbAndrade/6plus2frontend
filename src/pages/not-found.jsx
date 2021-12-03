import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Helmet from 'react-helmet';
import '../styles/not-found.scss';

const NotFound = ()=>{

  const [counter,setCounter] = useState(5);
  const navigate = useNavigate();
  useEffect(()=>{
    const countdown = setTimeout(()=>setCounter(counter-1),1000)
    if(counter<1){
      clearTimeout(countdown);
      navigate('/');
    }
  })

  return(
    <>
      <Helmet>
          <title>404 not found | 6pluS2store</title>
      </Helmet>
      <div className="body">
        <h1>404 - Nothing to see here, move along</h1>
        <h3>Você será redirecionado em:{counter}</h3>
      </div>
    </>
  );


}

export default NotFound;