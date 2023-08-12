import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import styles from '../styles/OrderItem.module.css';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);
  
	const handleRemove = (product) => {
	  removeFromCart(product);
	};
  
	return (
	  <div className={styles.OrderItem}>
		<figure>
		  {product && <img src={product?.main_image_url} alt={product?.name} />} 
		</figure>
		<p>{product?.name}</p>
		<p>${product?.unit_price}</p>
		<img className={styles['pointer more-clickable-area']} src={close} alt="close" onClick={() => handleRemove(product)} />
	  </div>
	);
  };
  
  export default OrderItem;