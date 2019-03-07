import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
// import Head from './head'
import BGVideo from './coverVideo'
import Nav from './nav'
import BottomNav from './bottomNav'

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
            'https://player.vimeo.com/external/190379184.hd.mp4?s=59825eba6da26d4f767b1754dba28a7172db85cf&profile_id=119&oauth2_token_id=57447761&download=1',
    }

    updateVideo = url => {
        console.log('>>> ',url);
        this.setState({
            videoURL: url
        })
        console.log(this.state);
        
    }

    render() {
        const { children, pathname } = this.props

        return (
            <>
                <BGVideo videoURL={this.state.videoURL} />
                <div>
                    <GlobalStyle />
                    <Nav pathname={pathname} updateVideo={this.updateVideo} />
                    {children}
                    <BottomNav />
                </div>
            </>
        )
    }
}

export default Layout
