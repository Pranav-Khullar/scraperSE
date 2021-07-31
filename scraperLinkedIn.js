//npm i linkedin-profile-scraper
var fs = require('fs');
const { LinkedInProfileScraper } = require('linkedin-profile-scraper');
const { range } = require('lodash');

guff = async (st) => {
  const scraper = new LinkedInProfileScraper({
    sessionCookieValue:
      'AQEDATM5Ha0BhEviAAABdeaB4fUAAAF2Co5l9U4AyW0mxCdHDQLVUyf69ov48OWk131CX5XkRFZy9qCDrvA8vfaGPf0y6sN-tKwUTplIsd-UBmnVjaimFv5Eudc0wvwxzJAytQ6mk-CLRt2I2SsyI0wr',
    keepAlive: true,
  });

  // Prepare the scraper
  // Loading it in memory
  await scraper.setup();
  for (var i in range(0, 1, 1)) {
    const al = await scraper.run(st);
  }
  const js = await scraper.run(st);
  //   for (var i in js.skills) {
  //     console.log(js.skills[i].skillName);
  //   }

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
    sDegree = js.education[i].degreeName;
    schools.push({ schoolName: sName, degree: sDegree });
  }

  //skills
  var skill = [];
  for (var i in js.skills) {
    skiller = js.skills[i].skillName;
    skill.push(skiller);
  }
  //console.log(skill);
  var profile = {
    name: js.userProfile.fullName,
    title: js.userProfile.title,
    description: js.userProfile.description,
    experiences: exp,
    education: schools,
    skills: skill,
  };
  // var tname = js.userProfile.fullName;
  // var ttitle = js.userProfile.title;
  // var tdesc = js.userProfile.description;
  // var proftxt = {
  //   tname,
  //   ttitle,
  //   tdesc,
  //   exp,
  //   schools,
  //   skill,
  // };
  // fs.writeFileSync(
  //   `profile${js.userProfile.fullName}.txt`,
  //   JSON.stringify(proftxt)
  // );
  fs.writeFileSync(
    `profile${js.userProfile.fullName}.json`,
    JSON.stringify(profile)
  );
  //console.log(result);
};
// guff("https://www.linkedin.com/in/yash-kumar-665208154/");
module.exports = guff;
