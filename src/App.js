import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Header from './common/header/index'
import store from './store/index'
import { GlobalStyle} from "./style";
import { IconStyle } from "./statics/iconfont/iconfont";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <IconStyle/>
        <Provider store={store}>
            <Header/>
        </Provider>
      </div>
    );
  }
}

export default App;
