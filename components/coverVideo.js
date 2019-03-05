import React, { Component } from 'react'
import Cover from 'react-video-cover'

class BGVideo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videoURL: 'https://vimeo.com/321129995',
        }
    }

    render() {
        const videoOptions = {
            src:
                'https://player.vimeo.com/external/190379184.hd.mp4?s=59825eba6da26d4f767b1754dba28a7172db85cf&profile_id=119&oauth2_token_id=57447761&download=1',
            autoPlay: true,
            muted: true,
            loop: true,
        }
        return (
            <div
                className="videoContainer"
                style={{
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                }}
            >
                <Cover
                    videoOptions={videoOptions}
                    remeasureOnWindowResize
                    getResizeNotifier={resizeNotifier => {
                        this.setState({
                            resizeNotifier,
                        })
                    }}
                    style={{
                        objectFit: 'cover',
                        // width: '100%',
                        // height: '100%',

                        minWidth: '100%',
                        minHeight: '100%',

                        /* Setting width & height to auto prevents the browser from stretching or squishing the video */
                        width: 'auto',
                        height: 'auto',

                        /* Center the video */
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)',
                    }}
                />
            </div>
        )
    }
}

export default BGVideo
