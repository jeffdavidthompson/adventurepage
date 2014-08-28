var pirateLeft = $('#firstStory .leftChoice')
var pirateRight = $('#firstStory .rightChoice')
var spaceLeft = $('#secondStory .leftChoice')
var spaceRight = $('#secondStory .rightChoice')
var twerkLeft = $('#thirdStory .leftChoice')
var twerkRight = $('#thirdStory .rightChoice')
var container = $('#otherStories')
var cloudData = new Firebase('https://fiery-torch-4185.firebaseio.com/');
var data = {}



cloudData.on('value', function (snapshot) {
  data = (snapshot.val());
  pirateRight.html('<p>'+data['pirate']['xb'].title+'</p>')
  pirateLeft.html('<p>'+data['pirate']['xa'].title+'</p>')
  spaceLeft.html('<p>'+data['space']['xa'].title+'</p>')
  spaceRight.html('<p>'+data['space']['xb'].title+'</p>')
  twerkLeft.html('<p>'+data['twerk']['xa'].title+'</p>')
  twerkRight.html('<p>'+data['twerk']['xb'].title+'</p>')
  console.log(data['stories'])
  container.html('')
  for (e in data['stories']){
    console.log(e)
    console.log(data['stories'][e]['x']['title'])
    container.append('<a href="adventure.html?story=stories/'+data["stories"][e]["x"]["title"]+'"><div class="sixteen columns story"><h2 class="storyTitle">'+data["stories"][e]["x"]["title"]+'</h2></a></div>'
      )
  }
});


