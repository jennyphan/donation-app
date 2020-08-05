import styled from 'styled-components';

export const DonationCardBody = styled.div`
    margin-right: 30px;
    margin-left: 30px;
`;

export const DonationCardWrapper = styled.div`
    border-radius: 5px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    border-color: ${(props) => props.theme.slate40};
    border-style: solid;
    border-width: 1px;
    padding-bottom: 20px;
`;
