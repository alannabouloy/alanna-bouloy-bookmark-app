//Import statements
import $ from 'jquery';

import store from './store';
import api from './api';

//Error Handling

//Event Listeners


const handleAddButton = function(){
  //adds new bookmarks to the store
  //listens for when add button is clicked
  //changes store to show add button is clicked
  //render add page
};

const handleSubmitButon = function(){
  //listen for when Submit button is clicked
  //collects data from Form
  //determine if editing or adding new
  //update api
  //update store
  //render
};

const handleEditButton = function(){
  //listen for when Edit Button is clicked
  //changes store to show edit button is clicked
  //render edit page
};

const handleBookmarkToggleClick = function(){
  //listens for when user clicks on bookmark to display extended view
  //event listener
  //when clicked, toggle store to show that bookmark has been clicked
  //render page
};

const handleDeleteButton = function(){
  //listen for delete button click
  //update api
  //update store
  //render
};

const handleFilterDropdown = function(){
  //listen for when filter dropdown changes
  //update store
  //render
};

const bindEventListeners = function(){
  handleAddButton();
  handleSubmitButon();
  handleEditButton();
  handleBookmarkToggleClick();
  handleDeleteButton();
  handleFilterDropdown();
};
//Render Function

const render = function(){
//check how many bookmarks there are in store
//if 0 and store.adding = false then render startTemplate
//if 0 and store.adding = true then render addTemplate
//if number of bookmarks > 0 then check if store.adding = true
//if true then render addTemplate
//if false check if store.editing = true
//if true then render editTemplate
//if false then render mainTemplate


};

//Templates
const generateBookmarkItem = function(bookmark){
  //create default string that uses bookmark object to fill in title and rating
  //if statement to check if bookmark full view is true or false
  //if true then return longer strong that has full view, otherwise return default string
};

const generateBookmarkString = function(bookmarks){
//use map to transform array of bookmark objects into an array of bookmark strings
//return array joined using array.join method 
};

//template for start page
const startTemplate = '';

const mainTemplate = function(){
  //header for main Template
  //generateBookmarkString for main Template
  //footer for main Template
  //add them all together and return as one long string for render function
};

const addTemplate = function(){
  //header for add page
  //form for add page
  //footer for add page
};

const editTemplate = function(){
  //header for edit page
  //form for edit page
  //footer for edit page
};
//Logic

//Export
export default {
  bindEventListeners,
  render
};