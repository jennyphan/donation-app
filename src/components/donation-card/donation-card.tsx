import React from 'react';
import DonateNow from './donate-now/donate-now';
import {DonationCardBody, DonationCardWrapper} from './donation-card.style';
import DonationProgress from './donation-progress/donation-progress';
import DonationText from './donation-text/donation-text';

const DonationCard: React.FunctionComponent = ({}): JSX.Element => {
    return (
        <DonationCardWrapper>
            <DonationProgress />
            <DonationCardBody>
                <DonationText />
                <DonateNow />
            </DonationCardBody>
        </DonationCardWrapper>
    );
};
export default DonationCard;
