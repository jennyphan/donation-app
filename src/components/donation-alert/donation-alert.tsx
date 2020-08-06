import React from 'react';
import {DonationContext} from '../context/app-context';
import {DonationAlertWrapper, NumberFormatWrapper} from './donation-alert.style';

const DonationAlert: React.FunctionComponent = (): JSX.Element => {
    const {donationGoal, totalAmountDonated} = React.useContext(DonationContext);

    const [donationAmountNeeded, setDonationAmountNeeded] = React.useState(
        donationGoal ? donationGoal : 0
    );

    React.useEffect(() => {
        if (donationGoal && totalAmountDonated) {
            setDonationAmountNeeded(donationGoal - totalAmountDonated);
        }
    }, [donationAmountNeeded, donationGoal, totalAmountDonated]);

    return (
        <div>
            {donationAmountNeeded > 0 && (
                <DonationAlertWrapper role="alert" icon={false} severity="info">
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
