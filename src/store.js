const bookmarks = [{title: 'Google', url: 'https://wwww.google.com', desc:'a handy site', rating: 5, expanded: false,}];
//each bookmark should be and object with following data: title (str), url(str), description(str), rating(num 1-5), expanded(bool), id(str)

let bookmarkNum = 1;
let adding = false;
let editing = false;
let error = null;
let filter = 0;


const addBookmark = function(bookmark){

};

const findAndDelete = function(id){

};

const toggleAdding = function(){

};

const toggleEditing = function(){

};

const changeFilter = function(rating){

};

const findAndUpdate = function(id, newData){

};

const bookmarkCounter = function(){

};

const setError = function(error){

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
  setError
};
