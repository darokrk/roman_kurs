import React from 'react';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/molecules/Card/Card';

const Notes = () => (
  <UserPageTemplate pageType="note">
    <Card type="note" />
    <Card type="note" />
    <Card type="note" />
    <Card type="note" />
    <Card type="note" />
    <Card type="note" />
  </UserPageTemplate>
);

export default Notes;
