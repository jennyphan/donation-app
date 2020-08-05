import React from 'react';
import {DonationText1, DonationText2, DonationTextWrapper, DonorCount} from './donation-text.style';

interface DonationTextProps {
    numberOfDonors: number;
}
const DonationText: React.FunctionComponent<DonationTextProps> = ({
    numberOfDonors
}): JSX.Element => {
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
