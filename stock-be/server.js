
const express = require('express')

const app = express()//利用express 這框架建立一個web app

//中間件(函式)middleware 因為沒有網址 所以一定會經過這些中間件（照先後順序執行）
app.use((req, res, next)=>{
    console.log('這裡是Ａ中間件')
    req.dt= new Date().toISOString() //可以在中間件加下面路由都會用到的變數 .name 可以自由加入變數
    //console.log(req)
    next(); //如果中間件沒有提供next 程式會卡在這 client端沒有收到response就會跑圈圈
})

app.use((req, res, next)=>{
    console.log('這裡是Ｂ中間件')
    req.chinIsFreakingHot = "Chin is a freaking capable and hot engineer!"
    next(); 
})

//app.[method]
//get, post, put, patch,delete,option,head
//路由中間件
//比對到這個網址'/' 所以會進來這裡 有response 就是終點了
app.get('/', (req, res,next)=>{
    console.log("這裡是首頁")
    res.send("Hello express!"+ req.chinIsFreakingHot) //有網址'/' 所以會進來這裡 有response 就是終點了
})

app.get('/test', (req,res,next)=>{
    console.log('這裡是test')
    res.send("Hello Test 1")

})

//放在所有路由中間件後面
//前面所有路由中間件都比對不到網址，就會來這裡
//
app.use((req,res,next)=>{
    console.log('這裡是404',req.chinIsFreakingHot )
    res.send('沒有這個網頁啦')
})

app.listen(3001,()=>{ //port 3006已經被mySQL拿去用 //且我們沒有要使用mySQL 所以xampp不需要再開一個localhost
    console.log('server is running at 3001')
}); 