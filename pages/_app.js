import App, { Container } from 'next/app'
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

export default class SpiceKitchen extends App {
    constructor(props) {
        super(props)
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <div>
                    <Layout>
                        <Component {...pageProps} {...this.state} />
                    </Layout>
                </div>
            </Container>
        )
    }
}
