const axios = require('axios');

(async()=>{
    try{
    let stockNo = 2330
    let date = '20221216'

    let response = await axios.get(`http://54.71.133.152:3000/stocks`, {
        params:{ //其餘參數 parameters
            stockNo,
            date,
        }
    })
    console.log(response.data.data)
}catch(e){
    console.error(e) 
    }
})(); //記得呼叫立即函式（）