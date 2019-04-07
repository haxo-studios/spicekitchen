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

import { FaCaretRight } from 'react-icons/fa'

const drawerWidth = 317

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        boxShadow: 'none',
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
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
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    drawerHeader: {
        display: 'flex',
        width: '100%',
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
    viewMenuBtn: {
        color: '#120052',
        display: 'inline',
        float: 'right',
        margin: '37px 15px 0 0',
        width: '160px',
        height: '30px',
        fontFamily: 'Gotham',
        fontSize: '26px',
        fontWeight: '400',
        cursor: 'pointer',
        '&:hover': {
            textShadow: '#00c2ba 3px 3px',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '25px',
        },
    },
    menuTxt: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'inline',
            float: 'right',
            pointerEvents: 'none',
        },
    },
    listItem: {
        '& span': {
            fontFamily: 'Gotham',
            fontSize: '18px',
        },
    },
    sideNavTitle: {
        fontFamily: 'Gotham',
        fontSize: '24px',
        marginLeft: '25%',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    logo: {
        height: '100px',
        width: '100px',
        marginLeft: '20px',
        cursor: 'pointer',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
        },
    },
    logoContainer: {
        display: 'inline',
    },
    menuClose: {
        [theme.breakpoints.down('xs')]: {
            // float: 'right'
            marginLeft: 'auto'
        },
    }
})

class Nav extends React.Component {
    state = {
        open: false,
        active: 'Veg Thali',
        dishes: {
            'Chicken Briyani': {
                url: '328605174',
                price: '$ 11.95',
            },
            'Aloo Paratha': {
                url: '328605133',
                price: '$ 07.50',
            },
            'Samosa Chat': {
                url: '328611999',
                price: '$ 07.95',
            },
            'Mix Thali': {
                url: '328611974',
                price: '$ 10.50',
            },
            'Tandoori Platter': {
                url: '328615288',
                price: '$ 12.95',
            },
            'Special Thali': {
                url: '328613414',
                price: '$ 12.95',
            },
            Dosa: {
                url: '328605920',
                price: '$ 07.95',
            },
            'Veg Thali': {
                url: '328615335',
                price: '$ 09.95',
            },
        },
    }

    handleDrawerOpen = () => {
        this.tick()
        this.interval = setInterval(() => this.tick(), 12000)
        this.setState({ open: true })
        console.log(this.interval)
    }

    handleDrawerClose = () => {
        clearInterval(this.interval)
        this.setState({ open: false })
        console.log(this.interval)
    }

    tick() {
        let dishesList = Object.keys(this.state.dishes)
        let currentVideoIndex = dishesList.indexOf(this.state.active)
        let nextVideo
        if (currentVideoIndex == dishesList.length - 1) {
            nextVideo = dishesList[0]
        } else {
            nextVideo = dishesList[currentVideoIndex + 1]
        }
        let nextURL = this.state.dishes[nextVideo]['url']
        // console.log(nextURL, nextVideo)

        this.setState(prevState => ({
            active: nextVideo,
        }))
        this.props.updateVideo(nextURL)
    }

    render() {
        const { classes, theme, updateVideo, pathname } = this.props
        const { open } = this.state

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                    style={{
                        background: 'transparent',
                        // height: pathname === '/about' ? '75px' : '100px',
                        // transition: 'height 300ms linear',
                    }}
                >
                    <div>
                        <div className={classes.logoContainer}>
                            <Link href="/">
                                <img
                                    className={classes.logo}
                                    src="/static/logo.png"
                                />
                            </Link>
                        </div>
                        <div
                            // color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(
                                classes.viewMenuBtn
                                // open && classes.hide
                            )}
                            style={{
                                // marginTop:
                                //     pathname === '/about' ? '12px' : '24px',
                                // transition: 'margin 300ms linear',
                                display:
                                    pathname === '/about' ||
                                    pathname === '/contact'
                                        ? 'none'
                                        : open
                                        ? 'none'
                                        : 'inline',
                            }}
                        >
                            <span className={classes.menuTxt}>VIEW MENU</span>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(
                                    classes.menuButton,
                                    open && classes.hide
                                )}
                                style={{
                                    // marginTop:
                                    //     pathname === '/about' ? '12px' : '24px',
                                    // transition: 'margin 300ms linear',
                                    display:
                                        pathname === '/about' ? 'none' : '',
                                }}
                            >
                                <MenuIcon
                                    style={{
                                        color: '#333',
                                        fontSize: '30px',
                                    }}
                                />
                            </IconButton>
                        </div>
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
                    <div
                        className={classes.drawerHeader}
                        style={{
                            minHeight: pathname === '/about' ? '77px' : '102px',
                            height: pathname === '/about' ? '77px' : '102px',
                        }}
                    >
                        <IconButton
                            className={classes.menuClose}
                            onClick={this.handleDrawerClose}
                        >
                            {theme.direction === 'rtl' ? (
                                <ChevronLeftIcon />
                            ) : (
                                <ChevronRightIcon />
                            )}
                        </IconButton>
                        <span className={classes.sideNavTitle}>Menu</span>
                    </div>
                    <Divider />
                    <List>
                        {Object.keys(this.state.dishes).map((text, index) => (
                            <ListItem
                                button
                                key={text}
                                onClick={() => {
                                    updateVideo(this.state.dishes[text]['url'])
                                    this.setState(prevState => ({
                                        active: text,
                                    }))
                                }}
                                style={{
                                    padding: '5px 16px 5px 16px',
                                    height: '50px',
                                    fontFamily: 'Gotham',
                                    fontSize: '18px',
                                }}
                            >
                                <span
                                    style={{
                                        marginRight: '10px',
                                    }}
                                >
                                    <FaCaretRight
                                        size="2rem"
                                        color={
                                            this.state.active == text
                                                ? '#120052'
                                                : '#D3D3D3'
                                        }
                                    />
                                </span>
                                <ListItemText
                                    primary={text}
                                    className={classes.listItem}
                                />
                                <span>{this.state.dishes[text]['price']}</span>
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
