import {OutlinedInput} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const DonateNowWrapper = styled.div`
    display: flex;
`;

export const DonateNowButton = styled(Button)`
    width: 135px;
    background-color: ${(props) => props.theme.mint80};
    color: ${(props) => props.theme.white};
    text-transform: none;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
`;

export const DonateOutlinedInput = styled(OutlinedInput)`
    font-weight: 700;
    font-family: 'IBM Plex Sans', sans-serif;
`;
