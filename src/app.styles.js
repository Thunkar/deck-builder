import styled from "styled-components";

export const CardRow = styled.div`
    display: flex;
    flex-direction: row;
`

export const Container = styled.div`
    display: block;

    & ${CardRow}:nth-child(${props => props.breakAfterRows}) {
        page-break-after: always;
    }
`

export const PrintButton = styled.button`
    position: absolute;
    bottom: 100px;
    right: 100px;
`
