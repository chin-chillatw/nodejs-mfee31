const fs = require('fs')

const axios = require('axios'); //Note that you actually should put the semicolon before every self-invoking function. I adapted this construction: ;(() => {})()
const moment = require('moment');
(async () => {
    try{
        const stockNo = await fs.promises.readFile('test.txt', 'utf8')
        //console.log(data)
        let date = moment().format('YYYYMMDD')
        //console.log(moment)
        console.log(date) //moment 本身是一個很大的物件 我要ｌｏｇ的是date 不是moment
        let response = await axios.get(`http://54.71.133.152:3000/stocks`, 
        {
          params: { //其餘參數 parameters
            stockNo,
            date,
          }},
          )
        console.log(response.data)
    }catch(e){
        console.error(e)
    }
})();