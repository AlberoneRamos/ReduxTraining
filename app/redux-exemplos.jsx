import * as actions from './actions/index'; 
import configure from './store/configureStore';

console.log('Redux!');

var exampleStore = configure();

exampleStore.dispatch(actions.fetchLocation());

exampleStore.subscribe(()=>{
    console.log(exampleStore.getState());
    if(exampleStore.getState().map.isFetching){
        document.getElementById('app').innerHTML = 'Loading...';
    } else if(exampleStore.getState().map.url){
        document.getElementById('app').innerHTML = '<a href="'+exampleStore.getState().map.url+'" target="__blank">Veja sua localização</a>';
    }
});

exampleStore.dispatch(actions.changeName('Henrique'));
var hobbies = ['Play videogames','Watch Cartoons'];
hobbies.forEach((hobby)=>{
    exampleStore.dispatch(actions.addHobby(hobby));
});

exampleStore.dispatch(actions.removeHobby(2));

exampleStore.dispatch(actions.changeName('Percival'));
var TVShows = [{name:'BoJack Horseman',genre:'comedy'},{name:'Boondocks',genre:'Anime'},{name:'Futurama',genre:'Comedy, feels'},{name:'Aqua Teen: Hunger Force',genre:'comedy'}];

TVShows.forEach((TVShow)=>{
    exampleStore.dispatch(actions.addTVShow(TVShow.name,TVShow.genre));
});

exampleStore.dispatch(actions.removeTVShow(1));




