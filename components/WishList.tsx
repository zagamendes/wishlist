import React, { useContext, useEffect, useState } from 'react';
import { WishListContext } from '../pages';
import { Product } from '../types/product';


interface wishListProps{
    product:Product
}
const WishList: React.FC<wishListProps> = ({product}) => {
    
    const getWishListProducts = ():Product[] => JSON.parse(sessionStorage.getItem("wishlist"))

    const [isAdded,setIsAdded] = useState(false)
    
    const {myWishListProducts,setMyWishListProducts} =  useContext(WishListContext)
    
    

    useEffect(()=>{
        if(isAdded) addProductToWishList(product)
        else removeProductOfWishList(product)
    },[isAdded])

    useEffect(()=>{
        updateWishList()
    },[myWishListProducts])

    useEffect(()=>{
        setMyWishListProducts(getWishListProducts())
    },[])

    const isOnMyList = (product:Product)=> myWishListProducts.some(currentProduct=>currentProduct.id==product.id)
    
    const addProductToWishList = (product:Product) => {
        setMyWishListProducts([...myWishListProducts,product])
    }

    const removeProductOfWishList = product =>{
        const newWishList = myWishListProducts.filter(currentProduct=>currentProduct!=product)
        setMyWishListProducts([...newWishList])
    }

    const updateWishList = ()=>{
        sessionStorage.setItem("wishlist",JSON.stringify(myWishListProducts))
    }

    const handleProduct = ()=>{
        isAdded ? setIsAdded(false) : setIsAdded(true)
    }

    return <button onClick={()=>handleProduct()}>{isOnMyList(product) ? "remover da minha lista" : "adicionar a minha lista" }</button>
  
}

export default WishList;