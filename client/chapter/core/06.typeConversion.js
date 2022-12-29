/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number -> '2022'
const YEAR = 2022;

console.log(String(YEAR));

// undefined > 'undefined'
// null

//console.log(typeof String(undefined));
let days = null;
console.log(String(days));


// boolean
let isKind = true;
console.log(typeof (isKind + '')); //'' 빈값더하면 문자열로 형변환

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed > Nan
console.log(Number(undefined));

// null > 0
let money = null;
console.log(Number(money));


// boolean > true : 1 / false : 0  여기에 숫자곱하면 true는 1, false는 0 됌 / +기호 붙여도 숫자됌
let cutie = true;
console.log(+cutie);

// string

// numeric string


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 