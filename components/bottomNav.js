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
        zIndex: 100,
        // boxShadow:
        //     '2px 0px 4px 1px rgba(0,0,0,0.2),\
        //      4px 0px 8px 0px rgba(0,0,0,0.14),\
        //      1px 0px 10px 5px rgba(0,0,0,0.12)',
    },
    link: {
        textDecoration: 'None',
        color: '#120052',
        fontSize: '16px',
        fontWeight: '700',
        fontFamily: 'Gotham',
        '&:hover': {
            textShadow: '#00c2ba 2px 2px',
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
                    <Grid item xs={4}>
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
                                xs={6}
                                style={{
                                    textAlign: 'center',
                                    borderRight: '1px solid #120052',
                                }}
                            >
                                <a href="#">
                                    <FaFacebookF size="2rem" color="#120052" />
                                </a>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                style={{
                                    textAlign: 'center',
                                    borderRight: '1px solid #120052',
                                }}
                            >
                                <a href="#">
                                    <FaLinkedinIn size="2rem" color="#120052" />
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} />
                    <Grid item xs={4}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            style={{
                                height: '100%',
                            }}
                        >
                            <Grid item xs={2}>

                            </Grid>
                            <Grid
                                item
                                xs={4}
                                style={{
                                    textAlign: 'center',
                                    borderLeft: '1px solid #120052',
                                }}
                            >
                                <Link href={ pathname == '/about' ? '/' : '/about'}>
                                    <a href="#" className={classes.link}>
                                        {/* <FaFacebookF size="2rem" color="#F04E23" /> */}
                                        { pathname == '/about' ? 'MENU' : 'ABOUT US'}
                                    </a>
                                </Link>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                style={{
                                    textAlign: 'center',
                                    borderLeft: '1px solid #120052',
                                }}
                            >
                                <Link href={pathname == '/contact' ? '/' : "/contact" }>
                                    <a href="#" className={classes.link}>
                                        {/* <FaLinkedinIn size="2rem" color="#F04E23" /> */}
                                        {pathname == '/contact' ? 'MENU' : 'CONTACT US'}
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
