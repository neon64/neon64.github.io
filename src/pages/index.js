import React from "react"
import Typist from 'react-typist';
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { FaSoundcloud, FaGithub, FaLinkedin } from "react-icons/fa";
import { Terminal, TerminalCenter } from "../components/terminal"
import SiteHeader from "../components/siteHeader"
import Footer from "../components/footer"

const WipeDown = styled.div`
    height: ${props => props.hide ? 0 : `12em` };
    transition: height 3s linear;
    overflow: hidden;
`;

const SocialButtons = styled.ul`
    list-style-type: none;
    display: flex;
    margin: 0 auto;
    padding: 2rem 0;
    max-width: 30rem;
    flex-wrap: wrap;
    justify-content: center;

    li {
        margin: 0;
    }

    a {
        margin: 0 1rem;
        transition: opacity 1s ease;
        opacity: 0.8;
        font-size: 4rem;
        width: 6rem;
        height: 6rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const hideOnMobile = css`
    @media screen and (max-width: 700px) {
        display: none;
    }
`;

export default class Index extends React.Component {

    state = { socialHidden: true, secondHidden: true };

    componentDidMount() {
        setTimeout(() => this.setState({ socialHidden: false }), 300);
        setTimeout(() => this.setState({ secondHidden: false }), 3300);
    }

    render = () => (
        <>
        <SEO title="Home" />
        <Terminal>
            <SiteHeader darkMode={true} />
            <TerminalCenter>
                <div style={{ height: "20rem" }}>
                    <WipeDown hide={this.state.socialHidden}>
                        <SocialButtons>
                            <li><a href="https://www.linkedin.com/in/chris-j-chamberlain" target="_blank" rel="noopener noreferrer"><FaLinkedin aria-label="Add me on LinkedIn" /></a></li>
                            <li><a href="https://github.com/neon64" target="_blank" rel="noopener noreferrer"><FaGithub aria-label="View my GitHub" /></a></li>
                            <li><a href="https://soundcloud.com/chris-chamberlain-music" target="_blank" rel="noopener noreferrer"><FaSoundcloud aria-label="Listen to my SoundCloud" /></a></li>
                        </SocialButtons>
                    </WipeDown>
                    { !this.state.secondHidden &&
                        <pre css={hideOnMobile}><Typist cursor={{ show: true, blink: true, element: '|', hideWhenDone: true, hideWhenDoneDelay: 1000 }} avgTypingDelay={30}>
                            &gt; Todo: write blog posts
                        </Typist></pre>
                    }
                </div>
            </TerminalCenter>
            <Footer darkMode={true} floatBottom={true} />
        </Terminal>
        </>
    )
}
