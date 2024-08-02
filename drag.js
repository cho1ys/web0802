// function f(e){
//     let text = e.target.tagName
//     document.getElementById('show').innerHTML = text
// }

// const item = document.querySelector('.item')
// item.addEventListener('dragstart',()=>{
//     console.log('드래그 시작')
// })

// item.addEventListener('drag',()=>{
//     console.log('드래그 중')
// })

// const container = document.querySelector('.container')
// container.addEventListener('dragenter',()=>{
//     console.log('여기는 컨테이너1')
// })
// container.addEventListener('dragleave',()=>{
//     console.log('컨테이너1에서 벗어남')
// })
// container.addEventListener('dragover',(e)=>{
//     console.log('컨테이너1에 있어')
//     e.preventDefault()
// })
// container.addEventListener('drop',()=>{
//     console.log('컨테이너1에 둘게')
// })

// const container2 = document.querySelector('.container2')
// container2.addEventListener('dragenter',()=>{
//     console.log('여기는 컨테이너2')
// })
// container2.addEventListener('dragleave',()=>{
//     console.log('컨테이너2에서 벗어남')
// })
// container2.addEventListener('dragover',(e)=>{
//     console.log('컨테이너2에 있어')
//     e.preventDefault()
// })
// container2.addEventListener('drop',()=>{
//     console.log('컨테이너2에 둘게')
// })

// document.getElementById('appendChildBtn').onclick = () =>{
//     const parent = document.getElementById('parent')
//     const newEle = document.createElement('div')
//     newEle.textContent = 'New Child'
//     parent.appendChild(newEle)
// }


// document.getElementById('insertBeforeBtn').onclick =()=>{
//     const parent2 = document.getElementById('parent')
//     const newEl = document.createElement('div')
//     newEl.textContent = 'New Child'
//     const refer = document.getElementById('refer')
//     parent2.insertBefore(newEl, refer)
// }

// 드래그&드롭
// 'draggable' 클래스를 가진 모든 요소를 선택합니다.
const draggable = document.querySelectorAll('.draggable');

// 'container' 클래스를 가진 모든 요소를 선택합니다.
const container = document.querySelectorAll('.container');

// 각 draggable 요소에 대해 dragstart 및 dragend 이벤트 리스너를 추가합니다.
draggable.forEach(draggable => {
    // 드래그 시작 시 'dragging' 클래스를 추가합니다.
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    // 드래그 종료 시 'dragging' 클래스를 제거합니다.
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

// 각 container 요소에 대해 dragover 이벤트 리스너를 추가합니다.
container.forEach(container => {
    // 드래그 오버 시 발생하는 이벤트를 처리합니다.
    container.addEventListener('dragover', (e) => {
        e.preventDefault(); // 기본 동작을 방지하여 드롭이 가능하게 합니다.

        // 현재 드래그 중인 요소의 X 좌표를 기준으로, 드래그가 놓일 위치를 결정합니다.
        const afterEle = getDragAfterEle(container, e.clientX);

        // 현재 드래그 중인 요소를 선택합니다.
        const draggable = document.querySelector('.dragging');

        // afterEle가 undefined인 경우, 즉 드래그가 놓일 위치가 없으면
        // 컨테이너의 마지막에 드래그 중인 요소를 추가합니다.
        if (afterEle === undefined) {
            container.appendChild(draggable);
        } else {
            // 드래그 중인 요소를 afterEle 앞에 삽입합니다.
            container.insertBefore(draggable, afterEle);
        }
    });
});

// 드래그된 항목이 놓일 위치를 결정하는 함수
function getDragAfterEle(container, x) {
    // 현재 컨테이너 내에서 'dragging' 클래스를 가지지 않는 모든 draggable 요소를 배열로 변환합니다.
    const draggableEle = [...container.querySelectorAll('.draggable:not(.dragging)')];
    
    // 가장 가까운 요소를 찾기 위해 reduce 함수를 사용합니다.
    return draggableEle.reduce((closest, child) => {
        // 자식 요소의 위치와 크기를 가져옵니다.
        const box = child.getBoundingClientRect();
        // 드래그 중인 요소의 X 위치를 기준으로 상대적 위치를 계산합니다.
        const offset = x - box.left - box.width / 2;
        // offset이 0보다 작고, 현재까지 가장 가까운 요소보다 offset이 크면
        // 가장 가까운 요소를 업데이트합니다.
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            // 그렇지 않으면 현재까지의 가장 가까운 요소를 유지합니다.
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element; // 초기값으로 가장 작은 음의 무한대를 설정합니다.
}
