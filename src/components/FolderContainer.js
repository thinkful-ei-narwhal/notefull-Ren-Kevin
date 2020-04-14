import React, {Components} from 'react';
import Folder from './Folder';
import './FolderContainer.css';

export default class FolderContainer extends React.Component {
  render() {
    return(
      <section className='folderContainer'>
        {this.props.folders.map(folder =>
        <Folder
          key={folder.id} 
          folderName={folder.name}
        />
        )}
        <button type='button' className='addFolder'>Add Folder</button>
      </section>

    )
  }
}