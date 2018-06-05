
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


let creListItem = function(itemData){
    let newLi = [
        {type: 'div', class: ['listItemCon', 'listItemCon'+itemData.name], append: '.contain'},
        {type: 'div', class: ['listItemImgCon', 'listItemImgCon' + itemData.name], append: '.listItemCon' + itemData.name},
        {type: 'div', class: ['listItemImg', 'listItemImg' + itemData.name], append: '.listItemImgCon' + itemData.name, bgImage: itemData.img},
        {type: 'div', class: ['listItemTextCon', 'listItemTextCon' + itemData.name], append: '.listItemCon' + itemData.name},
        {type: 'div', class: ['listItemTitle', 'listItemTitle' + itemData.name], append: '.listItemTextCon' + itemData.name, inHL: itemData.title},
        {type: 'div', class: ['listItemDesc', 'listItemDesc' + itemData.name], append: '.listItemTextCon' + itemData.name},
        {type: 'div', class: ['listItemConsole', 'listItemConsole' + itemData.name], append: '.listItemDesc' + itemData.name, inHL: '<b>Console: </b>' + itemData.cons},
        {type: 'div', class: ['listItemYear', 'listItemYear' + itemData.name], append: '.listItemDesc' + itemData.name, inHL: '<b>Year: </b>' + itemData.year}
    ];
    listItemElementData.push(newLi);
}

let creListItemData = [
    {name: 'LttP', img: 'ba-lttp.jpg', title: 'Link to the Past', cons: 'SNES', year: '1991'},
    {name: 'OoT', img: 'ba-oot.jpg', title: 'Ocarina of Time', cons: 'Nintendo 64', year: '1998'},
    {name: 'MM', img: 'ba-mm.jpg', title: "Majora's Mask", cons: 'Nintendo 64', year: '2000'}
]

let listItemElementData = [];

let elArr = [
    {type: 'div', class: ['contain'], append: '.ddApp'}
];




(function initApp(){
    newElDD(elArr[0]);
    creListItemData.map(function(item){
        creListItem(item);
    })
    listItemElementData.map(function(item){
        item.map(function(item2){
            newElDD(item2);
        })
        
        console.log(item)
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

