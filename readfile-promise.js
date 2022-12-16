const fs = require('fs');//放外面
const promise1 = new Promise((resolve, reject) => { //resolve and reject 分別是實現及拒絕callback function 這兩個方法分別代表成功與失敗的回傳結果，特別注意這兩個僅能回傳其中之一，回傳後表示此 Promise 事件結束。
  // error-first callback
  fs.readFile("test.txt", "utf-8", (err, data) => { //"utf-8"回傳的資料請用此編碼  fs.readFile(fileName [,options], callback) callback 放兩個函式err, data 當我們執行readFile完成時, 要做的事, 例如: 回傳file data。
    if (err) {
      // 如果 err 有值，表示有錯誤發生
      // 這裡應該要處理錯誤
      reject(err)//失敗就呼叫reject
    } else {
      // 進來這裡，表示 err 是空的 (可能是 null)
      resolve(data)//成功就呼叫ｒｅｓｏｌｖｅ
    }
  });
});

//使用者決定如何使用資料
promise1
  .then((succeedMessage) => {
    console.log("succeeded " + succeedMessage);
    
  })
  .catch((failedMessage) => {
    console.log("failed " + failedMessage);
  });


