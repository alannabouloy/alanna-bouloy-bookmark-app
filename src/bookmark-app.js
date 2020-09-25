//Import statements
import $ from 'jquery';

import store from './store';
import api from './api';

//Error Handling

//Event Listeners


const handleAddButton = function(){
  //adds new bookmarks to the store
  $('main').on('click', '.add-bookmark', event =>
  {
    store.toggleAdding();
    render();
  });
  //listens for when add button is clicked
  //changes store to show add button is clicked
  //render add page
};

const handleSubmitButon = function(){
  //listen for when Submit button is clicked
  $('main').on('submit', '#js-add-form', event => {
    event.preventDefault();
    let bookmark = $(event.currentTarget).serializeJson();
    console.log(bookmark);
    api.createBookmark(bookmark)
      .then(newBookmark => {
        store.addBookmark(newBookmark);
        store.toggleAdding;
        
        render();
      }).catch((error) => {
        store.setError(error.message);
        console.log(store.error);
      });
  });
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

  //checks if there are any bookmarks and renders start page or add page
  if(!store.bookmarkNum){
    //if they have not clicked the add button then start page is rendered
    if(!store.adding){
      $('main').html(startTemplate());
      console.log('start template rendered');
      //if they have clicked the add button then the add page is rendered
    }else{
      $('main').html(addTemplate());
      console.log('add page template rendered');
    }
    //if there is 1 or more bookmarks then start page is not rendered
  }else{
    if(store.adding){
      $('main').html(addTemplate());
      console.log('there are bookmarks in store and add template rendered');
    }
    else if(store.editing){
      $('main').html(editTemplate(store.bookmarks[0]));
      console.log('edit page is rendering');
    }else{
      $('main').html(mainTemplate());
      console.log('main template rendered');
    }
  }
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
const generateBookmark = function(bookmark){
  const htmlString = ` <li>
    <div class="bookmark-button">
      <button>${bookmark.title} Rating: ${bookmark.rating}</button>
    </div>
    <div class="hidden">
      <div class="description">
        <p>${bookmark.desc}</p>
        <div class="url-link">
          <a href="${bookmark.url}" alt="${bookmark.title}">Visit Site</a><button class='delete-button'>Delete</button><button class="edit-button">Edit</button>
        </div>
      </div>
    </div>
  </li>`;

  return htmlString;
  //create default string that uses bookmark object to fill in title and rating
  //if statement to check if bookmark full view is true or false
  //if true then return longer strong that has full view, otherwise return default string
};

const generateBookmarkString = function(){
//use map to transform array of bookmark objects into an array of bookmark strings
//return array joined using array.join method 
  let htmlString = '';
  store.bookmarks.forEach(function(bookmark) {
    htmlString  = `${htmlString} ${generateBookmark(bookmark)}`;
  });
  return htmlString;
};

//template for start page
const startTemplate = function(){
  $('main').addClass('start-page').removeClass('add-page edit-page main-page');
  const html = `<div class="button-group">
      <div>
        <button class="add-bookmark">New</button>
      </div>
      <div>
        <form id="filter-form">
          <select id="filter-drop" name="rating">
            <option value="default">Filter</option>
            <option value="> 1 star"> 1+ Star</option>
            <option value="> 2 stars"> 2+ Stars</option>
            <option value="> 3 stars"> 3+ Stars</option>
            <option value="> 4 stars"> 4+ Stars</option>
            <option value="5 stars"> 5 Stars</option>
          </select>
        </form>
      </div>
    </div>`;
  return html;
};

const mainTemplate = function(){
  $('main').addClass('main-page').removeClass('start-page edit-page add-page');
  const bookmarksToAdd = generateBookmarkString(store.bookmarks);

  const htmlString = `<div class="button-group">
    <div>
      <button class="add-bookmark">New</button>
    </div>
    <div>
      <form id="filter-form">
        <select id="filter-drop" name="rating">
          <option value="default">Filter</option>
          <option value="> 1 star">> 1 Star</option>
          <option value="> 2 stars">> 2 Stars</option>
          <option value="> 3 stars">> 3 Stars</option>
          <option value="> 4 stars">> 4 Stars</option>
          <option value="5 stars">5 Stars</option>
        </select>
      </form>
    </div>
  </div>

  <div class="bookmarks">
    <ul class="bookmark-list">
      ${bookmarksToAdd}
    </ul>
  </div>`;

  console.log('mainTemplate ran');
  //header for main Template
  //generateBookmarkString for main Template
  //footer for main Template
  //add them all together and return as one long string for render function
  return htmlString;
};

const addTemplate = function(){
  $('main').addClass('add-page').removeClass('start-page edit-page main-page');
  const html = `<form name="form" id="js-add-form">
    <div>
      <label for="js-bookmark-title">Title</label>
      <input
        type="text"
        name="title"
        id="js-bookmark-title"
        placeholder="My Favorite Website"
      />
    </div>
    <div>
        <label for='js-bookmark-url'>Website URL</label>
        <input type="text" id='js-bookmark-url' name= "url" placeholder="https://myfavoritewebsite.com"/>
    </div>
    <div>
        <input id='rating-1' type="radio" name='rating' value='1'/>
        <label for='rating-1'>1 Star</label>

        <input id='rating-2' type='radio' name='rating' value='2'/>
        <label for="rating-2">2 Stars</label>

        <input id="rating-3" type='radio' name="rating" value="3"/>
        <label for="rating-3">3 Stars</label>

        <input type="radio" name="rating" id="rating-4" value="4"/>
        <label for="rating-4">4 Stars</label>

        <input type="radio" name="rating" id="rating-5" value="5"/>
        <label for="rating-5">5 Stars</label>
    </div>
    <div>
        <label for="js-bookmark-description">Description</label>
        <textarea name = "desc" placeholder="This is my favorite website!"></textarea>
    </div>
    <div>
        <input name= "submit" id= 'js-bookmark-submit' type="submit" value="Add Bookmark">
    </div>

  </form>`;
  return html;
  //header for add page
  //form for add page
  //footer for add page
};

const editTemplate = function(bookmark){
  $('main').addClass('edit-page').removeClass('start-page add-page main-page');
  const html = `<form name="edit-form" id="js-edit-form">
    <div>
      <label for="js-bookmark-title">Title</label>
      <input
        type="text"
        id="js-bookmark-title"
        placeholder="${bookmark.title}"
      />
    </div>
    <div>
        <label for='js-bookmark-url'>Website URL</label>
        <input type="text" id='js-bookmark-url' placeholder="${bookmark.url}"/>
    </div>
    <div>
        <input id='rating-1' type="radio" name='rating' value='1'/>
        <label for='rating-1'>1 Star</label>

        <input id='rating-2' type='radio' name='rating' value='2'/>
        <label for="rating-2">2 Stars</label>

        <input id="rating-3" type='radio' name="rating" value="3"/>
        <label for="rating-3">3 Stars</label>

        <input type="radio" name="rating" id="rating-4" value="4"/>
        <label for="rating-4">4 Stars</label>

        <input type="radio" name="rating" id="rating-5" value="5"/>
        <label for="rating-5">5 Stars</label>
    </div>
    <div>
        <label for="js-bookmark-description">Description</label>
        <textarea placeholder="${bookmark.desc}"></textarea>
    </div>
    <div>
        <input id= 'js-bookmark-submit' type="submit" value="Change Bookmark">
    </div>

  </form>`;

  return html;
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