const residentCount = document.getElementById('count');
const residentGrafc = document.getElementById('grafico')

let count = []; 

for (let i = 0; i <= 12; i ++){
    count[i] = 0;
}

let numetoAleatorio1;
let numetoAleatorio2;

let rollOfiDice;

const criarDado = function (){
    for(let i = 0; i < 1000; i++ ){ 
        
        numetoAleatorio1 = Math.floor(Math.random() * 6 + 1);
        numetoAleatorio2 = Math.floor(Math.random() * 6 + 1);
        rollOfiDice = numetoAleatorio1 + numetoAleatorio2;
        count[rollOfiDice] = count[rollOfiDice] + 1;
    }

    const createColunCount = document.createElement('ol');
    createColunCount.setAttribute('start', 2);

    for (let i = 2; i <= 12; i++){
        const createLinhaCount = document.createElement('li');
        createLinhaCount.innerText = (count[i]);
        createColunCount.appendChild (createLinhaCount);
        
    }

    residentCount.appendChild (createColunCount);
    createGrafc();
}

const createGrafc = function(){
    for(let i = 2; i <= 12; i++){
    const createLinhaGrafc = document.createElement('div');
    createLinhaGrafc.innerText = (i);
    createLinhaGrafc.style.textAlign = 'center';
    createLinhaGrafc.style.paddingTop = '6px'; 
    createLinhaGrafc.style.height = '25px';
    createLinhaGrafc.style.width = `${count[i]}px`;      
    createLinhaGrafc.style.backgroundColor = '#818181';
    createLinhaGrafc.style.marginBottom = '20px';
    residentGrafc.appendChild (createLinhaGrafc);

    }
}
criarDado();
