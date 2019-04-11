import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserHistory, Route } from "react-router-dom";
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
            <BrowserHistory>
                <Route path='/' />
            </BrowserHistory>
        </Provider>
      </div>
    );
  }
}

export default App;
