import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
// import Head from './head'
import BGVideo from './coverVideo'
import Nav from './nav'
import BottomNav from './bottomNav'
import Banner from './banner'

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
    state = {
        videoCode: '328795534'
    }

    updateVideo = url => {
        this.setState({
            videoCode: url,
        })
    }

    render() {
        const { children, pathname } = this.props
        const isIndex = pathname === '/'
        console.log('>>', isIndex)

        return (
            <>
                {isIndex ? <BGVideo videoCode={this.state.videoCode} /> : <></>}
                <div>
                    <GlobalStyle />
                    <Nav pathname={pathname} updateVideo={this.updateVideo} />
                    {isIndex ? <></> : <Banner pathname={pathname} />}

                    {children}
                    <BottomNav pathname={pathname} />
                </div>
            </>
        )
    }
}

export default Layout
