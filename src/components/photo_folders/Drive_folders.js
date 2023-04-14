import { useEffect, useState } from 'react';
import './Drive_folder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { setDriveFolderId } from '../../useSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function Drive_folder() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currFolderId, user_folders } = useSelector((state) => state.users.value);

  const [data, setData] = useState();

  useEffect(() => {
    user_folders.forEach(element => {
      // showing folders only on which button is clicked
      if (element.user === currFolderId.toLowerCase()) setData(element)
    })
  }, [])

  const handleDriveFolderClick = (e, ele) => {
    e.preventDefault();
    console.log(ele);
    dispatch(setDriveFolderId({ drive_folder_id: ele.url }));
    navigate("/gallery")
  }
  return (
    <div className="top_container container">
      <div className='row justify-content-md-center'>
        {!data ? <h1>Loading...</h1> : data.folders.map((ele) => (
           <div className='col col-6'>
          <button className='folder_style btn' onClick={(e) => handleDriveFolderClick(e, ele)}><FontAwesomeIcon className='icon' icon={faFolderOpen} />{ele.name}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Drive_folder;