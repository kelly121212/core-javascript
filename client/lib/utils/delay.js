import { getNode } from '../dom/getNode.js'
import { isNumber,isObject } from './typeOf.js'



const first = getNode('.first');
const second = getNode('.second');



function delay(callback,timeout = 1000){
  setTimeout(callback, timeout);
}







// const first = getNode('.first');


// function delay(callback,timeout = 1000) {
  
//   setTimeout(callback, timeout);
// }

// delay(()=>{
//   first.style.top = '-100px';
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)';
//     delay(()=>{
//       first.style.top = '0px';
//     })
//   })
// }




const defaultOptions = {
  shouldReject : false,
  timeout : 1000,
  data : '성공',
  errorMessage : '알수없는 오류가 발생했습니다. '
}



export function delayP(options = {}){

  //config 에다가 위에 쓴 객체를 복사할거임. 참조한게아님 복사임 
  // let config = defauleOptions 하면 참조라서 문제가됨. 다른 인수 넣어주면 값이 바뀌니까 
  let config = {...defaultOptions};

  // 인자로 매개변수가 숫자일 경우에만 숫자로해 ! 
  if(isNumber(options)){
    config.timeout = options;
  }

  // 객체 합성  mixin
  // 원래 컨피그 객체+ 우리가 넣을 옵션들 추가하기 (근데 옵션값이 컨피그값과 동일하면 옵션값으로 덮어주기)

  if(isObject(options)){
    config = {...config,...options};
  }
  
  
const {shouldReject,data,errorMessage,timeout} = config;


return new Promise((resolve, reject) => {
  
  setTimeout(() => {
    !shouldReject ? resolve(data) : reject(errorMessage);
  }, timeout);
})
}



// delayP(3000).then((res)=>{
//   console.log(res); // 진짜 성공
// })

//result 줄여서 res
// delayP()
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })





















