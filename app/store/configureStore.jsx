import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {nameReducer,hobbiesReducer,TVShowsReducer,mapReducer} from './../reducers/index';

export default function configure(){
    var reducer = combineReducers({
        name: nameReducer,
        hobbies: hobbiesReducer,
        tvShows: TVShowsReducer,
        map: mapReducer
    });

    return createStore(reducer,compose(
        applyMiddleware(ReduxThunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
}