import {FormControl, FormHelperText, InputAdornment, StylesProvider} from '@material-ui/core';
import React from 'react';
import {DonationContext} from '../../context/app-context';
import {
    DonateNowButton,
    DonateNowWrapper,
    DonateOutlinedInput,
    DonationHiddenLabel
} from './donate-now.style';

const DonateNow: React.FunctionComponent = ({}): JSX.Element => {
    const {
        totalAmountDonated,
        numberOfDonors,
        setNumberOfDonors,
        setTotalAmountDonated
    } = React.useContext(DonationContext);
    const textInput = React.useRef<HTMLInputElement>();
    const [amount, setAmount] = React.useState('');
    const [isAmountError, setIsAmountError] = React.useState(false);
    const [btnDisabled, setBtnDisabled] = React.useState(true);
    const NON_DIGIT = '/[^d]/g';

    const handleChange = (event: string) => {
        const donationAmount = parseInt(event.replace(NON_DIGIT, ''));
        if (isNaN(donationAmount)) {
            return;
        }

        setAmount(String(donationAmount));
        validateDonationAmount(donationAmount);
    };

    const validateDonationAmount = (donationAmount: number) => {
        donationAmount > 4 ? setIsAmountError(false) : setIsAmountError(true);
        donationAmount > 4 ? setBtnDisabled(false) : setBtnDisabled(true);
    };

    const handleGiveNowButtonClick = () => {
        if (totalAmountDonated != undefined && setTotalAmountDonated != undefined) {
            setTotalAmountDonated(totalAmountDonated + Number(amount));
        }
        if (numberOfDonors != undefined && setNumberOfDonors != undefined) {
            setNumberOfDonors(numberOfDonors + 1);
        }
        setAmount('');
        setBtnDisabled(true);
        if (textInput?.current) {
            textInput?.current?.focus();
        }
    };
    return (
        <>
            <FormControl>
                <DonateNowWrapper>
                    <StylesProvider injectFirst>
                        <DonationHiddenLabel htmlFor="donation-amount">
                            Donation Amount
                        </DonationHiddenLabel>
                        <DonateOutlinedInput
                            value={amount}
                            onChange={(event) => {
                                handleChange(event.target.value);
                            }}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            id={'donation-amount'}
                            name={'donation-amount'}
                            autoFocus={true}
                            fullWidth={true}
                            error={isAmountError}
                            inputRef={textInput}
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
                {isAmountError && (
                    <FormHelperText error={isAmountError}>
                        Amount must be at least $5
                    </FormHelperText>
                )}
            </FormControl>
        </>
    );
};
export default DonateNow;
