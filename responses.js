// Regex that is applied to every message that isn't a command
// callback (cb) with the desired response to the regex pattern when matched
module.exports = {
  match: function(message, cb) {
    switch(true) {
      case /sup/i.test(message):
        cb("Sup.");
        break;
      case /noice/i.test(message):
        cb("noice");
        break;
      default:
        cb(false);
    };
  }
};
