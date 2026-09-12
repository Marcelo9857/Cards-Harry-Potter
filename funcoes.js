window.onload = init;
const url = "https://hp-api.onrender.com/api/characters";
function init()
{
    gerarCards();
}

async function gerarCards()
{
    let resposta = await fetch(url);
    let elementos = await resposta.json();
    const container = document.getElementById('container');
    for (let i=0; i<elementos.length; i++)
    {
        let card = document.createElement('a');
        card.classList.add('cards');
        card.href = `informacoes.html?id=${elementos[i].id}`
        let imagem = document.createElement('div');
        imagem.classList.add('fotos');
        if (elementos[i].image != "")
        {
        imagem.style.background = `url(${elementos[i].image}) no-repeat`;
        }
        else
        {
        imagem.style.background = 'url(./placeholder.png) no-repeat';
        }
        imagem.style.backgroundSize = 'cover';
        card.appendChild(imagem);
        card.innerHTML += `Nome: ${elementos[i].name}<br>`;
        if (elementos[i].house != "")
        {
            card.innerHTML += `Casa de Hogwarts: ${elementos[i].house}<br>`;
        }
        if (elementos[i].actor != "")
        {
            card.innerHTML += `Ator/Atriz: ${elementos[i].actor}`;
        }
        container.appendChild(card);
    }
}
