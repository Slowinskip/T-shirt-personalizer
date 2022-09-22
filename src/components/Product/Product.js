import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';
import Image from '../Image/Image';

const Product = props => {

  Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
    colors: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired
  }

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);

  const getPrice = price => {
    return setCurrentPrice(props.basePrice + price);
  }

  const addToCart = (e) => {
    e.preventDefault();
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
        <form onSubmit={addToCart}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
            {props.sizes.map(size => <li key={shortid()} ><button type="button" className={size.name === currentSize ? styles.active : undefined} onClick={() => {setCurrentSize(size.name); getPrice(size.additionalPrice)}}>{size.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(item =>
                <li key={item}>
                  <button type="button" onClick={() => setCurrentColor(item)} className={clsx(prepareColorClassName(item), item === props.color && styles.active)} />
                </li>
              )}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;