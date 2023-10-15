
const bt=document.querySelector("button");
const ToDo_List=[];
bt.addEventListener("click", ()=>{
    const task= document.querySelector("input[name=your_task]");
const d=task.value;

function syncStorage(){
    ToDo_List.push(d);
    const my_collection=JSON.stringify(ToDo_List);
    localStorage.setItem("my_list",my_collection);
    // console.log(ToDo_List);
}

function fromStorage(){
    const previous=JSON.parse(localStorage.getItem("my_list"));
    for (let i=0; i<previous.length;i++){
        const title=previous[i];
        makeList(title);
    }
}
function makeList(d){
    const mpp=document.createElement("div");
    const mp=document.createElement("input");
        const sp=document.createElement("span");
        
        const c= document.querySelector(".chk");
        mp.classList.add("item");
        
        c.appendChild(mpp);
        c.appendChild(mp);
        c.appendChild(sp);
        
        
        mp.setAttribute("type","checkbox");
        sp.textContent=d;
        
        task.value="";
        
}

    if(d == ""){
        alert("fill the input...");
    }
    else{
    
        makeList(d);
        syncStorage(d);
        
   

      
        

    }
});
