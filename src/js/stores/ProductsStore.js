import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

import TaxonomyStore from './TaxonomyStore.js';


// data storage
let _data = {};

var _active;


// Facebook style store creation.
const ProductsStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll() {
    return {
      tasks: _data
    };
  },

  getActiveProducts() {
    if (_active && _data[_active]) {
      return _data[_active].rows.map(row => {
        return row.product;
      });
    }
    return [];




  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.PRODUCTS_FETCHED:
        let data = action.data;

        console.log(data);

        let key = JSON.stringify(data.pagination.params);
        _active = key;

        _data[key] = data;

        ProductsStore.emitChange();
        break;

      // add more cases for other actionTypes...
    }
  })
});

function _onChange() {
  console.log("taxonomy changed");
}

TaxonomyStore.addChangeListener(_onChange);


export default ProductsStore;
