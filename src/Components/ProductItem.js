import classes from './ProductItem.module.css'

function ProductItem(props) {
  const { product } = props;

  console.log(product)

  return (
    <>
      <div className={classes.item}>
        <img src={product.img} alt='Sneaker'/>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>{product.price + ' $'}</span>
      </div>
    </>
  );
}

export default ProductItem;
