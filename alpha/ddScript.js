
let newElDD = function(elData){
    let newEl = document.createElement(elData.type);
    elData.class.map(function(item){
        newEl.classList.add(item);
    });
    if(elData.inHL){newEl.innerHTML = elData.inHL};
    if(elData.evt){newEl.addEventListener(elData.evt.type, elData.evt.func)}
    if(elData.srce){newEl.src = elData.srce};
    document.querySelector(elData.append).appendChild(newEl);
    console.log(newEl.classList)
};

let elArr = [
    {type: 'div', class: ['contain'], append: '.ddApp', inHL : 'Doctor blues'}
];




(function initApp(){
    newElDD(elArr[0]);
})()








/*
    let vd = new Vue({
    el: '.ddApp',
    data: {
        cat: 'hello'
    }
    })
*/

