// DOM 트리 여행하기
const myTag = document.querySelector('#list-1');

console.log(myTag);

// 형제 요소 노드
console.log(myTag.previousElementSibling);
console.log(myTag.nextElementSibling);

// 부모 요소 노드
console.log(myTag.parentElement);

// 자식 요소 노드
console.log(myTag.children[1]);
console.log(myTag.firstElementChild);
console.log(myTag.lastElementChild);


// DOM 프로퍼티


// textContext
console.log(myTag.textContent);

// outerHTML
console.log(myTag.outerHTML);

// innerHTML
console.log(myTag.innerHTML);