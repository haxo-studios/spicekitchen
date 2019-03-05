import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
// import Head from './head'
import BGVideo from './coverVideo'
import Nav from './nav'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'garamond-light';
        src: url('/static/GARA.TTF');
        font-weight: normal;
        font-style: normal;
    }

    html {
        box-sizing: border-box;
        font-size: 10px;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }
`

class Layout extends Component {
    render() {
        const { children } = this.props
        return (
            <>
                <BGVideo />
                <div>
                    <GlobalStyle />
                    <Nav />
                    {children}
                </div>
            </>
        )
    }
}

export default Layout
