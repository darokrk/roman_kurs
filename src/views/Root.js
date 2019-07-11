import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import MainTemplate from '../templates/MainTemplate';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <h1>notes</h1>
      <h1>twitters</h1>
      <h1>articles</h1>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
