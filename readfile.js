const fs =require('fs');

//err-first callback 錯誤優先
fs.readFile('test.txt',(err, data)=>{
    if(err)
    {//如果有值 不是null 表示有錯誤
    console.err('發生錯誤了',err)
    }else{
        //如果沒有值，代表err是空的 成功讀取
        console.log('成功讀取',data)
    }
});