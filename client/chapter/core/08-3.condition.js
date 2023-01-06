/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

// const MORNING    = '아침',
//       LUNCH      = '점심',
//       DINNER     = '저녁',
//       NIGHT      = '밤',
//       LATE_NIGHT = '심야',
//       DAWN       = '새벽';


      // let thisTime = DAWN;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */




// switch (thisTime) {
//   case MORNING:
//     console.log('디스코드를 켠다');
//     break;
//   case LUNCH:
//     console.log('점심을 맛있게 먹는다');
//     break;
//   case DINNER:
//     console.log('멘토링 수업 준비를 한다.');
//     break;    
//   case NIGHT:
//     console.log('스터디 발표 준비를 한다.');
//     break;    
//   case LATE_NIGHT:
//   case DAWN:
//     console.log('꿈속에서 배웠던 코드를 생각한다.');
//     break;        
// }


// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */

// if (thisTime == MORNING){
//   alert('디코켜기');
// }else if(thisTime == LUNCH){
//   alert('맛점하기');
// }else if(thisTime == DINNER){
//   alert('수업준비');
// }else if(thisTime == NIGHT){
//   alert('발표준비');
// }else (thisTime == LATE_NIGHT || thisTime == DAWN){
//   alert('드림코딩');
// }




/* switch vs. if -------------------------------------------------------- */

// 임의 숫자를 넣어서 무슨 요일 인지를 알려주는 함수를 만들어보자

// function getDay(dayValue){
//   switch (dayValue){
//     case 0: return '일';
//     case 1: return '월';
//     case 2: return '화';
//     case 3: return '수';
//     case 4: return '목';
//     case 5: return '금';
//     case 6: return '토';
//   }
// }

// let result = getDay(Math.round(Math.random() * 6));

// console.log(result);
//Math.round 는 0.5가되면 반올림된다. 입력값을 반올림한 수의 가장 가까운 정수 값을 반환한다.


// return을 만나면 값을 퉤하고 내뱉고 함수를 종료한다.



// let number = +prompt('0~6 중 하나를 적어주세요');

// switch (number){
//   case 0:
//     alert( '월' );
//     break;
// }


let getNumber = (+prompt('숫자를 입력해주세요'),'');

if(getNumber % 2 === 0 ){
  alert('홀수입니다.')
}else{
  alert('짝수입니다.')
}



