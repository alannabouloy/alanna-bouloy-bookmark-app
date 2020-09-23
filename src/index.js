import './styles.css';
import $ from 'jquery';


import store from './store';
import bookmarkApp from './bookmark-app';
import api from './api';


//main function
const main = function(){
//call event listener function
//call render
  let id = 'ckfg0l2r7003x0k14hh5b03hs';
  console.log(api.deleteBookmark(id));

};

$(main());