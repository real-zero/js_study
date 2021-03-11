const toDoList = document.querySelector('#to-do-list');

function addNewTodo(text) {
	// 여기에 코드를 작성해 주세요.
	const ap = document.createElement('li')
	ap.textContent = text;
	toDoList.append(ap)
}

// 테스트 코드
addNewTodo('자바스크립트 공부하기');
addNewTodo('고양이 화장실 청소하기');
addNewTodo('고양이 장난감 쇼핑하기');