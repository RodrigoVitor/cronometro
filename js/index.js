let hour = "00"
let minutes = "00" 
let second = "00"
let run = document.getElementById('run')
let tmp;

//start
function start()
{
    
     tmp = setInterval(() => {
        second++ 
        //verificar se o segundo é menor que 10
        if(second < 10)
        {
            second = "0" + second 
        }
        //mostrar o minuto quando segundo atingir 1 minuto
        if(second > 60)
        {
            second = "00"
            minutes++
            //se minutes < 10
            if(minutes < 10)
            {
                minutes = "0" + minutes
            }
        }
        //mostrar a hora quando o minuto chegar em 60
        if(minutes > 60)
        {
            second = "00"
            minutes = "50"
            hour++
            //verficar se hora é menor que 10
            if(hour < 10)
            {
                hour = "0" + hour
            }
        }
        //mostrar funcionando
        run.innerHTML = "<span>" + hour + "</span> <span>" + minutes + "</span> <span>" + second + "</span>" 

    },1000)

    
}

//pause
function pause()
{
    clearInterval(tmp)
}

//reset
function reset()
{
    //parar função
    clearInterval(tmp)
    //zerar tudo
    hour = "00"
    minutes = "00"
    second = "00"
    //mostrar zerado
    run.innerHTML = "<span>" + hour + "</span> <span>" + minutes + "</span> <span>" + second + "</span>"
}

// mostrar o tempo sem nenhuma função
run.innerHTML = "<span>" + hour + "</span> <span>" + minutes + "</span> <span>" + second + "</span>"



