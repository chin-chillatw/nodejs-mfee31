const fs=require('fs')
const axios = require('axios')


(async () => {
    try{
    const data = await fs.promises.readFile('test.txt', 'utf8')
    let date = '20221216'
    let reponse = await axios.get(`http://54.71.133.152:3000/stocks`, {
        params: {
          data,
          date,
        }},)
        console.log(response.data)
    }catch(e){
        console.error(e)
    }
  })();