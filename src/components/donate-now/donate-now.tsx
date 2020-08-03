import {InputAdornment, StylesProvider} from '@material-ui/core';
import React from 'react';
import {DonateNowButton, DonateNowWrapper, DonateOutlinedInput} from './donate-now.style';
interface DonateNowProps {
    setTotalAmountDonated: (amount: number) => void;
    totalAmountDonated: number;
    setNumberOfDonors: (cnt: number) => void;
    numberOfDonors: number;
}

const DonateNow: React.FunctionComponent<DonateNowProps> = ({
    setTotalAmountDonated,
    totalAmountDonated,
    setNumberOfDonors,
    numberOfDonors
}): JSX.Element => {
    const [amount, setAmount] = React.useState('');
    const [btnDisabled, setBtnDisabled] = React.useState(true);
    const NON_DIGIT = '/[^d]/g';

    const handleChange = (event: any) => {
        const donationAmount = parseInt(event?.target?.value.replace(NON_DIGIT, ''));
        if (isNaN(donationAmount)) {
            return;
        }

        setAmount(String(donationAmount));
        donationAmount > 4 ? setBtnDisabled(false) : setBtnDisabled(true);
    };

    const handleGiveNowButtonClick = () => {
        setTotalAmountDonated(totalAmountDonated + Number(amount));
        setNumberOfDonors(numberOfDonors + 1);
    };
    return (
        <>
            <DonateNowWrapper>
                <StylesProvider injectFirst>
                    <DonateOutlinedInput
                        value={amount}
                        onChange={(event) => {
                            handleChange(event);
                        }}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        id={'donation-amount'}
                        name={'donation-amount'}
                        autoFocus={true}
                        fullWidth={true}
                    />

                    <DonateNowButton
                        disabled={btnDisabled}
                        variant="contained"
                        onClick={handleGiveNowButtonClick}
                    >
                        Give Now
                    </DonateNowButton>
                </StylesProvider>
            </DonateNowWrapper>
        </>
    );
};
export default DonateNow;
