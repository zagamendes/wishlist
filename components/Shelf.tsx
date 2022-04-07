import React from 'react';
import { Product } from '../types/product';
import styles from '../styles/shelf.module.css'
interface shelfProps{
    product:Product

}
const Shelf: React.FC<shelfProps> = ({product}) => {
    return(
        <>
            <div className={styles.imageContainer}>
                <img src={product.image} />
            </div>
            <p>{product.title.substring(0,50)}...</p>
            <p>R${product.price}</p>
        </>
    )
  
}

export default Shelf;