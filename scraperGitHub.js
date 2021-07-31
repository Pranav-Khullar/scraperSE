//npm i suq
var suq = require('suq');
var fs = require('fs');
const { result } = require('lodash');

function gitscrap(url) {
  var result;
  suq(url, function (err, det, body) {
    if (!err) {
      //additional name length
      var extra = det.microdata[0].props.additionalName.length + 2;
      //repo names
      var proj_names = [];
      for (var i in det.microdata) {
        rname = det.microdata[i].props.name.slice(
          extra,
          det.microdata[i].props.name.length
        );
        if (i > 0) {
          proj_names.push(rname);
        }
      }

      var profile = { name: det.microdata[0].props.name, Projects: proj_names };
      //console.log(profile);
      fs.writeFileSync(
        `profile_${det.microdata[0].props.name}_gitHub.json`,
        JSON.stringify(profile)
      );
      result = profile;
    }
  });
  setTimeout(console.log(result), 2000);
}
//gitscrap("https://github.com/laxmimerit?tab=repositories");
module.exports = gitscrap;
