// function foo(...rest){
//     console.log(rest)
// }
// foo(...[1,2,3])

// let arr3 = [1,4]
// let arr4 = [2,3]
// arr3.splice(1,0,arr4);
// console.log(arr3)
// arr3.splice(1,0,...arr4)
// console.log(arr3)

// const origin = [1,2]
// const copy = origin.slice()
// const copy = [...origin]
// console.log(copy)
// console.log(copy === origin)

// const obj = {x:1, y:2}
// const copy = {...obj};
// console.log(copy)
// console.log(obj === copy)
// const merge = {x:1, y:2, ...{a:3,b:4}}
// console.log(merge)

// const merged = Object.assign({},{x:1, y:2},{y:3,x:3})
// console.log(merged)

// const merge ={...{x:1,y:2},...{y:3,x:3}}
// console.log(merge)

// const [c,d] = [1]
// console.log(c,d) // 인덱스 순서로 할당

// const user = {firstName : "yunsung", lastName : 'choi'}
// const{lastName,firstName} = user
// console.log(lastName,firstName)

// function printTodo({content,complete}){
//     console.log(`할 일 ${content}는 ${complete?'완료':'비완료'}상태입니다`)
// }
// printTodo({id:1, content:'html',complete : true})

// class Person{
//     name = '최윤성'
//     age= 25

// }
// const p = new Person()
// const{name:userName, age:userAge} = p
// console.log(`이름:${userName},나이:${userAge}`)
