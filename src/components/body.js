import styled from "@emotion/styled"

const Body = styled.div`
    color: ${props => props.darkMode ? `white` : `initial`};
    background: ${props => props.darkMode ? `#222` : `#fff`};
    padding: 4em;
    min-height: 85vh;
    box-shadow: inset 0 10px 10px -10px ${props => props.darkMode ? `#000` : `#999`};

    @media screen and (max-width: 1000px) {
        padding: 0.5em;
    }

    a {
        color: ${props => props.darkMode ? `white` : `initial`};
    }

    @media screen and (max-width: 700px) {
        padding: 0 0 2em 0;
    }

`;

const BodyCenter = styled.div`
    max-width: 1024px;
    margin: 2em auto;
    width: 90%;
`;

export { Body, BodyCenter };