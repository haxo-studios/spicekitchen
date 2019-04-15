import React from 'react'
import Head from '../components/head'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    container: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundImage: "url('/static/contact.png')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    aboutChild: {
        flexGrow: 0,
        flexBasis: '57%',
        [theme.breakpoints.down('xs')]: {
            flexBasis: '100%',
        },
    },
    emptyChild: {
        flexGrow: 0,
        flexBasis: '43%',
        [theme.breakpoints.down('xs')]: {
            flexBasis: '0%',
        },
    },
    contactUs: {
        display: 'flex',
        height: '100%',
        width: '50%',
        right: '0',
        position: 'absolute',
    },
    cardbg: {
        width: '100%',
        height: '100%',
    },
    card: {
        // minWidth: 275,
        zIndex: 0,
        width: '100%',
        marginTop: '140px',
        padding: '0 10% 0 10%',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        // [theme.breakpoints.down('sm') && theme.breakpoints.up('xs')]: {
        //     fontSize: '22px'
        // },
        [theme.breakpoints.down('sm')]: {
            marginTop: '100px',
        },
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: '35px',
        textAlign: 'right',
        [theme.breakpoints.down('sm') && theme.breakpoints.up('xs')]: {
            fontSize: '28px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '35px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '22px'
        },
    },
    pos: {
        marginBottom: 12,
    },
    content: {
        fontSize: '20px',
        marginTop: '40px',
        textAlign: 'right',
        [theme.breakpoints.down('sm') && theme.breakpoints.up('xs')]: {
            fontSize: '20px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '24px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px'
        },
    },
})

class Contact extends React.Component {
    render() {
        const { classes } = this.props

        return (
            <>
                <Head title="Contact | Spice Kitchen" />
                <div className={classes.container}>
                    <div className={classes.emptyChild} />
                    <div className={classes.aboutChild}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    color="textSecondary"
                                    gutterBottom
                                >
                                    Contact Us
                                </Typography>
                                <Typography
                                    component="p"
                                    className={classes.content}
                                >
                                    <span style={{}}>
                                        Give Us a Call - 0370149003 <br />
                                    </span>

                                    <span
                                        style={{
                                            marginTop: '15px',
                                        }}
                                    >
                                        Level 1, opp. Dan Murphys, QV Building,{' '}
                                        <br />
                                        210 Lonsdale St. Melbourne VIC - 3000
                                    </span>
                                </Typography>
                                {/* <div style={{ height: '100vh', width: '100%' }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: '' }}
                                    defaultCenter={this.props.center}
                                    defaultZoom={this.props.zoom}
                                >
                                    <AnyReactComponent
                                        lat={59.955413}
                                        lng={30.337844}
                                        text={'Kreyser Avrora'}
                                    />
                                </GoogleMapReact>
                            </div> */}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(Contact)
