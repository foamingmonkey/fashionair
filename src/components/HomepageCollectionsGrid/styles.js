import styled from 'styled-components';


export const RemainingCollections = styled.div`
display:flex;
flex-wrap:wrap;

>div {flex-grow:1;
min-width:100%;

@media (min-width:768px) {
    min-width:50%;
}
@media(min0width:1024px){
    min-width:33%;
}

}`;

export const WideSection = styled.div`
border: 5px solid #0C254E;
    width: 66%;
    height: 200px;
    margin: 50px 18% 50px 18%;      
    text-align: center;
    padding:0px 20px 0px 20px;

`;

export const OrangeBar = styled.div`border-top:10px solid red;
width:200px;
display:inline-block`;

