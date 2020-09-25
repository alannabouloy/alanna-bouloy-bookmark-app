import $ from 'jquery';
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/alanna/bookmarks';

const apiFetch = function(...args){
  let error;
  return fetch(...args)
    .then(res => {
      if(!res.ok){
        error = {code: res.status};

        if(!res.headers.get('content-type').includes('json')){
          error.message = res.statusText;
          return Promise.reject(error);
        }
      }

      return res.json();
    })
    .then(data => {
      if(error) {
        error.message = data.message;
        return Promise.reject(error);
      }

      return data;
    });
};

const getBookmarks = function(){
  return apiFetch(BASE_URL);
};

const createBookmark = function(bookmark){
  const newBookmark = JSON.stringify(bookmark);
  return apiFetch(BASE_URL, {
    'method': 'POST',
    'headers': {
      'Content-type': 'application/json',
    },
    'body': newBookmark
  });
};

const updateBookmark = function(id, newData){
  const updatedBookmark = JSON.stringify(newData);
  return apiFetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: updatedBookmark
  });
};

const deleteBookmark = function(id){
  return apiFetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
};

$.fn.extend({serializeJson: function(form){
  const formData = new FormData(this[0]);
  const o = {};

  formData.forEach((val, name) => {
    if(val){
      o[name] = val;
    }
  });
  return o;
}
});

export default {
  getBookmarks,
  createBookmark,
  updateBookmark,
  deleteBookmark,
};