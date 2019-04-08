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
    .left {
        float: left;
    }
    .right {
        float: right;
        color: #969696;
    }
    .active{
        color: #ea6f5a;
    }
    ::placeholder{
        color: #999;
    }
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    .iconfont {
      font-size: 20px;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .iconfont {
        position: absolute;
        right: 5px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        bottom: 5px;
        &.focused{
          background: #777;
          color: #fff;
        }
    }
    .focused {
        width: 240px;
        
    }
    
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
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
`;

export const Addition = styled.div`
    position: absolute;
    right: 190px;
    top: 0;
    height: 56px;
    .reg {
      color: #ea6f5a;
    }
    .writting {
       color: #fff;
       background: #ea6f5a;
       position: relative;
    }
    .iconfont {
        position: absolute;
        left: 10px;
    }
`;


export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 30px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
`;

