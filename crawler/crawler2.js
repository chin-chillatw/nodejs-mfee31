// 1. 安裝 npm i axios
// 2. 引用 require
// 3. 去讀官方文件
const axios = require("axios");

// http://54.71.133.152:3000/stocks?stockNo=2618&date=202211

(async () => {
  try {
    let date= "202212/11"
    let stockNo="2330"
    let data = await axios.get(`http://54.71.133.152:3000/stocks`, 
        {params: {
          stockNo,
          date,
        }
    });
    console.log(data.data);
  } catch (e) {
    console.error(e);
  }
})();
