let hour = "00"
let minutes = "00"
let second = "00"
let run = document.getElementById('run')


run.innerHTML = "<span>" + hour + "</span> <span>" + minutes + "</span> <span>" + second + "</span>"
//start
function start()
{
    
    setInterval(() => {
        second++ 
        //verificar se o segundo é menor que 10
        if(second < 10)
        {
            second = "0" + second 
        }
        //mostrar o minuto quando segundo atingir 1 minuto
        if(second > 60)
        {
            
        }
        //mostrar funcionando
        run.innerHTML = "<span>" + hour + "</span> <span>" + minutes + "</span> <span>" + second + "</span>" 

    },100)

    
}

//pause
function pause()
{

}

//reset
function reset()
{

}



