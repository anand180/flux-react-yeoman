import React, {PropTypes} from 'react';
import Price from './Price.jsx'



export default React.createClass({

  propTypes: {
    product: PropTypes.object.isRequired
  },

  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    let product = this.props.product;
    console.log(product);

    return (
      <li className="small-product">
        <img className="product-image-grid" src={product.images[0].url} />
        <h3>{product.author.name}</h3>
        <h4>{product.name}</h4>
        <Price price={product.price} originalPrice={product.original_price} />
      </li>
    );
  }
});
