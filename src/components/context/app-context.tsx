/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

export type Donation = {
    totalAmountDonated: number;
    numberOfDonors: number;
    setNumberOfDonors: (cnt: number) => void;
    setTotalAmountDonated: (amount: number) => void;
    donationGoal: number;
};

const DonationContext = React.createContext<Partial<Donation>>({});

const DonationContextProvider = (props): JSX.Element => {
    const [totalAmountDonated, setTotalAmountDonated] = React.useState(0);
    const [numberOfDonors, setNumberOfDonors] = React.useState(0);
    const donationGoal = 5000;

    return (
        <DonationContext.Provider
            value={{
                totalAmountDonated,
                numberOfDonors,
                setNumberOfDonors,
                setTotalAmountDonated,
                donationGoal
            }}
        >
            {props.children}
        </DonationContext.Provider>
    );
};

export {DonationContext, DonationContextProvider};
