import React, {Components} from 'react';
import './Folder.css';

export default class Folder extends React.Component {
  render() {
    return(
      <div className='folder'>
        {this.props.folderName}
      </div>
    )
  }
}