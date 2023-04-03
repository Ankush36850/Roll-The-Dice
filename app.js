let btns = document.querySelectorAll('button')
let output = document.querySelector('.result')
let players = {}

for(let t of btns){
    t.addEventListener("click", rollDice)
}

let arr = []
let str = ''
function rollDice(event){
    this.disabled = true;
    if(event.target.innerText != 'End Button'){
        let result = parseInt((Math.random()*6)+1) 
        event.target.nextElementSibling.innerText = `Value you got : ${result}`
        arr.push(result)
        let playerName = document.querySelector('#'+ event.srcElement.className).value
        players[playerName] = result

    }
    else{
        arr.sort(function(a,b){return b - a})
        for(let t in players){
            if(players[t] == arr[0]){
                str = str + t + ','
            }
        }
        output.innerText = `Winners are ${str}`     
    }
}