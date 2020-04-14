import React, { Components } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import FolderContainer from './FolderContainer';
import NoteContainer from './NoteContainer';
import './FolderContainer.css';

export default class Folderpage extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <FolderContainer folders={this.props.folders} />
        </ul>
        <ul>
          <NoteContainer notes={this.props.notes} />
        </ul>
        
      </div>
    );
  }
}
