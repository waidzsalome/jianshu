import React, { Component } from 'react';
import Topic from './component/Topic';
import Recommend from './component/Recommend';
import List from './component/List';
import Writer from './component/Writer';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from "./style";

class Home extends Component {
    render() {
        return (
               <HomeWrapper>
                   <HomeLeft>
                       <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4633/8db4df2059d947bf82382988d7cd228a0ec47e77.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner-img"/>
                       <Topic/>
                       <List/>
                   </HomeLeft>
                   <HomeRight>
                       <Recommend/>
                       <Writer/>
                   </HomeRight>
               </HomeWrapper>
        )
    }
}

export default Home