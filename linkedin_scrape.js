//import { LinkedInProfileScraper } from "linkedin-profile-scraper";
var fs = require("fs");
const { LinkedInProfileScraper } = require("linkedin-profile-scraper");

guff = async (st) => {
  const scraper = new LinkedInProfileScraper({
    sessionCookieValue:
      "AQEDASus8WMEEPGAAAABdeV8zJcAAAF2CYlQl04Aki8ZOodMMZO88ZSA-eBsD9w26BcdBCBhL1zOO6GpNN0KPLJNUzXtBOCXbE0mQg3ozFFJiHqcN_Aet12w6PFsXvAysNpLYg_jEvIn0BKVz-1bhaWv",
    keepAlive: true,
  });

  // Prepare the scraper
  // Loading it in memory
  await scraper.setup();

  const result = await scraper.run(st);
  //console.log(result);
  fs.writeFileSync("profile.json", JSON.stringify(result));
  return result;
};

guff("https://www.linkedin.com/in/yash-kumar-665208154/");
// console.log(details);

// suq node js
// suq http://www.twitter.com > example.json
