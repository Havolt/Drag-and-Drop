
let newElDD = function(elData){
    let newEl = document.createElement(elData.type);
    elData.class.map(function(item){
        newEl.classList.add(item);
    });
    if(elData.inHL){newEl.innerHTML = elData.inHL};
    if(elData.evt){newEl.addEventListener(elData.evt.type, elData.evt.func)}
    if(elData.srce){newEl.src = elData.srce};
    if(elData.bgImage){newEl.style.backgroundImage="url('imgs/" + elData.bgImage + "')"};
    document.querySelector(elData.append).appendChild(newEl);
    
};

let listItem = [
    {type: 'div', class: ['listItemCon', 'listItemConLttP'], append: '.contain'},
    {type: 'div', class: ['listItemImgCon', 'listItemImgConLttP'], append: '.listItemConLttP'},
    {type: 'div', class: ['listItemImg', 'listItemImgLttP'], append: '.listItemImgConLttP', bgImage: 'ba-lttp.jpg'},
    {type: 'div', class: ['listItemTextCon', 'listItemTextConLttP'], append: '.listItemConLttP'},
    {type: 'div', class: ['listItemTitle', 'listItemTitleLttP'], append: '.listItemTextCon', inHL: 'Link to the Past'}
]

let elArr = [
    {type: 'div', class: ['contain'], append: '.ddApp'}
];




(function initApp(){
    newElDD(elArr[0]);
    listItem.map(function(item){
        newElDD(item);
    })
})()








/*
    let vd = new Vue({
    el: '.ddApp',
    data: {
        cat: 'hello'
    }
    })
*/

