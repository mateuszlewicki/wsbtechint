window.addEventListener('DOMContentLoaded',() => {
    main();
})

async function main(...args){
    const dataMockUrl='/js/mock/songs.json';
    logConsoleJSON(await loadData(dataMockUrl));

}

async function loadData(url){
    
    let res = fetch(url)
        .then((result) => result.json());
       
    let outputJson = await res;
    return outputJson;
}

function logConsoleJSON(json){
    json.forEach((element) => {
        console.log("[DEBUG] ITEM: "+JSON.stringify(element))
    }); 
    
}