import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

const drawerWidth = 240

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    menuButton: {
        display: 'inline',
        float: 'right',
        margin: '24px 20px 0px 0px;',
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        zIndex: 1,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
        height: '100px',
        [theme.breakpoints.up('md')]: {
            minHeight: '102px',
        },
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
})

class Nav extends React.Component {
    state = {
        open: false,
        dishes: {
            'Chicken Briyani':
                'https://player.vimeo.com/external/164821330.hd.mp4?s=a8f966e7e48f9ce5ac1d0e0019f9a1425750cb9e&profile_id=119&oauth2_token_id=57447761&download=1',
            Tandoori:
                'https://player.vimeo.com/external/220260300.hd.mp4?s=e8b9a1ddb3f45083b427551a144d1ffdc093edfd&profile_id=119&oauth2_token_id=57447761&download=1',
            'Mutton Briyani':
                'https://player.vimeo.com/external/164821330.hd.mp4?s=a8f966e7e48f9ce5ac1d0e0019f9a1425750cb9e&profile_id=119&oauth2_token_id=57447761&download=1',
            Cookies:
                'https://player.vimeo.com/external/307731311.hd.mp4?s=6beaf9b10a7d66fdb562a130ec38e19041fd9b1e&profile_id=175&oauth2_token_id=57447761&download=1',
            Sandwich:
                'https://player.vimeo.com/external/210753630.hd.mp4?s=0989ae3bed6d7790834e3cb4c806c4c0ef984fa6&profile_id=119&oauth2_token_id=57447761&download=1',
            'Fruit Bowl':
                'https://player.vimeo.com/external/210753133.hd.mp4?s=881de7a305d924e1ae69fb9eda27ee73666e6aa0&profile_id=119&oauth2_token_id=57447761&download=1',
            Barbecue:
                'https://player.vimeo.com/external/220260309.hd.mp4?s=f983ad8dce377e2d077f992abb6e38f96c561637&profile_id=119&oauth2_token_id=57447761&download=1',
        },
    }

    handleDrawerOpen = () => {
        this.setState({ open: true })
    }

    handleDrawerClose = () => {
        this.setState({ open: false })
    }

    render() {
        const { classes, theme, updateVideo } = this.props
        const { open } = this.state

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                    style={{ background: 'transparent' }}
                >
                    <div>
                        <Link href="/">
                            <img
                                className="logo"
                                src="/static/logo.png"
                                style={{
                                    height: '100px',
                                    width: '100px',
                                    marginLeft: '20px',
                                    cursor: 'pointer'
                                }}
                            />
                        </Link>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(
                                classes.menuButton,
                                open && classes.hide
                            )}
                        >
                            <MenuIcon
                                style={{
                                    color: '#333',
                                    fontSize: '30px',
                                }}
                            />
                        </IconButton>
                    </div>
                </AppBar>

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? (
                                <ChevronLeftIcon />
                            ) : (
                                <ChevronRightIcon />
                            )}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {Object.keys(this.state.dishes).map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText
                                    primary={text}
                                    onClick={() =>
                                        updateVideo(this.state.dishes[text])
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Drawer>
            </div>
        )
    }
}

Nav.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Nav)
