

//Promise 建構式的初始值 ->excutor 
//new Promise(executor)
//executor => 執行者本身也使是一個韓式
//把原本要啜的非同步工作，搬進去執行者裡面
new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("done")
    },1000)
});


// setTimeout(()=>{
//     console.log("done")
// },1000) 把原本要啜的非同步工作，搬進去執行者裡面

//3.最終完成或失敗
//最終完成 pending-> fulfilled-> 呼叫resolve (promise 交接工作)
//最終完成 pending-> rejected-> reject



p.then((data) => { //data指的是呼叫resolve()這個callback 
    console.log('拿回資料', data);
  }).catch((error) => {
    console.error('發生問題了', error);
  });
 

