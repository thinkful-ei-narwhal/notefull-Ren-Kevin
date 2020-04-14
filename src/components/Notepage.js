import React, { Components } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import NoteContainer from './NoteContainer';

export default class Notepage extends React.Component {
  
  render() {
    return (

        <div className='notePage'>
          <section className='folderName'></section>
          <section className='expandedNote'>
            <h3 to={`/note/${this.props.id}`}>
              {this.props.note.name}
            </h3>
            <p>
              Modified on {this.props.Modified}
            </p>
            <p>{this.props.note.content}</p>
            <button type='button' className='deleteButton'>Delete Note</button>
          </section>

        </div>
  
    );
  }
}
