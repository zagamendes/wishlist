import React from 'react';

const Tab: React.FC<any> = ({setShowMyWishList,showMyWishList}) => {
  return (
    <div style={{display:"flex",justifyContent:"space-between", width:"400px",margin:"0 auto 20px"}}>
        <div style={{cursor:"pointer"}} onClick={()=>setShowMyWishList(!showMyWishList)}><h2>Produtos</h2></div>
        <div style={{cursor:"pointer"}} onClick={()=>setShowMyWishList(!showMyWishList)}><h2>Minha lista</h2></div>
  </div>
  )
}

export default Tab;