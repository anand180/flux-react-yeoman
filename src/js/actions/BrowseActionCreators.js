import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import {browse} from '../utils/APIUtils.js'


export default {
  addItem(text) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_ADDED,
      text: text
    });
  },

  browseSection(tags) {
    browse().then(json => {
      console.log("json");
      console.log(json.data[1]);
      Dispatcher.handleServerAction({
        type: Constants.ActionTypes.PRODUCTS_FETCHED,
        data: json.data[1]
      })
    })
  },

  clearList() {
    console.warn('clearList action not yet implemented...');
  },

  completeTask(task) {
    console.warn('completeTask action not yet implemented...');
  }
};
