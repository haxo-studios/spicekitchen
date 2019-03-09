import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import Head from '../components/head'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        position: 'absolute',
        height: '100%',
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
        minWidth: 275,
        zIndex: 100,
        marginTop: '175px',
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

const About = props => {
    const { classes } = props
    return (
        <>
            <Head title="About" />
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={1} />
                    <Grid item xs={4}>
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
                                    Welcome to Spice Kitchen, An authentic
                                    Indian cuisine located in heart of Melbourne
                                    CBD. We at the Spice Kitchen proud to say
                                    that we have served more than 2.5 million
                                    plates in last more than 10 years in
                                    multiple locations in Melbourne. We cook the
                                    food fresh everyday on site so that our
                                    guests get the best of authentcity and
                                    healthy food.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={6} className={classes.cardbg} />
                </Grid>
            </div>
        </>
    )
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(About)
