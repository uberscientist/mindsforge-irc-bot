var irc = require('irc');
var commands = require('./commands.js');
var responses = require('./responses.js');

var client = new irc.Client('mindsforge.com', 'Alph', {
    channels: ['#innercircle']
});

client.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
    var re = /Alph(.*)/i; // Invoke actions with the name, Alph
    var command = message.match(re);
    if(command){
      command = command[1];
      console.log('Command: ' + command);
      commands.match(command, function(answer) {
        client.say('#innercircle', answer);
      });
    } else {
      responses.match(message, function(answer) {
        if(answer) {
          client.say('#innercircle', answer);
        }
      });
    }
});

client.addListener('join#innercircle', function(nick, message){
  console.log(nick + ' has joined!');
  if (nick !== 'Alph') {
    setTimeout(function(){
      client.say("#innercircle",
                "I've been waiting for you " + nick +
                ", what took you so long?");
    }, 4 * 1000);

    setTimeout(function() {
      client.say("#innercircle",
                "I'm a bot in alpha, Alph-a get it?" +
                " Are you an alien?");
      }, 10 * 1000);
  }
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});

client.say('#innercircle', "I'm a bot!");
