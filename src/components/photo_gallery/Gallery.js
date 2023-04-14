import { useState } from 'react';
import { useSelector } from "react-redux";
import './Gallery.css';

function Gallery() {
  const { currDriveFolderId } = useSelector((state) => state.users.value);
  
  return (
    <div class='gallery_div'>
      <iframe id='gallery_frame' src={`https://drive.google.com/embeddedfolderview?id=${currDriveFolderId}#grid`}>
    
    </iframe>
    </div>
  )
}

export default Gallery;