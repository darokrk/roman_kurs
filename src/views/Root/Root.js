import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello Darek</h1>
        <Button width="500px">Close / Save</Button>
        <Button secondary>Remove</Button>
        <Paragraph>OKO</Paragraph>
        <Input placeholder="login" />
        <Input placeholder="search" search />
      </>
    </ThemeProvider>
  </div>
);

export default Root;
