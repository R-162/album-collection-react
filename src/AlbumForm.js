import React from 'react';

const AlbumForm = ({ newAlbum, setNewAlbum, addAlbum }) => {
  return (
    <div className="album-form">
      <h2>{newAlbum.id ? 'Edit Album' : 'Add Album'}</h2>
      <input
      className='place'
        type="text"
        placeholder="Album Title"
        value={newAlbum.title}
        onChange={(e) => setNewAlbum({ ...newAlbum, title: e.target.value })}
      />
      <input
      className='place'
        type="text"
        placeholder="Artist Name"
        value={newAlbum.artist}
        onChange={(e) => setNewAlbum({ ...newAlbum, artist: e.target.value })}
      />
      <button onClick={addAlbum}>
        {newAlbum.id ? 'Update Album' : 'Add Album'}
      </button>
    </div>
  );
};

export default AlbumForm;
