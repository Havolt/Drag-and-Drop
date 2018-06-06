

        //// Data arrays and objects ////


let divSwap = {first : '', second: '', originalDiv : ''};


let creListItemData = [
    {name: 'LttP', img: 'ba-lttp.jpg', title: 'Link to the Past', cons: 'SNES', year: '1991', val: 1},
    {name: 'OoT', img: 'ba-oot.jpg', title: 'Ocarina of Time', cons: 'Nintendo 64', year: '1998', val: 2},
    {name: 'MM', img: 'ba-mm.jpg', title: "Majora's Mask", cons: 'Nintendo 64', year: '2000', val: 3},
    {name: 'WW', img: 'ba-ww.jpg', title: "Wind Waker", cons: 'Gamecube', year: '2002', val: 4},
    {name: 'TP', img: 'ba-tp.jpg', title: "Twilight Princess", cons: 'Gamecube/Wii', year: '2006', val: 5},
    {name: 'SS', img: 'ba-ss.jpg', title: "Skyward Sword", cons: 'Wii', year: '2011', val: 6},
    {name: 'BotW', img: 'ba-botw.jpeg', title: "Breath of the Wild", cons: 'Wii U/Switch', year: '2017', val: 7}
]

let listItemElementData = [];

let elArr = [
    {type: 'div', class: ['contain'], append: '.ddApp'},
    {type: 'div', class: ['titleContain'], append: '.contain'},
    {type: 'div', class: ['pageTitle'], append: '.titleContain', inHL: 'Drag and drop your favourite Zelda titles in order'},
    {type: 'div', class: ['listContain'], append: '.contain'},
    {type: 'div', class: ['buttonContain'], append: '.contain'},
    {type: 'div', class: ['listButton'], append: '.buttonContain', inHL: 'Finished', evt: {type: 'click', func: finButton}}
];


        //// Function used to create elements ////


let newElDD = function(elData){
    let newEl = document.createElement(elData.type);
    elData.class.map(function(item){
        newEl.classList.add(item);
    });
    if(elData.inHL){newEl.innerHTML = elData.inHL};
    if(elData.evt){newEl.addEventListener(elData.evt.type, elData.evt.func)}
    if(elData.srce){newEl.src = elData.srce};
    if(elData.bgImage){newEl.style.backgroundImage="url('imgs/" + elData.bgImage + "')"};
    if(elData.val){newEl.value = elData.val};
    if(elData.drg){
        newEl.draggable = 'true';
        newEl.ondragstart = elData.drgStart;
        newEl.ondrop = elData.drgDrop;
        newEl.ondragover = elData.drgOver;
        newEl.ondragend = elData.drgEnd
        newEl.ondragleave = elData.drgLeave;
    }
    document.querySelector(elData.append).appendChild(newEl);
};


let creListItem = function(itemData){
    let newLi = [
        {type: 'div', class: ['listItem', 'listItem'+itemData.name], append: '.listContain'},
        {type: 'div', class: ['listItemCon', 'listItemCon'+itemData.name], append: '.listContain', evt: {type: 'click', func: mouseDiv}, drg: true, drgStart: mouseDiv, drgDrop: drgDropper, drgOver: allowDrop, drgEnd: drgEnder, drgLeave: drgLeaver, val: itemData.val},
        {type: 'div', class: ['listItemNumCon', 'listItemNumCon'+itemData.name], append: '.listItemCon'+itemData.name},
        {type: 'div', class: ['listItemNum', 'listItemNum'+itemData.name], append: '.listItemNumCon'+itemData.name, inHL: 'dog'},
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

let listItemNumber = function(it, ind){
    it[3].inHL = ind + '.';
}

function finButton(){
    document.querySelector('.contain').classList.add('ddVanish');
    setTimeout(function(){
        document.querySelector('.contain').classList.add('ddHidden');
    }, 500)
}




        //// Drag and Drop functions ////

function mouseDiv(e){
    if(e.dataTransfer){
        e.dataTransfer.setData('text', e.target);
        divSwap.first = e.target.value;
        divSwap.originalDiv = e.target;
        e.target.style.background = '#D49A6A';
    }
}

function allowDrop(e){
    e.preventDefault();
    if(e.target.classList[0] == 'listItemCon' && e.target.classList[1] != divSwap.originalDiv.classList[1] ){
        e.target.style.backgroundColor = '#D4EE9F';
    }
    else if(e.target.parentElement.classList[0] == 'listItemCon' && e.target.parentElement.classList[1] != divSwap.originalDiv.classList[1] ){
        e.target.parentElement.style.backgroundColor = '#D4EE9F';
    }
    else if(e.target.parentElement.parentElement.classList[0] == 'listItemCon' && e.target.parentElement.parentElement.classList[1] != divSwap.originalDiv.classList[1] ){
        e.target.parentElement.parentElement.style.backgroundColor = '#D4EE9F';
    }
    else if(e.target.parentElement.parentElement.parentElement.classList[0] == 'listItemCon' && e.target.parentElement.parentElement.parentElement.classList[1] != divSwap.originalDiv.classList[1] ){
        e.target.parentElement.parentElement.parentElement.style.backgroundColor = '#D4EE9F';
    }
}

function drgEnder(){
    if(divSwap.originalDiv){
        divSwap.originalDiv.style.backgroundColor = 'white';
    }
}

function drgLeaver(e){
    if(e.target.classList[0] == 'listItemCon' && e.target.classList[1] != divSwap.originalDiv.classList[1] ){
        e.target.style.backgroundColor = 'white';
    }
}



function drgDropper(e){
    var data = e.dataTransfer.getData("text");
    let selDiv = e.target;
    
    while(selDiv.classList[0] != 'listItemCon'){
        selDiv = selDiv.parentElement;
    }
    divSwap.second = selDiv.value;
    if(divSwap.first == divSwap.second){
        divSwap.first = '';
        divSwap.second = '';
        divSwap.originalDiv = '';
        return;
    }
    reorganizeDivs();
}

function reorganizeDivs(){
    let swappingDivs = []
    creListItemData.map(function(item){
        if(item.val == divSwap.first || item.val == divSwap.second){
            let newObj = {};
            newObj.name = item.name; newObj.img = item.img; newObj.title = item.title; 
            newObj.cons = item.cons, newObj.year = item.year, newObj.val = item.val;
            swappingDivs.push(newObj);
        }
    })
    creListItemData.map(function(item1, index1){
        swappingDivs.map(function(item2, index2){
            if(item1.name == item2.name){
                if(index2 == 1){
                    creListItemData[index1] = swappingDivs[0]
                }else{
                    creListItemData[index1] = swappingDivs[1]
                }
            }
        })
    })
    divSwap.first = '';
    divSwap.second = '';
    divSwap.originalDiv = '';
    document.querySelector('.listContain').innerHTML = '';
    listItemElementData = [];
    creListItemData.map(function(item){
        creListItem(item);
    })
    listItemElementData.map(function(item, index1){
        listItemNumber(item, index1+1);
        item.map(function(item2){
            newElDD(item2);
        })
    })
}


        //// Initializing app self calling function ////



(function initApp(){
    elArr.map(function(item){
        newElDD(item);
    })
    creListItemData.map(function(item){
        creListItem(item);
    })
    listItemElementData.map(function(item, index1){
        listItemNumber(item, index1+1);
        item.map(function(item2){
            newElDD(item2);
        })
        
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

