$(function(){
    let storage = (localStorage.produtos) ? JSON.parse(localStorage.produtos) : [];

    //evento de cadastro
    $(document).on('submit', '#cadastraProduto', function(){
        console.log("entrou");
        //pegar valores dos campos
        let title = $('#title').val()
        let description = $('#description').val()
        let img = $('#img').val()
        let price = $('#price').val()

        //criar objeto para gravar
        let item = {
        //  propriedae : variavel
            title : title,
            description : description,
            img : img,
            price : price
        }

        //adicioar o objeto do item no array de produtos
        storage.push(item)

        //transformar os dados em string json e salvar no storage
        localStorage.setItem("produtos", JSON.stringify(storage))

        loadProdutos()
        return false;
    })


    let loadProdutos = () => {
        let estrutura = '';
        let lista = (localStorage.produtos) ? JSON.parse(localStorage.produtos) : []
        for(pos in lista){
            estrutura += `
            <tr>
                <td>${lista[pos].title}</td>
                <td>${lista[pos].price}</td>
                <td>${lista[pos].img}</td>
                <td>${lista[pos].description}</td>
                <td>
                    <a href="#" class="btn btn-info editaItem" rel="${pos}">E</a>
                    <a href="#" class="btn btn-danger deletaItem" rel="${pos}">D</a>
                </td>
            </tr>
            `
        }
        //injetar as linhas na tabela
        $('#loadProdutos').html(estrutura)
    }

    loadProdutos()

    //deletar um item
    $(document).on('click', '.deletaItem', function(){
        
        let itemId = $(this).attr('rel')
        console.log(itemId);
        storage.splice(itemId, 1)
        localStorage.setItem("produtos", JSON.stringify(storage))
        loadProdutos()

        return false;
    })
})