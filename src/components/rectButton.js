import React from "react"
import { css } from "@emotion/core"
import Typography from "../utils/typography"

const headerFontFamily = Typography.options.headerFontFamily.join(", ");

export default (props) => (
    <a css={css`
        display: inline-block;
        align-self: flex-start;
        padding: 0.4em 0.8em;
        margin: 0.5em 0;
        font-family: ${headerFontFamily};
        font-size: 0.9rem;
        background: ${props.color === "grey" ? `#777` : `rgb(13, 78, 134)` };
        border: 1px solid rgba(0, 0, 0, 0.3);
        transition: background 0.5s ease, color 0.5s ease, border-color 0.5s ease;
        text-decoration: none;
        font-weight: 400;
        color: white;
        margin-right: 0.5em;

        &:hover {
            background-color: ${props.color === "grey" ? `#888` : `rgb(19, 99, 170)` };
            border-color: #000;
            color: white;
        }

        svg {
            margin-right: 0.5em;
            position: relative;
            top: 0.1rem;
        }
    `} href={props.href} ref={props.ref} target={props.target} style={props.style} onClick={props.onClick} >{ props.children }</a>
)