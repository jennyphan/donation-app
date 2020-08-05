import React from 'react';
import DonateNow from './donate-now/donate-now';
import {DonationCardBody, DonationCardWrapper} from './donation-card.style';
import DonationProgress from './donation-progress/donation-progress';
import DonationText from './donation-text/donation-text';

interface DonationCardProps {
    totalAmountDonated: number;
    donationGoal: number;
    setTotalAmountDonated: (amount: number) => void;
    setNumberOfDonors: (cnt: number) => void;
    numberOfDonors: number;
}
const DonationCard: React.FunctionComponent<DonationCardProps> = ({
    totalAmountDonated,
    donationGoal,
    setTotalAmountDonated,
    setNumberOfDonors,
    numberOfDonors
}): JSX.Element => {
    return (
        <DonationCardWrapper>
            <DonationProgress totalAmountDonated={totalAmountDonated} donationGoal={donationGoal} />
            <DonationCardBody>
                <DonationText numberOfDonors={numberOfDonors} />
                <DonateNow
                    setTotalAmountDonated={setTotalAmountDonated}
                    totalAmountDonated={totalAmountDonated}
                    setNumberOfDonors={setNumberOfDonors}
                    numberOfDonors={numberOfDonors}
                />
            </DonationCardBody>
        </DonationCardWrapper>
    );
};
export default DonationCard;
