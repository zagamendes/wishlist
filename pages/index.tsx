import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Product } from '../types/product'
import styles from '../styles/shelf.module.css'
import WishList from '../components/WishList'
import Shelf from '../components/Shelf'
import MyWishList from '../components/MyWishList'
import Tab from '../components/Tab'
interface homeProps{
  products:Product[]
}
interface wishListContextProps{
  myWishListProducts:Product[],
  setMyWishListProducts:(products:Product[])=>void

}
export const WishListContext = createContext<wishListContextProps>(null)
export const Home:React.FC<homeProps> = ({products}) => {
  
  const [myWishListProducts, setMyWishListProducts] = useState<Product[]>([])
  const [showMyWishList,setShowMyWishList] = useState(false)
  
  return (
    <WishListContext.Provider value={{myWishListProducts,setMyWishListProducts}}>
      <Tab showMyWishList={showMyWishList} setShowMyWishList={setShowMyWishList} />
      {showMyWishList ? <MyWishList/> : 
    <div className={styles.row}>
      {products.map(product=>(
        <div key={product.id} className={styles.shelf}>
          <Shelf product={product} />
          <WishList product={product} />
        </div>
      ))}
    </div>
    }
    </WishListContext.Provider>
      
  )
}


export const getStaticProps = async ()=>{
  const {data:totalProducts} = await axios.get<Product[]>("https://fakestoreapi.com/products")
  const start = Math.floor(Math.random()*totalProducts.length)
  const end = Math.floor(Math.random()*totalProducts.length)
  let products = start>end ? totalProducts.slice(end,start) : totalProducts.slice(start,end)
  
  return {
    props:{
      products
    },
    revalidate:30
  } 
}
export default Home