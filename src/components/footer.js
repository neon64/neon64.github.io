import React from "react"
import styled from "@emotion/styled"
import hoverAnchor from "./hoverAnchor"

import Typography from "../utils/typography"

const headerFontFamily = Typography.options.headerFontFamily.join(", ");

const FooterContainer = styled.footer`
    background-color: ${props => props.darkMode ? 'rgba(10, 10, 10, 0.8)' : '#222' };
    color: #ccc;
    font-family: ${headerFontFamily};
    font-size: 0.8em;
    border-top: ${props => props.darkMode ? '1px solid #222' : '0'};
    position: ${props => props.floatBottom ? 'absolute' : 'static' };
    bottom: 0;
    left: 0;
    right: 0;

    @media print {
        display: none;
    }

    a {
        color: #eee;
        ${hoverAnchor}

        &::before {
            background-color: #eee;
        }
    }
`;

const Copyright = styled.div`
    text-align: center;
    padding: 2em;
`;

export default class Footer extends React.Component {
    render() { return (
        <FooterContainer darkMode = { this.props.darkMode } floatBottom={ this.props.floatBottom }>
            {/* <div css={footerPages}>
                <PageList>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><a href="https://github.com/neon64">Code</a></li>
                    <li><Link to="/cv">Online CV</Link></li>
                </PageList>
            </div> */}
            <Copyright>This personal website was designed &amp; built by me, Chris Chamberlain, using Gatsby.js, React and other open-source libraries.</Copyright>
        </FooterContainer>
    ) }
}