 

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data =", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 3000);
 }
console.log("Fetching Data 1..");
getData(123, () => {
  console.log("Fetching Data 2..");
  getData(13, () => {
    console.log("Fetching Data 3..");
    getData(342, ()=>{
      console.log('Fetching Data 4'); // CALLBACK HELL(NESTED CALLBACK)
      getData(34243, ()=> {
        
      })
    });
  });
});

// This type of style is difficult to understand and manage..

// PROMISES : To solve the problem of Callback Hell We use Promises


// let newData = () => {
//     new Promise((resolve,reject) => {
//     console.log('This is Promise')
//    resolve('promise resolved')
//   })
//   }
  // console.log(newData);
  
//   let promised= newData();
//   promised.then(()=> {
//     console.log('promise')
//   })
  
  // let getData = ((newData,dataId)=>{
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(() => {
  //       console.log('data =',newData)
  //       resolve('success')
  //       if(dataId){
  //         dataId();
  //       }
  //     }, 2000);
  //   })
  
  // })
  // console.log(getData(12, ()=> {
  //   console.log(getData(23));
    
  // }));
  