import styled from 'styled-components';

export const DonationContainer = styled.div`
    display: flex;
    justify-content: center;
`;
export const DonationBox = styled.div`
    width: 500px;
    height: 700px;
    background: ${(props) => props.theme.ocean20};
`;

export const DonationWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
export const DonationMainWrapper = styled.div`
    padding-top: 50px;
    width: 400px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
`;

export const DonationCardBody = styled.div`
    margin-right: 30px;
    margin-left: 30px;
`;

export const DonationCard = styled.div`
    border-radius: 5px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    border-color: ${(props) => props.theme.slate40};
    border-style: solid;
    border-width: 1px;
    padding-bottom: 20px;
`;
