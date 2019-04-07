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
        backgroundImage: "url('/static/about.png')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    aboutChild: {
        flexGrow: 0,
        flexBasis: '57%',
    },
    emptyChild: {
        flexGrow: 0,
        flexBasis: '43%',
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
        marginTop: '150px',
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
        fontSize: 35,
        textAlign: 'center',
    },
    pos: {
        marginBottom: 12,
    },
    content: {
        fontSize: 20,
        textAlign: 'center',
    },
})

class About extends React.Component {
    render() {
        const { classes } = this.props

        return (
            <>
                <Head title="About | Spice Kitchen" />
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
                    </div>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(About)
