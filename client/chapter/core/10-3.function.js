/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


const calculateTotal = ( ... args) => {
  //화살표 함수는 arguments없다. 대신 ... args 씀 레스트 파라미터

  let total = 0;
  args.forEach(function(item, args){

  })
}


let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a,b,c,d) => a+b+c+d;
  
// 화살표 함수와 this

//객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾습니다 
// 메서드 안에서의 함수는 this 를 찾기 위해서는 arrowFuncion이 오히려 좋다 
const user = {
  name: 'tiger',
  age:32,
  address:'서울시 중랑구 면목동',
  grades:[80,90,100],
  totalGrades: function(){

  }
}

console.log(user.totalGrades());



/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;
  for(let i = 0; i < powerCount; i++){
    result *= numeric
  }
  return result;
};

                                                                                    // acc *= numeric
                                                                                    // acc += text

// let powExpression = (numeric, powerCount) => Array(powerCount).fill(null).reduce(acc=>acc * numeric,1)



// pow(2,53) // 9007199254740992



// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = '';
  for(let i = 0; i < repeatCount; i++){
    result += text;
  }
  return result;
}; 



let repeatExpression = (text, repeatCount)=> Array(repeatCount).fill(null).reduce(acc=> acc + text,'')
// repeat('hello😘',3) //  'hello😘hello😘hello😘'
