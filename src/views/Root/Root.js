import React from 'react';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import MainTemplate from '../../templates/MainTemplate';

const Root = () => (
  <MainTemplate>
    <>
      <h1>Hello Darek</h1>
      <Button width="500px">Close / Save</Button>
      <Button secondary>Remove</Button>
      <Paragraph>OKO</Paragraph>
      <Input placeholder="login" />
      <Input placeholder="search" search />
    </>
  </MainTemplate>
);

export default Root;
