let form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Adicionando o cliente na tabela //

    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;

    let dados = {
        nome,
        cpf,
        email,
        telefone
    };

    // Validando CPF e Telefone //

    if (dados.cpf.length !== 11) {
        alert('CPF inválido! Por favor, digite um CPF válido!');
    } else if (dados.telefone.length !== 11) {
        alert('Telefone inválido! Por favor, digite um telefone válido!');
    } else {
        let valoresDados = Object.values(dados);

        let tbody = document.getElementById('tabela-clientes');
        let tr = document.createElement('tr');
        tbody.append(tr);

        valoresDados.forEach(valor => {
            let td = document.createElement('td');
            tr.append(td);
            td.append(valor);
        });

        // Adicionando o cliente no Local Storage //

        let clientes = JSON.parse(localStorage.getItem('cliente')) ?? [];

        clientes.push(dados);

        let clientesConvertidos = JSON.stringify(clientes);

        localStorage.setItem('cliente', clientesConvertidos);

        alert('Cliente cadastrado com sucesso!', 'success');
    }
});