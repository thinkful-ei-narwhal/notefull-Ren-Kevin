import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import FolderContainer from './FolderContainer';
import NoteContainer from './NoteContainer';

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <FolderContainer folders={this.props.folders} />
        <NoteContainer notes={this.props.notes} />
      </div>
    );
  }
}
