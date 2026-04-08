//Missão 1: Receção do Cliente (Manipulação Estática e Date)
const saudacao = document.querySelector("#saudacao-cafeteria");
const hora = new Date().getHours();
if (hora < 12){
    alert("Bom dia! O primeiro café é por nossa conta!")
}

if(hora >= 12 && hora < 18){
    alert("Boa tarde! Precisa de energia para programar?")
}  

if (hora > 18){
    alert("Boa noite! Um descafeinado para não perder o sono?")
}

//Missão 2: Destaque do Barista (Eventos de Rato e ClassList)
const cards= document.querySelectorAll("#banner-especialidade")

cards.addEventListener('mouseover', () => {
cards.style.backgroundColor = "#854442";
});
cards.addEventListener('mouseout', () => {
cards.style.backgroundColor = "#ffffff";
});


//Missão 3: Calculadora de Faturação (Evento Input e Value)
const qtd = document.querySelector('#qtd-cafes');
const totalTxt = document.querySelector('#total-pagar');

qtd.addEventListener('input', () => {

const valor = Number(qtd.value) * 12.00;

totalTxt.textContent = `Total: R$ ${valor.toFixed(2)}`
;

});


//Missão 4: Fazer o Pedido (Click, Validação com Alert e Concatenação)
const botoesPedido = document.querySelectorAll(".btn-pedir")
const texto = document.querySelectorAll(".nome-cafe")

botoesPedido.forEach((botao) => {

    botao.addEventListener("click", (event) => {

        event.preventDefault();

        const nomePrato = botao.parentElement.querySelector("h3").textContent;
        window.alert(
            `Por favor, digite o nome de um café!`,
        );

        botao.textContent = "✓ Pedido Enviado";

        botao.style.backgroundColor = "#27ae60"; 

        botao.disabled = true;
    });
});
