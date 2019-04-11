import styled from 'styled-components'
import logoPic from '../../statics/nav-logo-4c7bbafe27adc892f3046e6978459bac.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`;

export const WidthLimit = styled.div`
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;

`;

export const Logo = styled.a.attrs({
    href:'/'
})`
    position: absolute;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 945px;
    height: 58px;
    margin: 0 auto;
    
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
    .iconfont {
        font-size: 25px;
    }
    
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    
    .zoom {
        position: absolute;
        right: 5px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        bottom: 5px;
        color: #777;
        &.focused{
          background: #777;
          color: #fff;
        }
    }   
    
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 200px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    color: #666;
    font-size: 14px;
    &::placeholder{
        color: #999;
    }
    &.focused {
        width: 280px;       
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 280px;        
    }
    &.slide-exit {
       transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 200px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 25px;
    top: 58px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;    
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`;
export const Addition = styled.div`
    position: absolute;
    right: 190px;
    top: 0;
    height: 56px;
`;


export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 30px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    &.reg {
      color: #ea6f5a;
    }
    &.writting {
       color: #fff;
       background: #ea6f5a;
       position: relative;       
    }
    .iconfont {
        position: absolute;
        left: 10px;
        font-size: 20px;
    }
`;
