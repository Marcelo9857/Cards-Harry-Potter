window.onload = init;
const url = "https://hp-api.onrender.com/api/character/";
function init()
{
    carregarDados();
}

async function carregarDados()
{
    const parametros = new URLSearchParams(window.location.search);
    const idItem = parametros.get('id');
    let resposta =  await fetch(`${url}${idItem}`);
    let dados = await resposta.json();
    dados.forEach(elementos => {
        let dados = document.getElementById('dados');
        let containerFoto = document.getElementById('foto');
        let imagem = document.createElement('div');
        imagem.classList.add('imagem');
        if (elementos.image != "")
        {
        imagem.style.background = `url(${elementos.image}) no-repeat`;
        }
        else
        {
        imagem.style.background = 'url(./placeholder2.png) no-repeat';
        }
        imagem.style.backgroundSize = 'cover';
        let titulo = document.getElementById('titulo');
        titulo.innerHTML = elementos.name;
        if (elementos.house != "")
        {
            dados.innerHTML += `Casa de Hogwarts: ${elementos.house}<br>`;
        }
        if (elementos.species != "")
        {
            dados.innerHTML += `Espécie: ${elementos.species}<br>`;
        }
        if (elementos.gender != "")
        {
            dados.innerHTML += `Gênero: ${elementos.gender}<br>`;
        }
        if (elementos.dateOfBirth != null)
        {
            dados.innerHTML += `Data de Nascimento: ${elementos.dateOfBirth}<br>`;
        }
        if (elementos.wizard)
        {
            dados.innerHTML += `É mago: sim<br>`;
        }
        else
        {
            dados.innerHTML += `Não é um mago<br>`;
        }
        if (elementos.ancestry != "")
        {
            dados.innerHTML += `Ancestral: ${elementos.ancestry}<br>`;
        }
        if (elementos.wand.wood != "")
        {
            dados.innerHTML += `Varinha mágica:<br> Composição: ${elementos.wand.wood}`;
        }
        if (elementos.wand.core != "")
        {
            dados.innerHTML += `, Núcleo: ${elementos.wand.core}`;
        }
        if (elementos.wand.length != null)
        {
            dados.innerHTML += `, Comprimento: ${elementos.wand.length}"`;
        }
        dados.innerHTML += "<br>";
        if (elementos.alive != "")
        {
            if (elementos.alive)
            {
                dados.innerHTML += `Está vivo(a) <br>`;
            }
            else
            {
                dados.innerHTML += 'Não está vivo<br>';
            }
        }
        if (elementos.hogwartsStudent)
        {
            dados.innerHTML += `É estudante de Hogwart <br>`;
        }
        if (elementos.hogwartsStudent == false)
        {
            dados.innerHTML += 'Não é estudante de Hogwart<br>';
        }
        if (elementos.hogwartsStaff)
        {
            dados.innerHTML += `É staff de Hogwart <br>`;
        }
        if (elementos.hogwartsStaff == false)
        {
            dados.innerHTML += 'Não é staff de Hogwart<br>';
        }
        if (elementos.actor != "")
        {
            dados.innerHTML += `Ator/Atriz: ${elementos.actor}`;
        }
        dados.innerHTML += '<br><br>';
        let voltar = document.createElement('a');
        voltar.href = "index.html";
        voltar.classList.add('voltar');
        voltar.innerHTML = 'Voltar para página principal';
        dados.appendChild(voltar);
        containerFoto.appendChild(imagem);
    });
}