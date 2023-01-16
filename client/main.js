



import { diceAnimation, getNode } from "./lib/index.js";



// [ 주사위 굴리기 ]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸함수 만들기
// 3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

//주기적으로 호출해줘야 계속 돌아가는 애니메이션 보일수있다
//diceAnimation() 이 함수 안에다가 애니메이션을 구현해놨다.


//1
const rollingDiceButton = getNode(".buttonGroup > button:nth-child(1)");





//3
//IFFE 패턴 
const handlerRollingDice = (() => {

  //같은 버튼으로 돌리고 동작을 멈춰야해서 처음엔 초기값을 false 준다
    let isRolling = false;
    let stopAnimation; 
  
    //4
    //diceAnimation()
    // //5
    // stopAnimation = setInterval(diceAnimation,100)
  
    // 토글의 기능처럼 짜여진 함수 
    // 반환값이 함수 본문 전체가 나오다보니 작동을 안한다. 결국 실행하려면 54라인처럼 () 두번써줘야하지만 그걸 58번라인에 ( ) 추가해줌으로 해결
    return () => {
      if(!isRolling){
        //첫번째클릭
        stopAnimation = setInterval(diceAnimation,100)
      }else{
        //두번째클릭
        clearInterval(stopAnimation);
      }
    
      isRolling = !isRolling;
    }
  
  })()

//handlerRollingDice()()


//2 // handlerRollingDice에 함수 실행위해 ()를 추가 했지만 ~ IFFE 패턴으로 다시 해주려고 없앰 
rollingDiceButton.addEventListener('click', handlerRollingDice)















