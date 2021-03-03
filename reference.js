let numbers1 = [1,2,3];
// let numbers2 = numbers1
// -> 배열이 담긴 주소가 복사되어 출력시 numbers1,number2 값이 전부 바뀜

// slice() 이용 전체 복사
let numbers2 = numbers1.slice();
numbers1.push(4);

console.log(numbers1);
console.log(numbers2);


// 객체 복사
function cloneObject(object){
    let temp = {};

    for (let key in object){
        temp[key] = object[key];
    }
    return temp;
};

let course1 = {
    title : '파이썬',
    language : 'Python'
};
let course2 = cloneObject(course1);

// let course2 = Object.assign({},course1);
course2.title = '함수';

console.log(course1);
console.log(course2);