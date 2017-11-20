import { combineReducers} from 'redux'

import tracks from './tracks'
import playlists from './playlist'
import filterTracks from './filterTreacks'

export default combineReducers ({
    tracks,
    playlists,
    filterTracks
});