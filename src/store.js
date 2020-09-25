import api from './api';
import bookmarkApp from './bookmark-app';

const bookmarks = [];
//each bookmark should be and object with following data: title (str), url(str), description(str), rating(num 1-5), expanded(bool), id(str)

let bookmarkNum = 0;
let adding = false;
let editing = false;
let error = null;
let filter = 0;

const findById = function(id){
  return bookmarks.find(currentItem => currentItem.id === id);
};

const addBookmark = function(bookmark){
  bookmark.expanded = false;
  bookmarks.push(bookmark);
  bookmarkCounter();
};

const findAndDelete = function(id){
  const index = bookmarks.findIndex(bookmark => bookmark.id === id);
  console.log (bookmarks[index]);
  bookmarks.splice(index, 1);
};

const toggleAdding = function(){
  this.adding = !this.adding;
  console.log('toggled');
};

const toggleEditing = function(){
  this.editing = !this.editing;
};

const changeFilter = function(rating){
  this.filter = rating;
};

const findAndUpdate = function(id, newData){
  const index = bookmarks.findIndex(bookmark => bookmark.id === id);
  bookmarks[index] = newData;
};

const bookmarkCounter = function(){
  bookmarkNum = bookmarkNum + 1;
};

const setError = function(error){
  this.error = error;
};


export default {
  bookmarks,
  bookmarkNum,
  error,
  adding,
  editing,
  filter,
  addBookmark,
  findAndDelete,
  toggleAdding,
  toggleEditing,
  changeFilter,
  findAndUpdate,
  bookmarkCounter,
  setError,
};
