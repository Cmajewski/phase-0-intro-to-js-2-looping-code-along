// Code your solutions in this file
function writeCards(names){
    let thankYou=[]
    for (const x of names){
        thankYou.push(`Thank you, ${x}, for the wonderful surprise gift!`)
    }
    return thankYou
}

function countDown(num){
    for(let i=num;i>-1;i--){
        console.log(i)
    }
}