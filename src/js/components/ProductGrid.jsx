import React, {PropTypes} from 'react';
import View from 'react-flexbox'

import Product from './SmallProduct.jsx'

export default React.createClass({
  propTypes: {
    products: PropTypes.array.isRequired
  },



  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  getDefaultProps() {
    return {products: []};
  },

  render() {
    let renderedProducts = this.props.products.map(product => {
      return (
        <Product product={product} />
      );
    });


    return (
      <div>
      <p>Hello, world!</p>

        <View row>
          <View auto row>
            <View column width="100px"><View className="red">Left</View></View>
            <View column width="100px"><View className="red">Left</View></View>
          </View>
          <View row className="green">All the place in the world</View>
        </View>

        <ul className="products">
          {renderedProducts}
        </ul>

      </div>
    );
  }
});
