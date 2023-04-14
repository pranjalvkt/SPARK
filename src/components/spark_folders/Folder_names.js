import './Folder_names.css';
import { setFolderId } from '../../useSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';

function Folder_names() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currUserId, user_folders } = useSelector((state) => state.users.value);
  const [currentUser, setCurrentUser] = useState('');
  useEffect(() => {
    user_folders.forEach(element => {
      if (element.user + "@spark.com" === currUserId) setCurrentUser(element.user);
    });
  }, [])


  const handleUserFolderClick = (e) => {
    e.preventDefault();
    dispatch(setFolderId({ folder_id: e.target.textContent }));
    navigate("/subfolders")
  }
  return (
    <div className="top_container container">
      <div className='row justify-content-md-center'>
        <div className='col col-6'>
          <button className='folder_style btn' onClick={(e) => handleUserFolderClick(e)}><FontAwesomeIcon icon={faFolder} className='icon'></FontAwesomeIcon>{currentUser}</button>
        </div>
      </div>
    </div>
  );
}

export default Folder_names;
