import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,  Route} from 'react-router-dom'
import Header from './common/header/index'
import store from './store/index'
import { GlobalStyle} from "./style";
import { IconStyle } from "./statics/iconfont/iconfont";
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <IconStyle/>

        <Provider store={store}>
            <Header/>
            <BrowserRouter>
                <Route path='/' exact component={Home}/>
                <Route path='/detail' exact component={Detail}/>
            </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
