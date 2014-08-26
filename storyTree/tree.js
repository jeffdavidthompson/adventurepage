var titleBox = $('#title');
var contentBox = $('#content');
var buttonA = $('#a');
var buttonB = $('#b');
var previous = $('#back');
var reset = $('#reset');
var formBox = $('#form-box')
var submit = $('#submit')
var titleForm = $('#title-form')
var contentForm = $('#content-form')
var isEnding = $('#is-ending')

function Tree(){

  this.currentAddress = '';

  this.read = function(address){
    this.currentAddress = address;
    this.display()
  }

  this.write = function(address, title, content, ending){
    this[address] = new Node(address, title, content, ending);
  }

  this.traverse = function(choice){
    if (this.hasOwnProperty(this.currentAddress+choice)){
      this.currentAddress+=choice;
      this.display()
    }
    else{
      this.currentAddress+=choice;
      this.newNodeForm()
    }
  }

  this.find = function(title){
    for(var x in this){
      if (this[x].title==title){
        return this[x];
      }
      else{
        alert('no such node')
      }
    }
  }

  this.display = function(){
    var node = this[this.currentAddress];
    formBox.css('visibility','hidden')
    titleBox.html(node.title)
    contentBox.html(node.content)
    if(node.ending){
      buttonA.css('visibility', 'hidden')
      buttonB.css('visibility', 'hidden')
    }
    else{
      buttonA.css('visibility', 'visible')
      buttonB.css('visibility', 'visible')
      if (this.hasOwnProperty(this.currentAddress+'a')){
        buttonA.html(this[this.currentAddress+'a'].title)
      }
      else{
        buttonA.html('Choose Your Own Adventure!')
      }
      if (this.hasOwnProperty(this.currentAddress+'b')){
        buttonB.html(this[this.currentAddress+'b'].title)
      }
      else{
        buttonB.html('Choose Your Own Adventure!')
      }
    }
  }

  this.newNodeForm = function(){
    formBox.css('visibility', 'visible')
    titleBox.html('There\'s nothing here yet!')
    contentBox.html('Write the next part of the story')
    buttonA.css('visibility', 'hidden')
    buttonB.css('visibility', 'hidden')
  }

}

function Node(address, title, content, ending){
  this.address = address
  this.content = content
  this.title = title
  this.ending = ending
  this.event = null
}

function clearForm(){
  titleForm[0].value=''
  contentForm[0].value=''
  isEnding[0].checked=false
}

var story = new Tree()
story.write('', 'Root', 'This is the Root', false)
story.write('a', 'Choice A', 'This is choice A', false)
story.write('b', 'Choice B', 'This is choice B', false)
story.write('aa', 'Choice AA', 'This is choice AA', false)
story.write('ab', 'Choice AB', 'This is choice AB', true)
story.write('ba', 'Choice BA', 'This is choice BA', true)
story.write('bb', 'Choice BB', 'This is choice BB', true)

story.display()
buttonA.click(function(){story.traverse('a')})
buttonB.click(function(){story.traverse('b')})
previous.click(function(){story.read(story.currentAddress.slice(0, -1))})
reset.click(function(){story.read('')})
submit.click(function(){story.write(story.currentAddress, titleForm.val(), contentForm.val(), isEnding[0].checked)})
submit.click(function(){story.display()})
submit.click(function(){clearForm()})
