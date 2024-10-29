import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    "id": "m1",
    "title": "Mac & Cheese",
    "price":8.99,
    "description": "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
  },
  {
    "id": "m2",
    "title": "Margherita Pizza",
    "price": 12.99,
    "description": "A classic pizza with fresh mozzarella, tomatoes, and basil on a thin and crispy crust.",
  },
  {
    "id": "m3",
    "title": "Caesar Salad",
    "price": 7.99,
    "description": "Romaine lettuce tossed in Caesar dressing, topped with croutons and parmesan shavings.",
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description
            }
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
