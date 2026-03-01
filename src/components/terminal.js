import styled from "@emotion/styled"
import { keyframes, css } from "@emotion/core"
import React from "react"

/* https://css-tricks.com/old-timey-terminal-styling/ */
const FakeTerminal = styled.div`
    position: relative;
    background-image: radial-gradient( rgba(0,100,50,0.5),black 80% );
    background-attachment: fixed;
    color: #eee;
    min-height: 100vh;
    min-width: 90vw;
    display: flex;
    flex-direction: column;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15),
        rgba(0, 0, 0, 0.15) 1px,
        transparent 1px,
        transparent 2px
        );
        background-attachment: fixed;
        border-radius: 1em;
        pointer-events: none;
    }
`;

const FakeTerminalBg = styled.div`
    background-color: #000;
`;

const TerminalCenter = styled.div`
    max-width: 768px;
    margin: 0 auto;
    width: 90%;
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-shadow: 0 0 5px #C8C8C8;

    h1 {
        text-align: center;
        padding-top: 8rem;
        margin-bottom: 4rem;
        font-size: 2rem;

        @media screen and (max-width: 700px) {
            padding-top: 2rem;
            font-size: 1.5rem;
        }
    }

    pre {

        font-family: "Fira Code", monospace;
        font-weight: 300;
        font-size: 1.1em;

        h1 {
            font-family: "Fira Code", monospace;
            font-weight: 300;
        }

        margin-bottom: 0;
    }

    a {
        color: #fff;
        text-decoration: none;
        border-bottom: 2px solid rgba(0, 0, 0, 0);
    }

    a:hover {
        opacity: 1;
        border-color: #fff;
    }
`;

const blink = keyframes`
    0% { border-color: #fff; }
    50% { border-color: transparent; }
    100% { border-color: #fff; }
`;

const animatedBlink = css`
    animation: ${blink} 1s linear infinite;
    border-bottom: 1px solid transparent;
`;

const Terminal = ({ children }) => (
    <FakeTerminalBg>
        <FakeTerminal>
            { children }
        </FakeTerminal>
    </FakeTerminalBg>
);

export { Terminal, TerminalCenter, blink, animatedBlink };
