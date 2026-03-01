
import React from "react"
import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import scrollTo from 'gatsby-plugin-smoothscroll';

const jiggle = keyframes`
    0% {
        transform: rotate(-1deg);
    }
    50% {
        transform: rotate(1deg);
    }
    100% {
        transform: rotate(-1deg);
    }
`;

const ScrollDownLink = styled.a`
    display: inline-block;
    cursor: pointer;
    position: absolute;
    left: calc(50% - 40px);
    bottom: 3em;
    fill: #777;
    text-align: center;
    z-index: 100;
    text-decoration: none;
    transition: fill 1s ease, background-color 1s ease, opacity 0.5s ease;
    backface-visibility: hidden;
    animation: ${jiggle} 0.2s cubic-bezier(.36,.07,.19,.97) both;
    animation-iteration-count: 10;
    opacity: ${props => props.hide ? 0 : 1};
    background-color: #bbb;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 10px 10px -10px #999;

    &:hover {
        animation-iteration-count: infinite;
        fill: #000;
        background-color: #aaa;
    }

    svg {
        margin-top: 8px;
    }

    @media screen and (max-width: 1000px) {
        display: none;
    }

    @media print {
        display: none;
    }
`;

/* animation: ${fadeMoveDown} 2s ease-in-out infinite; */

export default class ScrollAnchor extends React.Component {
    state = { hidden: false };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = ev => {
        let pageTop = document.documentElement.scrollTop;
        console.log(pageTop);
        this.setState({
            hidden: pageTop > 20
        });
    };

    click = ev => {

    }

    render = () => { return (
        <ScrollDownLink href={this.props.scrollTarget} hide={this.state.hidden} onClick={ () => scrollTo(this.props.scrollTarget) }>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
        </ScrollDownLink>
    )}

}