//declares all Jquery vars
var pirateLeft = $('#firstStory .leftChoice')
var pirateRight = $('#firstStory .rightChoice')
var spaceLeft = $('#secondStory .leftChoice')
var spaceRight = $('#secondStory .rightChoice')
var twerkLeft = $('#thirdStory .leftChoice')
var twerkRight = $('#thirdStory .rightChoice')
var pirateText = $('#pirate-text')
var spaceText = $('#space-text')
var twerkText = $('#twerk-text')
var container = $('#otherStories')
var cloudData = new Firebase('https://fiery-torch-4185.firebaseio.com/');
var data = {}


// grabs data
cloudData.on('value', function (snapshot) {
  data = (snapshot.val());
// populates featured stories
  pirateRight.html('<p>'+data['pirate']['xb'].title+'</p>')
  pirateLeft.html('<p>'+data['pirate']['xa'].title+'</p>')
  spaceLeft.html('<p>'+data['space']['xa'].title+'</p>')
  spaceRight.html('<p>'+data['space']['xb'].title+'</p>')
  twerkLeft.html('<p>'+data['twerk']['xa'].title+'</p>')
  twerkRight.html('<p>'+data['twerk']['xb'].title+'</p>')
  pirateText.html('<p>'+data['pirate']['x'].content+'</p>')
  spaceText.html('<p>'+data['space']['x'].content+'</p>')
  twerkText.html('<p>'+data['twerk']['x'].content+'</p>')
//populates user-created stories
  container.html('')
  for (e in data['stories']){
    container.append('<a href="adventure.html?story=stories/'+data["stories"][e]["x"]["title"]+'"><div class="sixteen columns story user-created"><h2 class="storyTitle">'+data["stories"][e]["x"]["title"]+'</h2></div></a>'
      )
  }
});


