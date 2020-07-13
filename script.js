//Função do relógio

const deg = 6;

const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const seg = document.querySelector("#seg");

setInterval(() => {
    let dia = new Date();
    let hora = dia.getHours() * 30;
    let minutos = dia.getMinutes() * deg;
    let segundos = dia.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hora)+(minutos/12)}deg)`;
    min.style.transform = `rotateZ(${minutos}deg)`;
    seg.style.transform = `rotateZ(${segundos}deg)`;
    
});