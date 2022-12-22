btn.addEventListener('click', () =>{
    var name = input.value
    
    let a = [
        "initializing hack tools.....",
    "conneting to Instagram.....",
    `Instagram id found for username:@${name}....`,
    "connecting to server 1.....",
    "trying 500k passwords....",
    "match not found....",
    "trying another 500k passwords....",
    "match not found.....",
    "trying another 500k passwords....",
    "match found.....",
    "fetching another details....",
    "connected successfully....."
]

const sleep = async (sec)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(true)},sec*1000)
    })
}
const showhack = async (msg) => {
    await sleep(4)
    // console.log(msg)
    boxx.innerHTML = boxx.innerHTML + msg + '<br>' + '<br>'
}

const p = async ()=>{
    for(i=0; i<a.length; i++){
        await showhack(a[i])
    }
}

p()
})