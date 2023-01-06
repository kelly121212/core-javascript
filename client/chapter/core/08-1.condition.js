/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// let number = prompt('숫자를 입력해주세요', 0);

// if (number > 0) {
//   alert('1');
// } else if(number < 0) {
//   alert('-1');
// } else{
//   alert('0');
// }



// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'yes';

// 영화 볼거니?
let goingToWatchMovie = 'no';

if(didWatchMovie.includes('yes')) {
  console.log('그거 재밌더라');
}else if(goingToWatchMovie === 'yes'){
  console.log('가자 자기야');
}else{
  console.log('음 난 별로');
}

let movieMessage = 
(didWatchMovie.includes('yes')) ? '그거 재밌더라' :
(goingToWatchMovie === 'yes') ? '너무 설렌다' : '난 별루'


// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식












