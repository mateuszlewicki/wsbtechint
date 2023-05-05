import { QueueItem } from './js/queueItem.js';
window.addEventListener('DOMContentLoaded',() => {
    main();
})

async function main(...args){
    const dataMockUrl='/js/mock/songs.json';
    populateList("div#queue>ul",await loadData(dataMockUrl));

}

async function loadData(url){
    let obj_list = new Array();
    let res = await fetch(url)
        .then(
            (result) => result.json()
            )
        .then(
            (output) => {  
                output.forEach((item) => (
                    obj_list.push(new QueueItem(item.image, item.title, item.artist)) 
                    )
                )
            }
        )
        

    
    return obj_list;
}

function logConsoleJSON(json){
    json.forEach((element) => {
        console.log("[DEBUG] ITEM: "+JSON.stringify(element))
    }); 
    
}

function populateList(selector,data){
    let ul = document.querySelector(selector);

    data.forEach( (item) => {
        let li = document.createElement("li");
        li.classList.add("q1", "w-100");
        li.appendChild(item.fragment());
        ul.appendChild(li);
            
            
        }
        
    )
}