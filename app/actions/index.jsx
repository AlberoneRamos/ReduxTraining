
import axios from 'axios';

export function addTVShow(tvShow,genre){
    return {
        type: 'ADD_TVSHOW',
        tvShow,
        genre
    }
}

export function removeTVShow(id){
    return {
        type: 'REMOVE_TVSHOW',
        id
    }
}

export function changeName(name){
    return {
        type: 'CHANGE_NAME',
        name
    }
}

export function addHobby(hobby){
    return {
        type: 'ADD_HOBBY',
        hobby
    }
}

export function removeHobby(id){
    return {
        type: 'REMOVE_HOBBY',
        id
    }
}

export function startLocationFetch(){
    return {
        type: 'START_LOCATION_FETCH'
    };
};

export function completeLocationFetch(url){
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    };
};

export function fetchLocation(){
    return (dispatch, getState) => {
            dispatch(startLocationFetch());
            axios.get('https://ipinfo.io?token=de0aee17b050cc').then((response)=>{
                var location = response.data.loc;
                var baseUrl = 'http://maps.google.com?q=';
                dispatch(completeLocationFetch(baseUrl+location))
            });
    }
};