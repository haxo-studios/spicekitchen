import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
// import Cover from 'react-video-cover'

const styles = theme => ({
    videoContainer: {
        position: 'absolute',
        zIndex: '-1',
        top: '0',
        bottom: '0',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        // pointerEvents: 'none',
        '& iframe': {
            width: '105vw',
            height: '58.25vw',
            minHeight: '100vh',
            minWidth: '177.77vh',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            [theme.breakpoints.down('sm') && theme.breakpoints.up('xs')]: {
                width: '145vw',
                height: '99.25vw',
            },
            [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
                width: '145vw',
                height: '85.25vw',
            },
            [theme.breakpoints.up('md')]: {
                width: '105vw',
                height: '58.25vw',
            },
        },
    },
})

class BGVideo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes, videoCode } = this.props
        const videoURL =
            'https://player.vimeo.com/video/' +
            videoCode +
            '?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&background=1'
        // console.log('## ', videoURL);

        return (
            <div className={classes.videoContainer}>
                <iframe
                    src={videoURL}
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                />
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                    }}
                />
            </div>
        )
    }
}

export default withStyles(styles)(BGVideo)
