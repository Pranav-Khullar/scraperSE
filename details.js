var fs = require("fs");
const { finished } = require("stream");
const data = fs.readFileSync("./profile.json", "utf-8");

var js = JSON.parse(data);

//experience
var exp = [];
for (var i in js.experiences) {
  stitle = js.experiences[i].title;
  scompany = js.experiences[i].company;
  exp.push({ title: stitle, company: scompany });
}
//education
var schools = [];
for (var i in js.education) {
  sName = js.education[i].schoolName;
  schools.push(sName);
}

//skills
var skill = [];
for (var i in js.skills) {
  skiller = js.skills[i].skillName;
  skill.push(skiller);
}
var profile = {
  name: js.userProfile.fullName,
  experiences: exp,
  schools: schools,
  skills: skill,
};
fs.writeFileSync("Final2.json", JSON.stringify(profile));
