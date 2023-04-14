import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSparkUser = createAsyncThunk('/spark/getSparkUser', async () => {
    try {
        const res = await axios.get('http://localhost:3001/folders');
        return res.data;
    }
    catch(err) {
        console.log(err);
    }
})


const initialValOfState = {
    isLoggedIn: false, // not in use
    currRole: '', // not in use
    currUserId: '',
    currFolderId: '',
    currDriveFolderId: '',
    user_folders: [],

}
const userSlice = createSlice({
    name: 'users',
    initialState: {
        value: initialValOfState
    },
    reducers: {
        setUserRole: (state, action) => {// not in use
            state.value.currRole = action.payload.role;
        },
        setUserId: (state, action) => {
            state.value.currUserId = action.payload.id;
        },
        setFolderId: (state, action) => {
            state.value.currFolderId = action.payload.folder_id;
        },
        setDriveFolderId: (state, action) => {
            state.value.currDriveFolderId = action.payload.drive_folder_id;
            console.log(state.value.currDriveFolderId);
        },
    },
    extraReducers: {
        [getSparkUser.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.value.user_folders = action.payload;
        }   
    }
})
export const {setUserRole, setUserId, setFolderId, setDriveFolderId} = userSlice.actions;
export default userSlice.reducer;