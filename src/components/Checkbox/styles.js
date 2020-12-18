import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
         height: 20px;
         width: 20px;
         border: 1px solid black;
         border-radius: 4px;
         cursor: pointer;
         display: flex;
         background-color:${props => (props.checked ? 'black' : 'none')};

         > div {
           line-height: 1;
           margin: auto;
           visibiltity: ${props => (props.checked ? 'visible': 'hidden')};
         
         }
       `;