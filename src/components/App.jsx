import React from 'react';
import mui from 'material-ui';
import {RouteHandler} from 'react-router';

let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;
let AppBar = mui.AppBar;

//let injectTapEventPlugin = require("react-tap-event-plugin");
//injectTapEventPlugin();

class App extends React.Component {
  constructor(){
    super();

    ThemeManager.setPalette({
      primary1Color: Colors.blue500,
      primary2Color: Colors.blue700,
      primary3Color: Colors.blue100,
      accent1Color: Colors.pink400
    });
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext(){
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render(){

    return (
      <div>
        <AppBar title="hackScape.io" />
        <RouteHandler />
      </div>
    );
  }
}

export default App;
