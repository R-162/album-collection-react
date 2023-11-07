import React from 'react';
import Album from './Album';

const AlbumList = ({ albums, deleteAlbum, editAlbum }) => {
  return (
    <div className="album-list">
      <h2 className='make3'>Album List</h2>
      <ul className='make1'>
        {albums.map((album) => (
          <Album
            key={album.id}
            album={album}
            deleteAlbum={deleteAlbum}
            editAlbum={editAlbum}
          />
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
