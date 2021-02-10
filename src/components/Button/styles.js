import styled, { css } from 'styled-components';

const fullWidthStyles = ({fullWidth} ) => {
    if (fullWidth) {
        return css`
        display:block;
        width:100%;`
    }
}

export const Button = styled.button`
outline:none;
padding 0 10px;
height:44px;
line-height:44px;
box-shadow:none;
font-size:16px;
font-family: 'Montserrat',Sans-serif;
cursor:pointer;
font-weight:bold;
text-transform:uppercase;
background:white;
color:black;
border: 1px solid brown;
white-space: nowrap;

${fullWidthStyles}

&:hover:not(:disabled) { 
    color:white;
    background:brown;
    border 1px rgba(0,0,0,0);
    

}

&:disabled {
    border-color: #999;
    cursor: not-allowed;
    color:#999;
}

`;
