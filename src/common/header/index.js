import React, { Component } from 'react'
import {
    HeaderWrapper,
    WidthLimit,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper

} from "./style";

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            focused: true
        }
    }

    render() {
        return (
            <HeaderWrapper>
                <WidthLimit>
                <Logo/>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        <NavItem className="right">登录</NavItem>
                        <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
                        <SearchWrapper>
                        <NavSearch className={this.state.focused ? 'focused' : ''}/><span className="iconfont">&#xe623;</span>
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className="writting"><span className="iconfont">&#xe60f;</span>写文章</Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </WidthLimit>

            </HeaderWrapper>
        )
    }

}

export default Header;