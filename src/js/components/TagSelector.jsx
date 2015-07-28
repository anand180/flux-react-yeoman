import React, {PropTypes} from 'react';

import {AppCanvas, RaisedButton, Styles, Tabs, Tab} from 'material-ui';
const Colors = Styles.Colors;



export default React.createClass({

  propTypes: {
    taxonomy: PropTypes.object.isRequired,
    onSelected: PropTypes.func.isRequired

  },

  getInitialState() {
    return {};
  },

  componentDidMount() {
  },
  _buildTab(tag) {
    return (
      <Tab key={tag.tag} label={tag.name} style={{color: Colors.darkBlack}}>
        {tag.name}
      </Tab>
    );
  },

  render() {
    let subtags = this.props.taxonomy.subTags;
    console.log(subtags);

    let selectors = subtags.map(tag => {return this._buildTab(tag)});


    return (
      <div>

      <p>Hello, world!</p>

        <Tabs onChange={this.props.onSelected}>
        {selectors}
        </Tabs>
      </div>
    );
  }
});
