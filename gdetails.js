var fs = require("fs");
const { finished } = require("stream");
const data = fs.readFileSync("./gprofile.json", "utf-8");

var det = JSON.parse(data);
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
console.log(profile);
fs.writeFileSync("gittestprof.json", JSON.stringify(profile));
