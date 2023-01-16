
import { typeError } from "../error/typeError.js";
import { isElement } from "../utils/typeOf.js";



//위에서 값을 설정해두면 바로밑에오는 함수에 설명을 적는 주석 JS Doc (vscode에서 제공)
/**
 * @function isElement checkElement
 * @param {HTMLElement} node 
 * @return {disabled} set disabled
 */

//disabled 설정을 함수로 만들자 
export function disableElement(node){

  // document.ELEMENT_NODE 과 1 은 같은것. 1을 더 잘 쓰인다 
  if (!isElement(node)) {
    typeError('disableElement 함수의 인자는 DOM 요소 노드이어야 합니다');
  }
  node.disabled = true;
}

export function enableElement(node){
  if (!isElement(node)) {
    typeError('disableElement 함수의 인자는 DOM 요소 노드이어야 합니다');
  }
  node.disabled = false;
}

export function visibleElement(node){ //보여야함

  if (!isElement(node)) {
    typeError('visibleElment 함수의 인자는 DOM 요소 노드이어야 합니다');
  }
  node.hidden = false;
}

export function invisibleElement(node){ //안보여야함
  if (!isElement(node)) {
    typeError('invisibleElment 함수의 인자는 DOM 요소 노드이어야 합니다');
  }
  node.hidden = true;
}