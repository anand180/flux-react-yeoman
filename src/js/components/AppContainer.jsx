import React from 'react';
import TodoStore from '../stores/TodoStore';
import TaxonomyStore from '../stores/TaxonomyStore.js';
import ProductsStore from '../stores/ProductsStore.js';
import TodoActionCreator from '../actions/TodoActionCreators';
import TaxonomyActionCreator from '../actions/TaxonomyActionCreators';
import BrowseActionsCreators from '../actions/BrowseActionCreators.js';
import App from './App.jsx';

export default React.createClass({
  _onChange() {
    console.log(TaxonomyStore.getActive());

    this.setState({
      tasks: TodoStore.getAll(),
      taxonomy: TaxonomyStore.getActive(),
      products: ProductsStore.getActiveProducts()
    });
  },

  getInitialState() {
    return {
      tasks: TodoStore.getAll(),
      taxonomy: TaxonomyStore.getActive(),
      products: ProductsStore.getActiveProducts()
    };
  },

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
    TaxonomyStore.addChangeListener(this._onChange);
    ProductsStore.addChangeListener(this._onChange);
    TaxonomyActionCreator.requestTaxonomy();
  },

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
    TaxonomyStore.removeChangeListener(this._onChange);
    ProductsStore.removeChangeListener(this_.onChange);


  },

  handleAddTask(e) {
    let title = prompt('Enter task title:');
    if (title) {
      TodoActionCreator.addItem(title);
    }
  },

  handleClear(e) {
    TodoActionCreator.clearList();
  },

  handleSubTagSelected(i) {
    TaxonomyActionCreator.selectSubTag(i);
    BrowseActionsCreators.browseSection(i);
  },

  render() {
    let {tasks} = this.state.tasks;
    let taxonomy = this.state.taxonomy;
    let products = this.state.products;

    console.log(taxonomy);
    return (
      <App
        onAddTask={this.handleAddTask}
        onClear={this.handleClear}
        tasks={tasks}
        taxonomy={taxonomy}
        onTagSelected={this.handleSubTagSelected}
        products={products}
        />
    );
  }
});
