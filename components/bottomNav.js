import React from 'react'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const styles = theme => ({
    footer: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        height: '60px',
        width: '100%',
        background: 'transparent',
        // zIndex: 100,
        borderTop: '1px solid rgb(18,0,82, 0.5)',
        [theme.breakpoints.down('xs')]: {
            height: '120px',
        },
        // boxShadow:
        //     '2px 0px 4px 1px rgba(0,0,0,0.2),\
        //      4px 0px 8px 0px rgba(0,0,0,0.14),\
        //      1px 0px 10px 5px rgba(0,0,0,0.12)',
    },
    footerContainer: {
        height: '100%',
        padding: '0',
        [theme.breakpoints.down('xs')]: {
            height: '50%',
        },
    },
    link: {
        textDecoration: 'None',
        color: '#120052',
        fontSize: '16px',
        fontWeight: '700',
        fontFamily: 'Gotham Light',
        '&:hover': {
            textShadow: '#00c2ba 2px 2px',
        },
    },
    socialLink: {
        height: '100%',
        paddingTop: '20px',
        [theme.breakpoints.down('sm')]: {
            width: '100px',
        },
    },
    navLinkContainer: {
        [theme.breakpoints.down('sm')]: {
            maringTop: '20px',
        },
    },
    navLink: {
        height: '100%',
        paddingTop: '23px',
        [theme.breakpoints.down('sm')]: {
            width: '150px',
        },
    },
    aboutNavLink: {
        height: '100%',
        marginLeft: '-3px',
        paddingTop: '23px',
        [theme.breakpoints.down('sm')]: {
            width: '150px',
        },
    },
})

class BottomNav extends React.Component {
    render() {
        const { classes, pathname } = this.props
        return (
            <div className={classes.footer}>
                <Grid
                    container
                    spacing={8}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{
                        height: '100%',
                        margin: '0',
                    }}
                >
                    <Grid
                        item
                        sm={4}
                        xs={12}
                        className={classes.footerContainer}
                        style={{
                            padding: '0',
                        }}
                    >
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            style={{
                                height: '100%',
                            }}
                        >
                            <Grid
                                item
                                sm={6}
                                className={classes.socialLink}
                                style={{
                                    textAlign: 'center',
                                    borderRight: '1px solid rgb(18,0,82, 0.75)',
                                }}
                            >
                                <a href="#">
                                    <FaFacebookF size="2rem" color="#120052" />
                                </a>
                            </Grid>
                            <Grid
                                item
                                sm={6}
                                className={classes.socialLink}
                                style={{
                                    textAlign: 'center',
                                    // borderRight: '1px solid #120052',
                                }}
                            >
                                <a href="#">
                                    <FaLinkedinIn size="2rem" color="#120052" />
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        sm={4}
                        xs={false}
                        style={{
                            padding: '0px',
                        }}
                    />
                    <Grid
                        item
                        sm={4}
                        xs={12}
                        className={classes.footerContainer}
                        style={{
                            padding: '0',
                        }}
                    >
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            style={{
                                height: '100%',
                            }}
                            className={classes.navLinkContainer}
                        >
                            <Grid item md={4} sm={false} />
                            <Grid
                                item
                                md={4}
                                sm={6}
                                style={{
                                    textAlign: 'center',
                                    // borderLeft: '1px solid #120052',
                                }}
                                className={classes.aboutNavLink}
                            >
                                <Link
                                    href={pathname == '/about' ? '/' : '/about'}
                                >
                                    <a href="#" className={classes.link}>
                                        {/* <FaFacebookF size="2rem" color="#F04E23" /> */}
                                        {pathname == '/about'
                                            ? 'MENU'
                                            : 'ABOUT US'}
                                    </a>
                                </Link>
                            </Grid>
                            <Grid
                                item
                                md={4}
                                sm={6}
                                style={{
                                    textAlign: 'center',
                                    borderLeft: '1px solid rgb(18,0,82, 0.75)',
                                }}
                                className={classes.navLink}
                            >
                                <Link
                                    href={
                                        pathname == '/contact'
                                            ? '/'
                                            : '/contact'
                                    }
                                >
                                    <a href="#" className={classes.link}>
                                        {/* <FaLinkedinIn size="2rem" color="#F04E23" /> */}
                                        {pathname == '/contact'
                                            ? 'MENU'
                                            : 'CONTACT US'}
                                    </a>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(BottomNav)
