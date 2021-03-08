
let members = ['박지성', '루니', '호날두','메시']

// splice (startIndex, deltetCount, items)
members.splice(2,1,'아자르')
console.log(members)
// let members = ['박지성', '루니', '아자르','메시']

// shift() : 첫번째 인덱스 삭제
members.shift();
console.log(members)
// let members = [ '루니', '아자르','메시']

// pop() : 제일 마지막 인덱스 삭제
members.pop();
console.log(members)
// let members = ['루니', '아자르']

// unshift() : 첫 번째 인덱스에 값 입력
members.unshift('호나우두')
console.log(members);
// let members = ['호나우두',루니', '아자르']

// push() : 마지막 인덱스에 값 입력
members.push('기성용','이청용')
console.log(members)
// let members = ["호나우두", "루니", "아자르", "기성용", "이청용"]