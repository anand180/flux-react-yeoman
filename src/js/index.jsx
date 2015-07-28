import React from 'react';
import AppContainer from './components/AppContainer.jsx';

var injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

React.render(<AppContainer />, document.getElementById('main'));
