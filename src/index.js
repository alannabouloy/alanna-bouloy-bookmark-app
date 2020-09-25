import './styles.css';
import $ from 'jquery';


import store from './store';
import bookmarkApp from './bookmark-app';
import api from './api';


//main function
const main = function(){
//call event listener function

  api.getBookmarks()
    .then((bookmarks) => {
      bookmarks.forEach((bookmark) => {
        store.addBookmark(bookmark);
        store.bookmarkNum += 1;
      });
      bookmarkApp.render();
      console.log('made it to the end of the then statement');
    });
  bookmarkApp.bindEventListeners();  
  bookmarkApp.render();
 
  
  //call rende
};

$(main());