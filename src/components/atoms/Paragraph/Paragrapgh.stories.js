import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from './Paragraph';

storiesOf('Atoms/Paragraph', module)
  .add('normal', () => <Paragraph>Hello Darek</Paragraph>)
  .add('large', () => <Paragraph large>Hello Darek</Paragraph>)
  .add('big', () => <Paragraph big>Hello Darek</Paragraph>);
