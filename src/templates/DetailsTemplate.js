import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DetailsTemplate = () => (
  <div>
    <h1>Note</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed dicta, quae quam iste aliquid
      placeat facilis cupiditate impedit debitis consequuntur suscipit, fugit, excepturi provident
      magni qui id tempora et? Exercitationem.
    </p>
    <Link to="/">go back</Link>
  </div>
);
export default DetailsTemplate;
