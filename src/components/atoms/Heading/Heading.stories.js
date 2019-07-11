import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Atoms/Heading', module)
  .add('Normal', () => <Heading>Hello Darek</Heading>)
  .add('Big', () => <Heading big>Hello Darek</Heading>);
