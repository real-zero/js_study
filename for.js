// for 문
// 구구단 출력
for(let i = 1; i < 10; i ++){
    for(let j = 1; j < 10; j++){
        console.log(`${i}단`);
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('----------');
}

// for in 문
let js = {
    name :'js',
    born : 2020,
    is : true,
    school : null,
    lang : 'python'
}
for(let key in js){
    console.log(key);
    console.log(js[key])
}

// for of 문
let members = ['박지성', '루니', '호날두','메시']
for(let member of members){
    console.log(member)
}
