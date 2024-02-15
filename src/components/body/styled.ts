import styled from "styled-components";

export const StyledCalcBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 220px;
    margin: 50px auto;
    background-color: black;
    padding: 20px;
    border-radius: 20px;
`

export const StyledsingleLine = styled.div`
    display: flex;
    justify-content: space-between;

    & > div {
        background-color: #5A5A5A;
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover
        {
            background-color: white;
        }

        &:active {
            background-color: black;
            color: white;
        }
    }
`
export const StyledDisplay = styled.div`
    text-align: right;
    font-size: 25px;
    color: white;
    width: 100%;
    height: 30px;
    overflow: hidden;
`

