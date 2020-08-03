import {Alert} from '@material-ui/lab';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';

export const DonationAlertWrapper = styled(Alert)`
    & .MuiAlert-message {
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 400;
        color: ${(props) => props.theme.ocean80};
    }
    & .MuiAlert-root:before {
        content: '';
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 10px solid transparent;
        border-right: 10px solid #00bfb6;
        border-top: 10px solid #00bfb6;
        border-bottom: 10px solid transparent;
        right: 19px;
        bottom: -19px;
    }
`;

export const NumberFormatWrapper = styled(NumberFormat)`
    font-weight: 700;
`;
