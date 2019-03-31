import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import GoogleMapReact from 'google-map-react'

const styles = theme => ({
    container: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        position: 'absolute',
        height: '100%',
    },
    child: {
        flexGrow: 0,
        flexBasis: '50%',
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
        backgroundImage: "url('/static/cardbg.jpg')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    card: {
        // minWidth: 275,
        zIndex: 0,
        width: '100%',
        marginTop: '175px',
        padding: '0 10% 0 10%',
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
    },
    pos: {
        marginBottom: 12,
    },
    content: {
        fontSize: 16,
        textAlign: 'center',
    },
})

const LocationComponent = ({ text }) => <div>{text}</div>

class About extends React.Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33,
        },
        zoom: 11,
    }

    render() {
        const { classes, pathname } = this.props
        console.log('-->', pathname)

        return (
            <div className={classes.container}>
                <div className={classes.child}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                About Us
                            </Typography>
                            <Typography
                                component="p"
                                className={classes.content}
                            >
                                Welcome to Spice Kitchen, An authentic Indian
                                cuisine located in heart of Melbourne CBD. We at
                                the Spice Kitchen proud to say that we have
                                served more than 2.5 million plates in last more
                                than 10 years in multiple locations in
                                Melbourne. We cook the food fresh everyday on
                                site so that our guests get the best of
                                authentcity and healthy food.
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div
                    className={classes.child}
                    style={{
                        zIndex: 1,
                        transform:
                            pathname === '/contact'
                                ? 'translate3d(-101%, 0, 0)'
                                : 'none',
                        // transition: 'transform 500ms ease-in',
                    }}
                >
                    <div className={classes.cardbg} style={{}} />
                </div>
                <div className={classes.contactUs}>
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
                                0370149003 <br />
                                <br />
                                Level 1, opp. Dan Murphys, QV Building, <br />
                                210 Lonsdale St. Melbourne VIC - 3000
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
        )
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(About)
