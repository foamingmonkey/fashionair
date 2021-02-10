import styled from 'styled-components';

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin-top:20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  > div:first-child {
    order: 2;
  }

  > div:last-child {
    order: 1;
  }
`;

export const SelectWrapper = styled.div`
  margin-top: 40px;
  > strong {
    margin-bottom: 8px;
    padding-right:10px;
  }
`;

export const Price = styled.div`
  margin: 40px 0;
  font-weight: 400;
  font-size: 30px;
  flex:1;
  text-align:center;

`;
export const RetailPrice = styled.div`
         margin: 40px 0;
         font-weight: 100;
         font-size: 18px;
         color: red;
         flex:1;
         text-decoration: line-through;
         text-align:center;
       `;

       export const FullPriceColumn = styled.div `display:flex;
       
       `;



