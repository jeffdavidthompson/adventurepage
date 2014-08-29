//declares all jquery vars
var titleForm = $('#title-form')
var authorForm = $('#author-form')
var contentForm = $('#content-form')
var errorBox = $('#error-box')
var errorDiv = $('.error-div')
var submit = $('#submit')
//creates object for cloud data from firebase
var cloudData = new Firebase('https://fiery-torch-4185.firebaseio.com/stories');
//firebase data will be stored in data
var data
//puts together a root node based on form values, submits to cloud
createItem = function(){
  item1 = {
    'address' : 'x',
    'title' : titleForm.val(),
    'content' : contentForm.val(),
    'ending' : false,
    'author' : authorForm.val() || 'Anonymous'
  }
  var item2 = {};
  var item3 = {};
  item2['x'] = item1;
  item3[titleForm.val()] = item2
  console.log(item3)
  cloudData.update(item3);
}
//checks for errors, then submits to cloud if there are none
submitForm = function(){
  errorString = '';
  if (!titleForm.val()){
    errorString += '<li>You must input a title</li>';
  }
  if (titleForm.val().length>30){
    errorString += '<li>Your title must be less than 30 characters</li>';
  }
  if (contentForm.val().length<=20){
    errorString += '<li>Your content field must contain at least 20 characters</li>';
  }
  if (contentForm.val().length>400){
    errorString += '<li>Your content field must contain at most 400 characters. Currently at '+contentForm.val().length+'</li>';
  }
  if (data[titleForm.val()]){
    errorString += '<li>That title is already used by another story. Please use a different one.</li>'
  }
  if (errorString){
    errorBox.html(errorString);
    errorDiv.css({'display': 'block'})
  }
  else{
    createItem()
    location.assign('adventure.html?story=stories/'+titleForm.val())
  }
}
//listens for submit button click, submits on click
submit.click(function(){submitForm()})
//grabs data from cloud
cloudData.on('value', function (snapshot) {
  data = (snapshot.val());
})
