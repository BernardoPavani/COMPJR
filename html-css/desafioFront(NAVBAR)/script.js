class Produto {
  constructor(){
    this.id = 1;
    this.nameproduto= [];
    this.valor = 0;
  }

    salvar(){
      let produto = this.lerDados();

      if(this.validaCampo(produto)){
        this.adicionar(produto);
      }

      this.listaTabela();
      this.cancelar();
      
    }

    listaTabela(){
      let tbody = document.getElementById('tbody');

      tbody.innerHTML = '';

      for(let i = 0; i < this.nameproduto.length; i++){
        let tr = tbody.insertRow();

        let td_id = tr.insertCell();
        let td_sugestão = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_acoes = tr.insertCell();

        td_id.innerText = this.nameproduto[i].id;
        td_sugestão.innerText = this.nameproduto[i].sugestão;
        td_nome.innerText = this.nameproduto[i].seunome;

        td_id.classList.add('center');
        td_acoes.classList.add('center1');

        let imgEdit = document.createElement('img');
        imgEdit.src = 'image/nota.png';

        let imgDelete = document.createElement('img');
        imgDelete.src = 'image/lixo.png';
        imgDelete.setAttribute("onclick","produto.deletar("+ this.nameproduto[i].id +")")

        td_acoes.appendChild(imgEdit);
        td_acoes.appendChild(imgDelete);
      }
    }

    adicionar(produto){
      this.nameproduto.push(produto);
      this.id++;
    }

    lerDados() {
      let produto = {}

        produto.id = this.id;
        produto.sugestão = document.getElementById('sugestão').value;
        produto.seunome = document.getElementById('seunome').value;

      return produto;
    }

    validaCampo(produto) {
      let msg = '';

      if(produto.sugestão == '') {
        msg += '- Informe sua sugestão \n';
      }

      if(produto.seunome == '') {
        msg += '- Informe seu nome \n';
      }

      if(msg != ''){
          alert(msg);
          return false;
      }

      return true;

    }

    editar(){

    }

    cancelar(){
      document.getElementById('sugestão').value = '';
      document.getElementById('seunome').value = '';
    }

    deletar(id) {

      let tbody = document.getElementById('tbody');

      for(let i = this.nameproduto.length -1; i >= 0; i--){
        if(this.nameproduto[i].id == id){
          this.nameproduto.splice(i, 1)
          tbody.deleteRow(i);
        }
      }
    }
}

var produto = new Produto();

















function limparPlaceholder(elemento) {
    elemento.placeholder = '';
  }
  
  function restaurarPlaceholder(elemento) {
    if (!elemento.value) {
      elemento.placeholder = 'pesquisar';
    }
  }

  function restaurarPlaceholder1(elemento) {
    if (!elemento.value) {
      elemento.placeholder = 'escreva aqui sua sugestão';
    }
  }

  function restaurarPlaceholder2(elemento) {
    if (!elemento.value) {
      elemento.placeholder = 'escreva aqui seu nome';
    }
  }