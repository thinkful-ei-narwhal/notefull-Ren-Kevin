import React, {Components} from 'react';
import { Link } from 'react-router-dom'
import './Folder.css';

export default class Folder extends React.Component {
  render() {
    return(
      <li className='folder'>
        <Link to={`/folder/${this.props.id}`}>
          {this.props.folderName}
        </Link>
      </li>
    )
  }
}