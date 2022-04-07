import React, { useContext } from 'react';
import { WishListContext } from '../pages';

const MyWishList: React.FC = () => {
  const {myWishListProducts} = useContext(WishListContext)
  return(
      myWishListProducts.map(product=>(
      <div style={{display:"flex",alignItems:'center' }}>
          <div style={{marginRight:"40px"}}><img src={product.image} width="140"/></div>
          <p>{product.title}</p>
      </div>
  ))
  )
}

export default MyWishList;