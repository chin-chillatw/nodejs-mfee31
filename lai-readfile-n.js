const fs= require('fs/promise')//使用 fs 模組前需先用 require() 載入 然後就可以呼叫它的函數進行檔案操作. 與其他模組不同之處是, fs 模組的函數有非同步或同步之分, 同步版的函數以 Sync 結尾

(async ()=>{
    try{
    let data = await fs.readfile('test.txt','utf-8')
    console.log("from await " + data)
    }catch(e){
        console.error(e)
    }
})();