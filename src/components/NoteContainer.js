import React, {Components} from 'react';
import Note from './Note';
import './NoteContainer.css';

export default class NoteContainer extends React.Component {
  render() {
    return(
      <section className='noteContainer'>
        {this.props.notes.map(note =>
          <Note 
            key={note.id}
            id={note.id}
            noteName={note.name}
            dateModified={note.modified}
          />
        )}
        <button type='button' className='addNote'>Add Note</button>
      </section>
    )
  }
}