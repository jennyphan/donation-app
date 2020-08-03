import React from 'react';
import {DonationAlertWrapper, NumberFormatWrapper} from './donation-alert.style';

interface DonationAlertProps {
    totalAmountDonated: number;
    donationGoal: number;
}
const DonationAlert: React.FunctionComponent<DonationAlertProps> = ({
    totalAmountDonated,
    donationGoal
}): JSX.Element => {
    const [donationAmountNeeded, setDonationAmountNeeded] = React.useState(5000);

    React.useEffect(() => {
        setDonationAmountNeeded(donationGoal - totalAmountDonated);
    }, [donationAmountNeeded, donationGoal, totalAmountDonated]);

    return (
        <div>
            {donationAmountNeeded > 0 && (
                <DonationAlertWrapper icon={false} severity="info">
                    <NumberFormatWrapper
                        value={donationAmountNeeded}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                    />
                    &nbsp;still needed to fund this project
                </DonationAlertWrapper>
            )}

            {donationAmountNeeded <= 0 && (
                <DonationAlertWrapper icon={false} severity="success">
                    <NumberFormatWrapper
                        value={totalAmountDonated}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                    />
                    &nbsp; raised of &nbsp;
                    <NumberFormatWrapper
                        value={donationGoal}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                    />
                </DonationAlertWrapper>
            )}
        </div>
    );
};
export default DonationAlert;
