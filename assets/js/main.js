const botaoMenu = document.querySelector('.botao_cabecalho');
const menu = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
});


