// the bot's name followed by one of these regexes to activate a command
module.exports = {
  match: function(command, cb) {
    switch(true) {
      case /dilbert/i.test(command):
        cb("here's your Dilbert: http://dilbert.com");
        break;
      case /joke/i.test(command):
        cb("Why did the chicken cross the road? Funny right?");
        break;
      case /thoughts/i.test(command):
        cb("This command could use some improvement.");
        break;
      case /stock/i.test(command):
        cb("Stocks are for greedy swine.");
        break;
      case /echo(.*)/i.test(command):
          cb('ECHO...! uh, this could use some improvement too.');
          break;
      case /fuck/i.test(command):
        cb("rude.");
        break;
      default:
        cb("Wuddyou want again?"); // TODO: Replace with hilarious gibberish
    }
  }
}
