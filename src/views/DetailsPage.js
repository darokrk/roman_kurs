import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DetailsTemplate from '../templates/DetailsTemplate';
import { routes } from '../routes/index';

const DetailsPage = ({ match }) => (
  <DetailsTemplate>
    <p>{`is twitter: ${match.path === routes.twitter}`}</p>
  </DetailsTemplate>
);

export default DetailsPage;
