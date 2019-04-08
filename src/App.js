import React, { Component } from 'react';
import Header from './common/header/index'
import { GlobalStyle} from "./style";
import { IconStyle } from "./statics/iconfont/iconfont";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <IconStyle/>
        <Header/>
      </div>
    );
  }
}

export default App;
