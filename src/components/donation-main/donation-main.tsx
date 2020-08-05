import React from 'react';
import DonationAlert from '../donation-alert/donation-alert';
import DonationCard from '../donation-card/donation-card';
import {
    DonationBox,
    DonationContainer,
    DonationMainWrapper,
    DonationWrapper
} from './donation-main.style';
const DonationMain: React.FunctionComponent = (): JSX.Element => {
    const [totalAmountDonated, setTotalAmountDonated] = React.useState(0);
    const [numberOfDonors, setNumberOfDonors] = React.useState(0);
    const donationGoal = 5000;
    return (
        <>
            <DonationContainer>
                <DonationBox>
                    <DonationWrapper>
                        <DonationMainWrapper>
                            <DonationAlert
                                totalAmountDonated={totalAmountDonated}
                                donationGoal={donationGoal}
                            />
                            <DonationCard
                                totalAmountDonated={totalAmountDonated}
                                donationGoal={donationGoal}
                                numberOfDonors={numberOfDonors}
                                setTotalAmountDonated={setTotalAmountDonated}
                                setNumberOfDonors={setNumberOfDonors}
                            />
                        </DonationMainWrapper>
                    </DonationWrapper>
                </DonationBox>
            </DonationContainer>
        </>
    );
};
export default DonationMain;
