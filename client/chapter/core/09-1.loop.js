// /* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */





// let i = 0;

// while(i < 10){
//   console.log('안녕');

//   i++;
// }













const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);

// let i = 0;
// while(i < frontEndDev.length){

//   console.log(frontEndDev[i]);

//   i++;
// }

//위의 식과 아래와 같지만 위는 항목을 늘려도 나옴
// while(i < 7){

//   console.log(frontEndDev[i]);

//   i++;
// }



// let i = frontEndDev.length - 1;
// while( i >= 0 ){

//   console.log(frontEndDev[i]);

//   i--;
// }

let copyArray = [ ...frontEndDev]
// ... spread 연산자
//  let copyArray = [  이거와 위에는 같다.
//   'HTML',
//   'CSS',
//   'SVG',
//   'JavaScript',
//   'jQuery',
//   'React',
//   'Redux',
// ];
//pop을 써버리면 배열이 파괴되어서 배열을 복사시켜주는 copyArray 라는 기능으로 배열을 유지할수도있음

while(copyArray.length){
  console.log(copyArray.pop());
}



// let array = [100, 200, 300, 400, 500];

// console.log(array.pop());
// console.log(array);





/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

// while 문 (역순환 : 역방향)

// 성능 진단 : 순환 vs. 역순환