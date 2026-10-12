/* Build an offline, single-file copy of Murad's two digestion lessons. */
"use strict";
const fs = require("fs"), path = require("path");
const root = path.resolve(__dirname, "..");
const read = name => fs.readFileSync(path.join(root, name), "utf8");
let lessons = read("lessons/murad-science-t3.js");
lessons = lessons.replace(/"assets\/science\/([^"/]+\.jpg)"/g, (_, name) => {
  const bytes = fs.readFileSync(path.join(root, "assets/science", name));
  return JSON.stringify("data:image/jpeg;base64," + bytes.toString("base64"));
});
const script = text => "<script>\n" + text.replace(/<\/script/gi, "<\\/script") + "\n</script>";
const html = '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n' +
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' +
  '<title>Murad · Science · Digestion</title>\n<style>\n' + read("assets/sheet.css") + '\n</style>\n</head>\n<body>\n' +
  '<div id="app" lang="en"><p>Loading Murad\'s digestion lessons…</p></div>\n' +
  script(read("assets/sheet.js")) + '\n' + script(read("lessons/_common.js")) + '\n' + script(lessons) + '\n' +
  '<script>SheetEngine.boot(document.getElementById("app"));</script>\n</body>\n</html>\n';
const output = path.join(root, "murad-science-digestion.html");
fs.writeFileSync(output, html);
console.log("Built", path.basename(output), "(" + Buffer.byteLength(html) + " bytes)");
