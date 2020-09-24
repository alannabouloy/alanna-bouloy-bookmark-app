const bookmarks = [{title: 'Google', url: 'https://wwww.google.com', desc:'a handy site', rating: 5, expanded: false, id: 1}];
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
  bookmarks.push(bookmark);
};

const findAndDelete = function(id){
  const index = bookmarks.findIndex(bookmark => bookmark.id = findById(id));
  bookmarks.splice(index, 1);
};

const toggleAdding = function(){
  this.adding = !adding;
};

const toggleEditing = function(){
  this.editing = !editing;
};

const changeFilter = function(rating){
  this.filter = rating;
};

const findAndUpdate = function(id, newData){
  const index = bookmarks.findIndex(bookmark => bookmark.id = findById(id));
  bookmarks[index] = newData;
};

const bookmarkCounter = function(){
  this.bookmarkNum += 1;
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
