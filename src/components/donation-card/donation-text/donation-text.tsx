import React from 'react';
import {DonationContext} from '../../context/app-context';
import {DonationText1, DonationText2, DonationTextWrapper, DonorCount} from './donation-text.style';

const DonationText: React.FunctionComponent = (): JSX.Element => {
    const {numberOfDonors} = React.useContext(DonationContext);
    return (
        <>
            <DonationTextWrapper>
                <DonationText1>Only four days left to fund this project</DonationText1>
                <DonationText2>
                    Join the <DonorCount>{numberOfDonors}</DonorCount> other donors who have already
                    supported this project
                </DonationText2>
            </DonationTextWrapper>
        </>
    );
};
export default DonationText;
