/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}



// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello(){};
//namedFunctionExpression 얘로 호출해서 써야해서 보통 hello는 안짓는다.


// 콜백 함수 (표현)식
let callbackFunctionExpression = function (url,resolve,reject){
  
  if(typeof url === 'string'){
    resolve()
  }else{
    reject()
  }

};


callbackFunctionExpression(
  'https://www.naver.com',
  function(){
    console.log('해당 페이지로 이동합니다.');
  },
  function(){
    console.log('url 입력 정보가 올바르지 않습니다.');
  }
  )

// 함수 선언문 vs. 함수 (표현)식
// 선언문은 function aa(){

// }

// 표현식은 
// const bb = function(){}



// 즉시 실행 함수 (표현)식
// 즉시 호출될수있는 함수의 표현식
// Immediately Invoked Function Expression

// 함수의 이름이 없어서 입력함수 
// function(){}를 소괄호로 실행하기위해 감싸준다.
// d오늘날은 많이 안쓰다
let IIFE;
(function(){

  console.log('hi~');

})()



//IIFE 쓰는 예시
const MASTER = (function () {
  // parameter
  const KEY = "alcls@#@!$%";

  // 내가 내보내고 싶은 항목들만 내보낼꺼야
  // 모듈로서의 활용
  // 정보 은닉화 incapsulation : 외부의 접근을 차단
  // 일부 정보만 노출

  return {
    getKey: function () {
      return KEY;
    },
  };
})(); // arguments

console.log(MASTER.getKey());