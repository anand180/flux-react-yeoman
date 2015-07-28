import React, {PropTypes} from 'react';
import TaskList from './TaskList.jsx';
import TagSelector from './TagSelector.jsx';
import ProductGrid from './ProductGrid.jsx';


import {AppCanvas, RaisedButton, Styles, Tabs, Tab} from 'material-ui';

import TaxonomyAction from '../actions/TaxonomyActionCreators.js'

import {fetchTaxonomy, fetchProduct, browse} from '../utils/APIUtils.js'

const Colors = Styles.Colors;

const ThemeManager = new Styles.ThemeManager();

ThemeManager.getCurrentTheme().setPalette({
  primary1Color: Colors.white,
  primary2Color: Colors.white,
  primary3Color: Colors.white,
  accent1Color: Colors.blueA200,
  accent2Color: Colors.blueA400,
  accent3Color: Colors.blueA100,
  secondaryColor: Colors.darkBlack,
  secondaryTextColor: Colors.darkBlack
});




//ThemeManager.setTheme(ThemeManager.types.DARK);



export default React.createClass({
  propTypes: {
    tasks: PropTypes.array.isRequired,
    taxonomy: PropTypes.object.isRequired,

    onAddTask: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    onTagSelected: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      tasks: []
    }
  },

  _getTabs() {

  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount() {
    ThemeManager.setComponentThemes({
      tab: {
        color: Colors.darkBlack
      }
    });
  },

  render() {
    let {onAddTask, onClear, tasks, taxonomy, onTagSelected, products} = this.props;

    console.log(taxonomy);
    console.log(products);


    let selector = taxonomy && taxonomy.tag ? <TagSelector taxonomy={taxonomy} onSelected={onTagSelected} /> : null;



    return (
      <div className="example-page">
        <h1>Learning Flux</h1>
        <p>
          Below is a list of tasks you can implement to better grasp the patterns behind Flux.<br />
          Most features are left unimplemented with clues to guide you on the learning process.
        </p>

        <TaskList tasks={tasks} />

        <RaisedButton label="Add Task" primary={true} onClick={onAddTask} />
        <RaisedButton label="Clear List" secondary={true} onClick={onClear} style={{color: Colors.darkBlack, labelColor: Colors.darkBlack, secondaryTextColor: Colors.darkBlack}}/>


        <Tabs>
          <Tab label="Item One" style={{color: Colors.darkBlack}}>
            <div>
              <h2>Tab One Template Example</h2>
              <p>
                This is an example of a tab template!
              </p>
              <p>
                You can put any sort of HTML or react component in here.
              </p>
            </div>
          </Tab>
          <Tab label="Item Two" style={{color: Colors.darkBlack}}>
            <div>
              <h2>Tab Two Template Example</h2>
              <p>
                This is another example of a tab template!
              </p>
              <p>
                Fair warning - the next tab routes to home!
              </p>
            </div>
          </Tab>
        </Tabs>

        {selector}

        <ProductGrid products={products} />

      </div>
    );
  }
});
