import React from 'react';
import DonateNow from '../donate-now/donate-now';
import DonationAlert from '../donation-alert/donation-alert';
import DonationProgress from '../donation-progress/donation-progress';
import DonationText from '../donation-text/donation-text';
const DonationMain: React.FunctionComponent = (): JSX.Element => {
    return (
        <>
            <DonationAlert />
            <DonationProgress />
            <DonationText />
            <DonateNow />
        </>
    );
};
export default DonationMain;
