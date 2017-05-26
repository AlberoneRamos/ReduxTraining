import {createStore, compose} from 'redux';

console.log('Exemplo de Lista de To-Dos!');

var defaultState = {
    searchText: '',
    showCompleted: false,
    todos: []
};

var reducer = (state = defaultState,action)=>{
    switch(action.type){
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            }
    }
}

var todoStore = createStore(reducer, compose(
    window.devtoolsExtension ? window.devtoolsExtension() : f => f
    ));

todoStore.subscribe(()=>{
    console.log(todoStore.getState());
    document.getElementById('app').innerHTML = JSON.stringify(todoStore.getState());
});

todoStore.dispatch({
    type : 'CHANGE_SEARCH_TEXT',
    searchText : 'Mee'
});

todoStore.dispatch({
    type : 'CHANGE_SEARCH_TEXT',
    searchText : 'Teste'
});
