import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import Image from '../Image/Image';
import ProductForm from '../ProductForm/ProductForm'

const Product = props => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }
  Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
    colors: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired
  }

  

  

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);

  const getPrice = useMemo(()=>{
    return (price) => {
      setCurrentPrice(props.basePrice + price)
    }
  })

  const addToCart = (props) => {
    return (
    console.log('Summary'),
    console.log('########'),
    console.log('Name: ', props.title),
    console.log('Price: ', currentPrice),
    console.log('Size: ', currentSize),
    console.log('Color: ', currentColor)
    )

    
  }

  return (
    <article className={styles.product}>
      <Image name={props.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {currentPrice}</span>
        </header>
          <ProductForm currentColor={currentColor} 
              setCurrentColor={setCurrentColor} 
              color={props.colors} 
              prepareColorClassName={prepareColorClassName}
              currentSize={currentSize}
              setCurrentSize={setCurrentSize}
              getPrice={getPrice}
              sizes={props.sizes}
              title={props.title}
              currentPrice={currentPrice}
              addToCart={addToCart}
              
            />
      </div>
    </article>
  )
};

export default Product;

