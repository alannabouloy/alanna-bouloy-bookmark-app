import './styles.css';
import $ from 'jquery';


import store from './store';
import bookmarkApp from './bookmark-app';
import api from './api';


//main function
const main = function(){
//call event listener function
//call render
bookmarkApp.render();

};

$(main());