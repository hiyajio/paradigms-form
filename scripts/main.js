// respond to button click
console.log("Page load happened!")

var submitButton = document.getElementById('bsr-submit-button')
var clearButton = document.getElementById('bsr-clear-button')
submitButton.onmouseup = getFormInfo;
clearButton.onmouseup = clearFormInfo;

function getFormInfo(){
  console.log("Entered get Form Info!")
  // get text from title, author and story
  var verb_one = document.getElementById('verb-one-input').value;
  var noun_one = document.getElementById('noun-one-input').value;
  var verb_two = document.getElementById('verb-two-input').value;
  var lyrics_one = document.getElementById('lyrics-one-input').value;
  var noun_two = document.getElementById('noun-two-input').value;
  var verb_three = document.getElementById('verb-three-input').value;
  var lyrics_two = document.getElementById('lyrics-two-input').value;
  var name_one = document.getElementById('name-one-input').value;
  var noun_three = document.getElementById('noun-three-input').value;
  var adjective_one = document.getElementById('adjective-one-input').value;

  // make dictionary
  story_dict = {};
  story_dict['v1'] = verb_one;
  story_dict['n1'] = noun_one;
  story_dict['v2'] = verb_two;
  story_dict['l1'] = lyrics_one;
  story_dict['n2'] = noun_two;
  story_dict['v3'] = verb_three;
  story_dict['l2'] = lyrics_two;
  story_dict['n'] = name_one;
  story_dict['n3'] = noun_three;
  story_dict['a'] = adjective_one;
  console.log(story_dict);

  displayStory(story_dict);

}

function displayStory(story_dict){
  console.log('entered displayStory!');
  console.log(story_dict);
  // get fields from story and display in label.
  var v1 = document.getElementById('verb-one');
  v1.innerHTML = story_dict['v1'];

  var n1 = document.getElementById('noun-one');
  n1.innerHTML = story_dict['n1'];

  var v2 = document.getElementById('verb-two');
  v2.innerHTML = story_dict['v2'];

  var l1 = document.getElementById('lyrics-one');
  l1.innerHTML = story_dict['l1'];

  var n2 = document.getElementById('noun-two');
  n2.innerHTML = story_dict['n2'];

  var v3 = document.getElementById('verb-three');
  v3.innerHTML = story_dict['v3'];

  var l2 = document.getElementById('lyrics-two');
  l2.innerHTML = story_dict['l2'];

  var n = document.getElementById('name-one');
  n.innerHTML = story_dict['n'];

  var n3 = document.getElementById('noun-three');
  n3.innerHTML = story_dict['n3'];

  var a = document.getElementById('adjective-one');
  a.innerHTML = story_dict['a'];
}

function clearFormInfo(){
  console.log('entered clearFormInfo!');

  var v1 = document.getElementById('verb-one');
  v1.innerHTML = '[VERB ENDING WITH -ING]';

  var n1 = document.getElementById('noun-one');
  n1.innerHTML = '[NOUN]';

  var v2 = document.getElementById('verb-two');
  v2.innerHTML = '[VERB]';

  var l1 = document.getElementById('lyrics-one');
  l1.innerHTML = '[LYRICS TO SONG]';

  var n2 = document.getElementById('noun-two');
  n2.innerHTML = '[NOUN]';

  var v3 = document.getElementById('verb-three');
  v3.innerHTML = '[VERB]';

  var l2 = document.getElementById('lyrics-two');
  l2.innerHTML = '[LYRICS TO SONG]';

  var n = document.getElementById('name-one');
  n.innerHTML = '[FIRST NAME]';

  var n3 = document.getElementById('noun-three');
  n3.innerHTML = '[NOUN]';

  var a = document.getElementById('adjective-one');
  a.innerHTML = '[ADJECTIVE]';
}
