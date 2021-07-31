var suq = require("suq");
var fs = require("fs");
var url = "https://github.com/laxmimerit?tab=repositories";

suq(url, function (err, gprof, body) {
  if (!err) {
    fs.writeFileSync("gprofile2.json", JSON.stringify(gprof, null, 2));
  }
});
