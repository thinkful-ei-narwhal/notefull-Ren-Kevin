import React, {Components} from 'react';
import { Link } from 'react-router-dom'
import './Note.css'

export default class Note extends React.Component {
  render() {
    return(
      <li className='note'>
        <Link to={`/note/${this.props.id}`}>
          {this.props.noteName}
        </Link>
        <p>
          Modified on {this.props.dateModified}
        </p>
        <button type='button' className='deleteButton'>Delete Note</button>
      </li>
    )
  }
}

// {new Intl.DateTimeFormat("en-GB", {
//   year: "numeric",
//   month: "long",
//   day: "2-digit"
// }).format(this.props.dateModified)}