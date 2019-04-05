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
        'boxShadow': 'none'
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
    },
})

class Nav extends React.Component {
    state = {
        open: false,
        active: 'Aloo',
        dishes: {
            'Veg Thali': {
                url:
                    'https://player.vimeo.com/play/1287235106?s=328398123_1554430534_5c9a6abfb09a129a0d855cdb21e5f02d&loc=external&context=Vimeo%5CController%5CClipController.main&download=1',
                price: '$ 09.50',
            },
            'Tandoori Platter': {
                url:
                    'https://player.vimeo.com/play/1287230934?s=328397186_1554430679_b0023e46d8861e655662fab147518b9f&loc=external&context=Vimeo%5CController%5CClipController.main&download=1',
                price: '$ 10.00',
            },
            'Special Thalli': {
                url:
                    'https://player.vimeo.com/play/1287227235?s=328396579_1554430886_728631bdda4ee70f709975731fdbe121&loc=external&context=Vimeo%5CController%5CClipController.main&download=1',
                price: '$ 11.50',
            },
            'Samosa': {
                url:
                    'https://player.vimeo.com/play/1287222124?s=328395792_1554430922_013cc95182fbbed40bc932cd36e23f9a&loc=external&context=Vimeo%5CController%5CClipController.main&download=1',
                price: '$ 04.99',
            },
            'Mix Thalli' : {
                url:
                    'https://player.vimeo.com/play/1287219068?s=328394588_1554430948_51a0f1512943c76f726c6868fb644d9e&loc=external&context=Vimeo%5CController%5CClipController.main&download=1',
                price: '$ 06.00',
            },
            'Non-Veg Thalli': {
                url:
                    'https://player.vimeo.com/external/210753133.hd.mp4?s=881de7a305d924e1ae69fb9eda27ee73666e6aa0&profile_id=119&oauth2_token_id=57447761&download=1',
                price: '$ 07.50',
            },
            Dosa: {
                url:
                    'https://player.vimeo.com/play/1287205491?s=328391099_1554429868_241a498adcb94a27a6cb824ea687dccc&loc=external&context=Vimeo%5CController%5CClipController.main&download=1',
                price: '$ 13.99',
            },
            Aloo: {
                url:
                    'https://player.vimeo.com/play/1287187367?s=328389004_1554429936_739689e9724206e78685c15d26b349e1&loc=external&context=Vimeo%5CController%5CClipController.main&download=1',
                price: '$ 13.99',
            },
        },
    }

    handleDrawerOpen = () => {
        this.interval = setInterval(() => this.tick(), 10000)
        this.setState({ open: true })
    }

    handleDrawerClose = () => {
        clearInterval(this.interval)
        this.setState({ open: false })
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
                        <Link href="/">
                            <img
                                src="/static/logo.png"
                                style={{
                                    height: '100px',
                                    width: '100px',
                                    marginLeft: '20px',
                                    cursor: 'pointer',
                                    // transform:
                                    //     pathname === '/about'
                                    //         ? 'translate3d(-10px, -12px, 0) scale(0.75)'
                                    //         : 'none',
                                    // transition: 'transform 300ms linear',
                                }}
                            />
                        </Link>
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
                                    pathname === '/about'
                                        ? 'none'
                                        : open
                                        ? 'none'
                                        : 'inline',
                            }}
                        >
                            <span>VIEW MENU</span>
                        </div>
                        {/* <IconButton
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
                                display: pathname === '/about' ? 'none' : '',
                            }}
                        >
                            <MenuIcon
                                style={{
                                    color: '#333',
                                    fontSize: '30px',
                                }}
                            />
                        </IconButton> */}
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
                                        updateVideo(
                                            this.state.dishes[text]['url']
                                        )
                                    }
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
