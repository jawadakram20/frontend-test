import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';

import { muiTheme } from '../src/styles/theme';

addDecorator((story) => (
    <ThemeProvider theme={muiTheme}>{story()}</ThemeProvider>
));
