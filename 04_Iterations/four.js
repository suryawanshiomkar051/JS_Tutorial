const myObj = {
  js: "Javascript",
  css: "Cascading Style Sheets",
  html: "Hypertext Markup Language",
};

for (const k in myObj) {
  console.log(k + " : " + myObj[k]);
}
