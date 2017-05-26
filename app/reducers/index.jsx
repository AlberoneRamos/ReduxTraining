var nextHobbyId = 1;
var nextTvShowId = 1;

export function nameReducer(state = 'Anonymous',action){
    switch (action.type){
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};

export function hobbiesReducer(state = [],action){
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

};

export function mapReducer(state={isFetching:false,url:undefined}, action){
    switch(action.type){
        case 'START_LOCATION_FETCH':
            return {
                isFetching: true,
                url:undefined
            };
        case 'COMPLETE_LOCATION_FETCH':
            return {
                isFetching:false,
                url:action.url
            };
        default:
            return state;
    };
};


export function TVShowsReducer(state = [],action){
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