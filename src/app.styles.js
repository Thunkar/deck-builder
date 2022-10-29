import styled from "styled-components";

export const NonPrintableWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: auto;
`

export const CardRow = styled.div`
    display: flex;
    flex-direction: row;
`

export const Container = styled.div`
    display: block;
    margin: auto;

    & ${CardRow}:nth-child(${props => props.breakAfterRows}n) {
        page-break-after: always;
    }
`

export const PrintButton = styled.button`
    position: absolute;
    bottom: 100px;
    right: 100px;
`
