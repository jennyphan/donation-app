import styled from 'styled-components';

export const DonationContainer = styled.div`
    display: flex;
    justify-content: center;
`;
export const DonationBox = styled.div`
    width: 500px;
    height: 400px;
    background: ${(props) => props.theme.ocean20};
`;

export const DonationWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
export const DonationMainWrapper = styled.div`
    padding-top: 40px;
    width: 400px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
`;
