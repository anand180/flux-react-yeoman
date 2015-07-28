import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import {fetchTaxonomy, fetchProduct, browse} from '../utils/APIUtils.js'


export default {
  addItem(text) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_ADDED,
      text: text
    });
  },

  requestTaxonomy() {
    //Dispatcher.handleViewAction({
    //  type: Constants.ActionTypes.TAXONOMY_REQUESTED
    //})
    fetchTaxonomy().then(json =>{
      console.log("json");
      console.log(json);
      Dispatcher.handleServerAction({
        type: Constants.ActionTypes.TAXONOMY_FETCHED,
        taxonomy: json
      })
    })

  },
  selectTag(i) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TAG_SELECTED,
      index: i
    });
  },

  selectSubTag(i) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.SUBTAG_SELECTED,
      index: i
    });
  },



  clearList() {
    console.warn('clearList action not yet implemented...');
  },

  completeTask(task) {
    console.warn('completeTask action not yet implemented...');
  }
};
