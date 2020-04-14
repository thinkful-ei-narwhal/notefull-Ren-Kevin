import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

export default class Notpage extends React.Component {
  render() {
    return (
      <div class="404">
        <h1>404 Not Found</h1>
        <h3> Where you going?</h3>
      </div>
    );
  }
}
