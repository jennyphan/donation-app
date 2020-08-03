import React from 'react';
import DonateNow from '../donate-now/donate-now';
import DonationAlert from '../donation-alert/donation-alert';
import DonationProgress from '../donation-progress/donation-progress';
import DonationText from '../donation-text/donation-text';
import {
    DonationBox,
    DonationCard,
    DonationCardBody,
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
                            <DonationCard>
                                <DonationProgress
                                    totalAmountDonated={totalAmountDonated}
                                    donationGoal={donationGoal}
                                />
                                <DonationCardBody>
                                    <DonationText numberOfDonors={numberOfDonors} />
                                    <DonateNow
                                        setTotalAmountDonated={setTotalAmountDonated}
                                        totalAmountDonated={totalAmountDonated}
                                        setNumberOfDonors={setNumberOfDonors}
                                        numberOfDonors={numberOfDonors}
                                    />
                                </DonationCardBody>
                            </DonationCard>
                        </DonationMainWrapper>
                    </DonationWrapper>
                </DonationBox>
            </DonationContainer>
        </>
    );
};
export default DonationMain;
