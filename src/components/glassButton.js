import React from "react"
import { css } from "@emotion/core"
import Typography from "../utils/typography"
import { Link } from "gatsby"

const headerFontFamily = Typography.options.headerFontFamily.join(", ");

const styles = css`
font-family: ${headerFontFamily};
text-decoration: none;
font-size: 1em;
opacity: 0.9;
color: #555;
transition: background-color 0.5s ease, color 0.5s ease;
display: block;
padding: 0.8rem 1rem;

&:hover {
    background-color: rgba(0, 0, 0, 0.05);
    opacity: 1;
    text-decoration: none;
    color: black;
    // color: white;
}

svg {
    margin-right: 0.5em;
    position: relative;
    top: 0.1rem;

    @media print {
        top: 0.05rem;
    }
}

@media print {
    font-size: 0.8em;
    color: black;
    background: none;
    opacity: 1;

    &:hover {
        color: black;
    }
}
`;

export default (props) => {
    if(props.to) {
        return (<Link css={styles} to={props.to} style={props.style} onClick={props.onClick}>{props.children}</Link>)
    } else if(props.href) {
        return (<a css={styles} href={props.href} ref={props.ref} target={props.target} style={props.style} onClick={props.onClick} >{ props.children }</a>)
    } else {
        return (<button type="button" css={styles} ref={props.ref} style={props.style} onClick={props.onClick} onKeyDown={props.onClick}>{ props.children }</button>)
    }
}