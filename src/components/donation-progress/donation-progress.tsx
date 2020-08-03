import {StylesProvider} from '@material-ui/core';
import React from 'react';
import {DonationLinearProgress} from './donation-progress.style';

interface DonationProgressProps {
    totalAmountDonated: number;
    donationGoal: number;
}

const DonationProgress: React.FunctionComponent<DonationProgressProps> = ({
    totalAmountDonated,
    donationGoal
}): JSX.Element => {
    const [progress, setProgress] = React.useState(0);
    React.useEffect(() => {
        totalAmountDonated > donationGoal
            ? setProgress(100)
            : setProgress((totalAmountDonated / donationGoal) * 100);
    }, [donationGoal, totalAmountDonated]);

    return (
        <StylesProvider injectFirst>
            <DonationLinearProgress variant="determinate" value={progress} />
        </StylesProvider>
    );
};
export default DonationProgress;
