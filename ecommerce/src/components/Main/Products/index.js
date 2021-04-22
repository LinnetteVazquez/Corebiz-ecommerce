// import React from 'react';
import React, { useEffect, useState } from 'react';
import './index.css'

//componets


export default  function ResultProducts({updateProducts}) {
 const[data, setData] = useState([])
   useEffect(()=>{
    fetch('https://corebiz-test.herokuapp.com/api/v1/products')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        setData(json)
    });
   
     },[])
    return <section>
     <div className="resultList">
       {data.map((item, key)=>
       <div className="product" key={key}>
           <img src={item.imageUrl} alt="Imagen"/>
           <p>{item.productName}</p>
           <p><i class="far fa-star">{item.stars}</i></p>
           <p>de ${item.listPrice}</p>
           <p className="price">por ${item.price}</p>
           <button onClick = {updateProducts}>Comprar</button>
         </div>
       )}
       </div>
       
       </section>
}