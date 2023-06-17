
    let screen = document.querySelector('.screen');
    let button = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    

    button.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value += value;
            console.log(screen.value)
        })
    });

    equal.addEventListener('click',function(){
        if(screen.value === ''){
            screen.value = "";
        }
        else{
            let answer = eval(screen.value);
            screen.value = answer;
            document.body.style.backgroundImage = url("https://giphy.com/gifs/Trakto--background-mograph-trakto-7AtHoQ9XWbpwLRxs0t");
            document.querySelector('.buttons').style.background = '#f0f8ff55';
            document.getElementById('title').style = 'color:#f3e6d0';
            document.getElementById('title').style = 'font-size:';
        }
    })

    clear.addEventListener('click',function(){
        screen.value = "";
    })
    