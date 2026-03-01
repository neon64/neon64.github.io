import {css} from "@emotion/core"

export default css`
    & {
        position: relative;
        text-decoration: none;
    }

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: -2px;
        left: 0;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.1s ease-in-out 0.1s;
    }

    &:hover::before {
        visibility: visible;
        transform: scaleX(1);
        transition-delay: 0s;
    }
`;