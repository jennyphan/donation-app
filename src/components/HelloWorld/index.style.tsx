import styled from 'styled-components';

export const HelloWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 700;
`;

export const HelloWrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.ocean};
    font-family: 'Poppins', sans-serif;
`;
