let boxs=document.querySelectorAll(".box")
let restbtn=document.querySelector("#rest-btn")
let newbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn= true;


const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const restgame=()=>{
    turn= true;
    enableBox();
    msgContainer.classList.add("hide")
}


boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turn)
       {
        box.innerText="0";
        turn=false;
       }
       else{
        box.innerText="x";
        turn=true;
       }
       box.disabled=true;
       checkWinner();
    })
})

const disableBox=()=>{
    for(let box of boxs)
    {
        box.disabled=true;
    }
}

const enableBox=()=>{
    for(let box of boxs)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner) =>{
    msg.innerText=`Congratulation, winner is${winner}`;
    msgContainer.classList.remove("hide")
    disableBox()
}

const checkWinner=()=>{
    for( let pattern of winpattern)
    {
        
        let pos1val  =boxs[pattern[0]].innerText;
        let pos2val  =boxs[pattern[1]].innerText;
        let pos3val  =boxs[pattern[2]].innerText;

        if(pos1val !=""&&pos2val !=""&&pos3val !="")
        {
            if(pos1val===pos2val&&pos2val===pos3val)
            {
                console.log("winner",pos1val);
                showWinner(pos1val)
            }
        }
    }
};

newbtn.addEventListener("click",restgame);
restbtn.addEventListener("click",restgame);