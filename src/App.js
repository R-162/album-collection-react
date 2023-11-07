import React, { useState } from 'react';
import './App.css';
import AlbumForm from './AlbumForm';
import AlbumList from './AlbumList';

function App() {
  const [albums, setAlbums] = useState([
    { id: 1, title: 'Album 1', artist: 'Artist 1' },
    { id: 2, title: 'Album 2', artist: 'Artist 2' },
    { id: 3, title: 'Album 3', artist: 'Artist 3' },
    { id: 4, title: 'Album 4', artist: 'Artist 4' },
    { id: 5, title: 'Album 5', artist: 'Artist 5' },
    { id: 6, title: 'Album 6', artist: 'Artist 6' },
    { id: 7, title: 'Album 7', artist: 'Artist 7' },
    { id: 8, title: 'Album 8', artist: 'Artist 8' },
    { id: 9, title: 'Album 9', artist: 'Artist 9' },
    
  ]);

  const [newAlbum, setNewAlbum] = useState({ title: '', artist: '' });
  const [editAlbum, setEditAlbum] = useState(null);

  const addAlbum = () => {
    if (newAlbum.title.trim() && newAlbum.artist.trim()) {
      if (editAlbum) {
        setAlbums((prevAlbums) =>
          prevAlbums.map((album) =>
            album.id === editAlbum
              ? { ...album, title: newAlbum.title, artist: newAlbum.artist }
              : album
          )
        );
        setEditAlbum(null);
      } else {
      
        setAlbums((prevAlbums) => [
          ...prevAlbums,
          {
            id: Date.now(),
            title: newAlbum.title,
            artist: newAlbum.artist,
          },
        ]);
      }
      setNewAlbum({ title: '', artist: '' });
      alert("Oh! My Dear You Added A New Album, wow! Bravo");
      if(setNewAlbum ({title: '', artist: ''}) == ' '){
       alert('pl');
      }
    }
  };

  const deleteAlbum = (id) => {
    setAlbums((prevAlbums) => prevAlbums.filter((album) => album.id !== id));
  };

  const editAlbumFunc = (id) => {
    const albumToEdit = albums.find((album) => album.id === id);
    if (albumToEdit) {
      setNewAlbum({ title: albumToEdit.title, artist: albumToEdit.artist });
      setEditAlbum(id);
      
    }
    
  };
  
  return (
    
    <div className="App">
      <h1 style={{color: 'aquamarine'}}>Album Collection</h1>
      <AlbumForm
        newAlbum={newAlbum}
        setNewAlbum={setNewAlbum}
        addAlbum={addAlbum}
      />
      <AlbumList
        albums={albums}
        deleteAlbum={deleteAlbum}
        editAlbum={editAlbumFunc}
      />
    </div>
  );
}

export default App;
