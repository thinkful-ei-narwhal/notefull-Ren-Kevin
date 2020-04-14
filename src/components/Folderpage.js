import React, { Components } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import FolderContainer from './FolderContainer';
import NoteContainer from './NoteContainer';
import './FolderContainer.css';

export default class Folderpage extends React.Component {
  render() {
    return (
      <div>
        <Route path="/folder/:folderid" />
        <FolderContainer folders={this.props.folders} />
        <NoteContainer notes={this.props.notes} />
      </div>
    );
  }
}
