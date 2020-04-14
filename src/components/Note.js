import React, {Components} from 'react';
import './Note.css'

export default class Note extends React.Component {
  render() {
    return(
      <div className='note'>
        <h3>{this.props.noteName}</h3>
        <p>
          Modified on {this.props.dateModified}
        </p>
        <button type='button' className='deleteButton'>Delete Note</button>
      </div>
    )
  }
}

// {new Intl.DateTimeFormat("en-GB", {
//   year: "numeric",
//   month: "long",
//   day: "2-digit"
// }).format(this.props.dateModified)}