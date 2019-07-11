import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Notes from './Notes';
import Articles from './Articles';
import Twitters from './Twitters';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/articles" component={Articles} />
        <Route path="/twitters" component={Twitters} />
      </Switch>
      <h1>notes</h1>
      <h1>twitters</h1>
      <h1>articles</h1>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
