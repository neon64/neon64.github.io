import React from "react"
import SEO from "../components/seo"
import { Body, BodyCenter } from "../components/body"
import Footer from "../components/footer"
import SiteHeader from "../components/siteHeader"

const NotFoundPage = () => (
    <>
        <SiteHeader />
        <SEO title="Blog" />
        <Body>
            <BodyCenter>
            <h1>Alas, no posts yet!</h1>
            <p>I'm working on some projects worthy of sharing with the wider internet. Stay tuned.</p>
            </BodyCenter>
        </Body>
        <Footer floatBottom={true} />
    </>
)

export default NotFoundPage
