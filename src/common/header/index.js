import React, { Component } from 'react';
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import  { actionCreators } from './store'
import {
    HeaderWrapper,
    WidthLimit,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button,
    SearchWrapper,

} from "./style";

class Header extends Component {

     getListArea  ()  {
        if (this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <span className="Info">&#xe604;</span>
                        <SearchInfoSwitch>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            this.props.list.map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        }
        else
            return null;
    };


    render() {
        return(
            <HeaderWrapper>
                <WidthLimit>
                    <Logo/>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        <NavItem className="right">登录</NavItem>
                        <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={this.props.focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <NavSearch
                                    className={this.props.focused ? 'focused' : ''}
                                    onFocus={this.props.handleInputFocus}
                                    onBlur={this.props.handleInputBlur}
                                />
                            </CSSTransition>
                            <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe623;</span>
                            {this.getListArea()}
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

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header','list'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
