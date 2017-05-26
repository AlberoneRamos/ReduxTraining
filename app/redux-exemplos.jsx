import {createStore,combineReducers} from 'redux';

console.log('Redux!');

// Name
// ----------------------------
function nameReducer(state = 'Anonymous',action){
    switch (action.type){
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};

function changeName(name){
    return {
        type: 'CHANGE_NAME',
        name: name
    }
}
// Hobbies
// ----------------------------
var nextHobbyId = 1;
function hobbiesReducer(state = [],action){
    switch (action.type){
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];
        case 'REMOVE_HOBBY':
            return state.filter( hobby => hobby.id !== action.id)
        default:
            return state;
    }

}

function addHobby(hobby){
    return {
        type: 'ADD_HOBBY',
        hobby: hobby
    }
}

function removeHobby(hobbyId){
    return {
        type: 'REMOVE_HOBBY',
        id: hobbyId
    }
}
// TVShows
// ----------------------------
var nextTvShowId = 1;
function TVShowsReducer(state = [],action){
    switch (action.type){
        case 'ADD_TVSHOW':
            return [
                ...state,
                {
                    id: nextTvShowId++,
                    tvShow: action.tvShow,
                    genre: action.genre
                }
            ]
        case 'REMOVE_TVSHOW':
            return state.filter(tvShow => tvShow.id !== action.id)
        default:
            return state;
    }
}

function addTVShow(tvShow,genre){
    return {
        type: 'ADD_TVSHOW',
        tvShow: tvShow,
        genre: genre
    }
}

function removeTVShow(tvShowId){
    return {
        type: 'REMOVE_TVSHOW',
        id: tvShowId
    }
}

var reducer = combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    tvShows: TVShowsReducer
});
var exampleStore = createStore(reducer);

console.log(exampleStore.getState());

exampleStore.subscribe(()=>{
    console.log(exampleStore.getState());
});

exampleStore.dispatch(changeName('Henrique'));
var hobbies = ['Play videogames','Watch Cartoons'];
hobbies.forEach((hobby)=>{
    exampleStore.dispatch(addHobby(hobby));
});

exampleStore.dispatch(removeHobby(2));

exampleStore.dispatch(changeName('Percival'));
var TVShows = [{name:'BoJack Horseman',genre:'comedy'},{name:'Boondocks',genre:'Anime'},{name:'Futurama',genre:'Comedy, feels'},{name:'Aqua Teen: Hunger Force',genre:'comedy'}];

TVShows.forEach((TVShow)=>{
    exampleStore.dispatch(addTVShow(TVShow.name,TVShow.genre));
});

exampleStore.dispatch(removeTVShow(1));



