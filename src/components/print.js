import { css } from "@emotion/core"

export const showInPrint = css`
    display: none;
    @media print {
        display: block;
    }
`;

export const hideInPrint = css`
@media print {
    display: none;
}
`;