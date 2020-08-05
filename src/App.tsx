import React from 'react';
import {ThemeProvider} from 'styled-components';
import DonationMain from './components/donation-main/donation-main';
import {GlobalStyle} from './theme/global-style';
import {colorTheme} from './theme/theme';

const App = (): JSX.Element => (
    <>
        <ThemeProvider theme={colorTheme}>
            <GlobalStyle />
            <DonationMain />
        </ThemeProvider>
    </>
);

export default App;
