import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
let _data = [];
var active = 0;
var activeSubTag = 0;

// add private functions to modify data
function addItem(title, completed=false) {
  _data.push({title, completed});
}

// Facebook style store creation.
const TaxonomyStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll() {
    return {
      taxonomy: _data
    };
  },

  getActive() {


    if (_data.length > 0) {
      console.log("has data");
      let t = {
        tag: {
          name: _data[active].name,
          tag: _data[active].tag
        },
        subTag: _data[active].subtags[activeSubTag],
        subTags: _data[active].subtags

      };
      console.log(t);
      return t;
    }

    console.log("no data");
    return {};
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.TAXONOMY_FETCHED:

        _data = action.taxonomy;
        TaxonomyStore.emitChange();

        break;

      case Constants.ActionTypes.TAG_SELECTED:
        active = action.index;
        activeSubTag = 0;
        TaxonomyStore.emitChange();

        break;

      case Constants.ActionTypes.SUBTAG_SELECTED:
        activeSubTag = action.index;
        TaxonomyStore.emitChange();

        break;

      // add more cases for other actionTypes...
    }
  })
});

export default TaxonomyStore;
