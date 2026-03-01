import React from "react"
import styled from "@emotion/styled"

import { Link } from "gatsby"

import Typography from "../utils/typography"
import hoverAnchor from "./hoverAnchor"

const headerFontFamily = Typography.options.headerFontFamily.join(", ");


const SiteHeader = styled.div`
    background-color: ${props => props.darkMode ? 'rgba(10, 10, 10, 0.8)' : '#eee'};
    border-bottom: ${props => props.darkMode ? '1px solid #222' : '0'};
    position: relative;
    z-index: 10;

    a {
        color: ${props => props.darkMode ? '#ddd' : 'initial'};
        text-decoration: none;
    }

    a:hover {
        color: ${props => props.darkMode ? '#fff' : 'black'};
    }
`;

const SiteHeaderCenter = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

const SiteTitle = styled.h1`
    font-family: "Lora", serif;
    font-weight: 400;
    font-size: 2rem;
    line-height: 5rem;
    padding: 0 1em;
    margin: 0;

    @media screen and (max-width: 900px) {
        text-align: center;
        line-height: 3rem;
        font-size: 1.5rem;
    }
`;

const SiteNav = styled.nav`
    ul {
        list-style-type: none;
        margin: 0;
        display: flex;
    }

    li {
        height: 5rem;
        display: flex;
        align-items: center;
        margin: 0 0.5em;
        padding: 0 1em;

        @media screen and (max-width: 700px) {
            padding: 0;
        }
    }

    a {
        font-family: ${headerFontFamily};
        line-height: 2rem;
        min-width: 3em;
        text-align: center;
        ${hoverAnchor}

        &::before {
            bottom: 0em;
            background-color: #333;
        }
    }

    svg {
        position: relative;
        margin-right: 0.2em;
        top: 0.15rem;
    }

    @media screen and (max-width: 900px) {
        ul {
            justify-content: center;
        }
    }

    @media screen and (max-width: 600px) {
        ul {
            flex-wrap: wrap;
        }

        li {
            height: 3rem;
        }

        a {
            margin: 0 auto;
        }
    }
`;

export default ({ darkMode }) => (
    <SiteHeader darkMode={darkMode}>
        <SiteHeaderCenter>
        <SiteTitle><Link to="/">Chris Chamberlain</Link></SiteTitle>
        <SiteNav>
            <ul>
            </ul>
        </SiteNav>
        </SiteHeaderCenter>
    </SiteHeader>
);
