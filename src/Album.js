import React from 'react';

const Album = ({ album, deleteAlbum, editAlbum }) => {
  return (
    <div className='make4'> 
    <li>
      <span>
        <strong className='do'>{album.title}</strong> 
        <br></br>by<br></br> 
        < bold className='come'>{album.artist}</bold>
      </span>
      <button className='mark' onClick={() => editAlbum(album.id)}>Edit</button>
      <button className='mark1' onClick={() => deleteAlbum(album.id)}>Delete</button>
    </li>
    </div>
  );
};
export default Album;