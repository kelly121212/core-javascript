/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

// let i = 10;

// do {
//   console.log('최초 선언');
//   i ++;
// }while(i < 5)

// while 때문에 false인데 그럼에도 무조건 한번실행이라 console.log 안의 내용이 나오는것


// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정



// let count = prompt('몇 번 순환할까요?','');

// do{

//   console.log(count);

//   if(count <= 0 || !count){
//     console.log('최초실행');
//     break;
//   }
//   count--;

// }while(count)



let first = document.querySelector('.first');

//next 하는 일 : 함수에 뭔가를 집어넣으면 뭔가에 대한 다음 노드를 반환하는것 

function next(node){

  do{
    node = node.nextSibling;
  
  }while(node.nodeType !== document.ELEMENT_NODE)

  return node
}

next(first)

// next(first) // 괄호안 first는 인수 artuments

// prev(second)   // first 

// function prev(node){
//   do{
//     node = node.previousSibling;
  
//   }while(node.nodeType !== document.ELEMENT_NODE)

//   return node
// }








// do{

//   first = first.nextSibling;

// }while(first.nodeType !== document.ENTITY_NODE)

// console.log(first);











