/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */


// let = 32;

// if( age >= 14 && age =< 90 ){
//   alert('튼튼하시군요');
// }














let a = 10;
let b = ''; //빈문자여서 false값임 
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};
// 값이 무조건 있으면 true
// 공백문자 = true / [] 배열이라는 값이 들어있어서 true  / 마지막꺼는 객체자체도 값이라 true {thisIsFalsy:false}

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};







let userName = prompt('사용자 이름을 입력해주세요','');
let pw;


//대소문자 상관없이 하는 방법은?
if(userName?.toLowerCase() === 'admin'){
  let pw = prompt('비밀번호를 입력해 주세요.','');

  if(pw?.toLowerCase() === 'themaster'){
    console.log('환영합니다.');
  }else{
    console.log('취소되었습니다.');
  }
  
}else if(userName.replace(/\s*/g,'') === '' || userName === null){ //공백문자나 esc누를경우 , 둘중하나라도 참이면 값이나와라
  console.log('취소했습니다.');
}else{
  console.log('인증되지 않은 사용자입니다.');
}

//console.log(userName);


































