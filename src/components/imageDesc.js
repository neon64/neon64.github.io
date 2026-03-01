import styled from "@emotion/styled"
import React from "react"
import { FaInfoCircle } from "react-icons/fa"
import Typography from "../utils/typography"

const Spacer = styled.div`
    width: 100%;
    height: 40vh;
    overflow: hidden;
    min-height: 10em;
    display: flex;
    position: relative;
    border-top: 8px solid white;
    border-bottom: 8px solid white;

    background-size: cover;
    /* background-attachment: fixed; */
    background-position: center center;
    background-image: url(${props => props.imageSource});
    filter: grayscale(20%) brightness(100%);
    transition: filter 1s ease;

    &:hover {
        filter: grayscale(0%) brightness(110%);
    }

    @media print {
        display: none;
    }
`;

const SpacerInner = styled.div`
    background-color: rgba(0, 0, 0, 0.95);
    color: white;
    height: 50%;
    padding: 1em;
    position: absolute;
    left: 0;
    width: 100%;
    top: ${props => props.hide ? `100%` : `50%` };
    transition: top 1s ease;
    display: flex;
    justify-content: center;
`;

const SpacerTransparentInner = styled.div`
    max-width: 1024px;
    align-self: stretch;
    overflow: auto;
`;

const SpacerButton = styled.div`
    position: absolute;
    bottom: 1em;
    right: 1em;
    background-color: rgba(0, 0, 0, 1);
    opacity: 0.6;
    border-radius: 0.5em;
    z-index: 5;
    color: white;
    padding: 1em;
    width: 15em;
    text-align: center;
    transition: opacity 0.5s ease;
    cursor: pointer;
    font-size: 0.8em;
    font-family: ${Typography.options.headerFontFamily.join(", ")};

    &:hover {
        opacity: 1;
    }

    svg {
        margin-right: 0.5em;
        top: 0.1em;
        position: relative;
    }
`;

export default class ImageDesc extends React.Component {

    state = { hidden: true };

    click = () => {
        this.setState((state, props) => ({
            hidden: !this.state.hidden
        }));
    }

    render() { return (
        <Spacer id={this.props.id} imageSource={this.props.imageSource}>
            <SpacerButton onClick={this.click} hidden={this.props.hideDetails}><FaInfoCircle />{ !this.state.hidden ? "Hide" : this.props.buttonText }</SpacerButton>
            <SpacerInner hide={this.state.hidden} hidden={this.props.hideDetails}>
                <SpacerTransparentInner>
                    { this.props.children }
                </SpacerTransparentInner>
            </SpacerInner>
        </Spacer>
    )}

}