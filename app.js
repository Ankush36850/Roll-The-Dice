let btns = document.querySelectorAll('button')
let output = document.querySelector('.result')
let players = {}

for(let t of btns){
    t.addEventListener("click", rollDice)
}

let result = 0
let arr = []
let str = ''
function rollDice(event){
    this.disabled = true;
    if(event.target.innerText != 'End Button'){
        result = parseInt((Math.random()*6)+1) 
        event.target.nextElementSibling.innerText = `Value you got : ${result}`
        arr.push(result)
        let playerName = document.querySelector('#'+ event.srcElement.className).value
        players[playerName] = result

    }
    else{
        arr.sort(function(a,b){return b - a})
        let count = 0
        for(let t in players){
            if(players[t] == arr[0]){
                str = str + t + ','
                count++
            }
        }
        if(count > 1){
            output.innerText = `Winners are ${str} as they score ${arr[0]}`
        }
        else{
            output.innerText = `Winner is ${str} as they score ${arr[0]}`
        }             
    }
}