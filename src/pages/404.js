import React from "react"
import SEO from "../components/seo"
import { Body, BodyCenter } from "../components/body"
import Footer from "../components/footer"
import SiteHeader from "../components/siteHeader"

const NotFoundPage = () => (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <SiteHeader />
        <SEO title="404: Not found" />
        <Body style={{ flex: 1 }}>
            <BodyCenter>
                <h1>Error 404: Not Found</h1>
                <p>You just tried to visit a page which doesn&#39;t exist.<br />If you believe this is a mistake, it would be fantastic if you could contact me on <a href="https://github.com/neon64" target="_blank" rel="noopener noreferrer">GitHub</a> to help fix it.</p>
            </BodyCenter>
        </Body>
        <Footer />
    </div>
)

export default NotFoundPage
