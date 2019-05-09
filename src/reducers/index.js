import { combineReducers } from "redux";



const songsReducer = () => {
  return [
    { title: 'imagine', duration: '3:33' },
    { title: 'needy', duration: '2:52' },
    { title: '7 rings', duration: '2:58' },
    { title: 'MONOPOLY', duration: '2:38' },
  ];
};


const selectedSongReducer = (selectedSong = null, action) {
  if (action.type === 'SELECTED_SONG') {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songsReducer,
  selectedSongReducer
})