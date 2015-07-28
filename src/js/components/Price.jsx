import React, {PropTypes} from 'react';

export default React.createClass({
  propTypes: {
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number

  },
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    let {originalPrice, price} = this.props;

    if(!originalPrice) {
      return (<div>${price}</div>)
    }
    return (
      <div>
        <span>${originalPrice}</span>
        <span> ${price}</span>
      </div>
    )


    return (
      <p>Hello, world!</p>
    );
  }
});
