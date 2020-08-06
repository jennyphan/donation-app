import {StylesProvider} from '@material-ui/core';
import React from 'react';
import {DonationContext} from '../../context/app-context';
import {DonationLinearProgress} from './donation-progress.style';

const DonationProgress: React.FunctionComponent = (): JSX.Element => {
    const [progress, setProgress] = React.useState(0);
    const {donationGoal, totalAmountDonated} = React.useContext(DonationContext);
    React.useEffect(() => {
        if (totalAmountDonated && donationGoal) {
            totalAmountDonated > donationGoal
                ? setProgress(100)
                : setProgress((totalAmountDonated / donationGoal) * 100);
        }
    }, [donationGoal, totalAmountDonated]);

    return (
        <StylesProvider injectFirst>
            <DonationLinearProgress variant="determinate" value={progress} />
        </StylesProvider>
    );
};
export default DonationProgress;
