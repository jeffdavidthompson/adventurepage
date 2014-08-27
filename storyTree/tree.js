//content display fields
var titleBox = $('#title');
var contentBox = $('#content');
var formBox = $('#form-box');
var authorBox = $('#author');
var endText = $('#end-text');
var errorBox = $('#error-box')
//nav buttons
var buttonA = $('#a');
var buttonB = $('#b');
var previous = $('#back');
var reset = $('#reset');
//form fields
var titleForm = $('#title-form');
var contentForm = $('#content-form');
var isEnding = $('#is-ending');
var authorForm = $('#author-form');
var submit = $('#submit');
var currentAddress = 'x';

var nodes={}
var cloudData = new Firebase('https://fiery-torch-4185.firebaseio.com/pirates')

write = function(address, title, content, ending, author){
  nodes[address] = {
    'address' : address,
    'title' : title,
    'content' : content,
    'ending' : ending,
    'author' : author
  };
  var item = {};
  item[address] = nodes[address];
  cloudData.update(item);
}

read = function(address){
    currentAddress = address;
    display();
  }

traverse = function(choice){
  if (nodes.hasOwnProperty(currentAddress+choice)){
    currentAddress+=choice;
    display();
  }
  else{
    currentAddress+=choice;
    displayForm();
  }
}

display = function(){
  var node = nodes[currentAddress];
  console.log(currentAddress)
  formBox.css('display','none');
  errorBox.css('display', 'none')
  authorBox.css('display', 'block');
  titleBox.html(node.title);
  contentBox.html(node.content);
  authorBox.html(node.author);
  if(node.ending){
    buttonA.css('display', 'none');
    buttonB.css('display', 'none');
    endText.html('THE END');
  }
  else{
    endText.html('');
    buttonA.css('display', 'inline');
    buttonB.css('display', 'inline');
    if (nodes.hasOwnProperty(currentAddress+'a')){
      buttonA.html(nodes[currentAddress+'a'].title);
    }
    else{
      buttonA.html('Choose Your Own Adventure!');
    }
    if (nodes.hasOwnProperty(currentAddress+'b')){
      buttonB.html(nodes[currentAddress+'b'].title);
    }
    else{
      buttonB.html('Choose Your Own Adventure!');
    }
  }
}

submitForm = function(){
  errorString = ''
  if (!titleForm.val()){
    errorString += '<li>You must input a title</li>'
  }
  if (contentForm.val().length<=20){
    errorString += '<li>Your content field must contain at least 20 characters</li>'
  }
  if (errorString){
    errorBox.html(errorString)
  }
  else{
    write(currentAddress, titleForm.val(), contentForm.val(), isEnding[0].checked, authorForm[0].value||'Anonymous')
    display()
    clearForm()
  }
}

displayForm = function(){
    formBox.css('display', 'block');
    is-ending.css('display', 'inline')
    titleBox.html('There\'s nothing here yet!');
    contentBox.html('Write the next part of the story');
    buttonA.css('display', 'none');
    buttonB.css('display', 'none');
    authorBox.css('display', 'none');
  }
//currently not used
function Node(address, title, content, ending, author){
  this.address = address;
  this.content = content;
  this.title = title;
  this.ending = ending;
  this.event = null;
  this.author = author || 'Anonymous';
}

function clearForm(){
  titleForm[0].value='';
  contentForm[0].value='';
  authorForm[0].value='';
  isEnding[0].checked=false;
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
if(getUrlVars()['node']){
  currentAddress = getUrlVars()['node']
}

//displays the node at address '' or specified in url
//event handling
buttonA.click(function(){traverse('a')})
buttonB.click(function(){traverse('b')})
previous.click(function(){read(currentAddress.slice(0, -1))})
reset.click(function(){read('')})
submit.click(function(){submitForm()})
// submit.click(function(){display()})
// submit.click(function(){clearForm()})
var initialized = false
cloudData.on('value', function (snapshot) {
  nodes = (snapshot.val())
  if (!initialized){
    display();
    initialized = true
  }
})


