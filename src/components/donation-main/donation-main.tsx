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
    return (
        <>
            <DonationContainer>
                <DonationBox>
                    <DonationWrapper>
                        <DonationMainWrapper>
                            <DonationAlert />
                            <DonationCard />
                        </DonationMainWrapper>
                    </DonationWrapper>
                </DonationBox>
            </DonationContainer>
        </>
    );
};
export default DonationMain;
