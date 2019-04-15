import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    bg: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        backgroundImage: "url('/static/bgimage.jpg')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
})

class CoverImage extends Component {
    render() {
        const { classes } = this.props
        return <div className={classes.bg} />
    }
}

export default withStyles(styles)(CoverImage)
