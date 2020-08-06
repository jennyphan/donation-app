import React from 'react';
import {ThemeProvider} from 'styled-components';
import {DonationContextProvider} from './components/context/app-context';
import DonationMain from './components/donation-main/donation-main';
import {GlobalStyle} from './theme/global-style';
import {colorTheme} from './theme/theme';

const App: React.FunctionComponent = () => {
    return (
        <>
            <ThemeProvider theme={colorTheme}>
                <GlobalStyle />
                <DonationContextProvider>
                    <DonationMain />
                </DonationContextProvider>
            </ThemeProvider>
        </>
    );
};
export default App;
