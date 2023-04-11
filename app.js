// Armazenando o que foi digitado
const itemInput = document.querySelector('#texto');

const botaoAdd = document.querySelector('.btn');
/*botaoAdd.addEventListener('click', function(){
    const lista = document.querySelector('.itens');
    lista.innerHTML = `<li>${itemInput}</li>`
    return item;
}); */

const lista = document.querySelector('.lista');

const validateInput = () => {
    return itemInput.value.trim().length > 0;
}

const handleAdd = () => {
    const inputIsValid = validateInput();

    console.log(inputIsValid);

    if (!inputIsValid){
        return itemInput.classList.add('error');
    }


    const listaItens = document.createElement('div');
    listaItens.classList.add('item');

    const itemContent = document.createElement('p');
    itemContent.innerHTML = itemInput.value;
    
    const divBtns = document.createElement('div');
    divBtns.classList.add('btns');

    const deleteIcon = document.createElement('button');
    deleteIcon.classList.add('btn_2');

    const alterIcon = document.createElement('button');
    alterIcon.classList.add('btn_3');

    /*const atualizaStorage = () => {
        const itens = listaItens.childNodes;
        
        const localStorage = [...itens].map((itens) => {
            const conteudo = itens.firstChild;
            const isEdited = conteudo.classList.contains('edited');

            return {descricao: conteudo.innerText, isEdited};
        });

        localStorage.setItem('itens', JSON.stringify(localStorage));
    }

    atualizaStorage();*/

    alterIcon.addEventListener('click', () => {
        const itens = listaItens.childNodes;
        for(const item of itens){
            if(item.isSameNode(itemContent)){
                const newItem = window.prompt('Qual a alteração?');
                item.innerHTML = newItem;
            }
        }
        //atualizaStorage();
    });

    deleteIcon.addEventListener('click', () => {
        const itens = listaItens.childNodes;
        for(const item of itens){
            if(item.isSameNode(itemContent)){
                listaItens.remove();
            }
        }
        //atualizaStorage();
    });

    

    listaItens.appendChild(itemContent);
    listaItens.appendChild(divBtns);
    divBtns.appendChild(deleteIcon);
    divBtns.appendChild(alterIcon);
    lista.appendChild(listaItens);
    
    itemInput.value = "";
}



const inputChange = () => {
    const inputIsValid = validateInput();
    
    if(inputIsValid){
        return itemInput.classList.remove('error');
    }
}

// Criando um Handler de evento do botão de adicionar
botaoAdd.addEventListener('click', () => handleAdd());

itemInput.addEventListener('change', () => inputChange);


