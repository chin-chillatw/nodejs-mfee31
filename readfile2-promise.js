const fs = require("fs"); //放外面
let p = new Promise(function (resolve, reject) {
  fs.readFile("test.txt", "utf-8",  (err, data) => {
    if (err) {
        reject(err);
    } else {
        resolve(data);
    }
});
});

(async () => {
  let await2= await p;
  console.log( await2)

})();


