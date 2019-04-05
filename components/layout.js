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
        videoURL:
            'https://player.vimeo.com/play/232636299?s=88238381_1554465336_e4dad605e437685e4f3b6a008e9cc21c&loc=external&context=Vimeo%5CController%5CClipController.main&download=1',
    }

    updateVideo = url => {
        console.log('>>> ', url)
        this.setState({
            videoURL: url,
        })
        console.log(this.state)
    }

    render() {
        const { children, pathname } = this.props
        const isIndex = pathname === '/'
        console.log('>>', isIndex)

        return (
            <>
                {isIndex ? <BGVideo videoURL={this.state.videoURL} /> : <></>}
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
