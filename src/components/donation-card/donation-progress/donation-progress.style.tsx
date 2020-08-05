import {LinearProgress} from '@material-ui/core';
import styled from 'styled-components';

export const DonationLinearProgress = styled(LinearProgress)`
    padding: 2px;
    background-color: ${(props) => props.theme.mint40};
    & .MuiLinearProgress-barColorPrimary {
        background-color: ${(props) => props.theme.mint};
    }
`;
