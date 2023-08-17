function Funcionario(nome, cargo, departamento, salario){
    this.nome = nome;
    this.cargo = cargo;
    this.departamento = departamento;
    let _salario = salario;

    this.retornaSalario = function(){
        return _salario
    }

    this.conteudoFinal = function(){
        console.log("Ola ", this.nome, " seu salario atual é", this.retornaSalario(), " seu cargo: ", this.cargo, " e seu departamento: ", this.departamento)
    }
}

function Recrutador(nome){
    Funcionario.call(this, nome, "Recrutador", "RH", "R$"+ 3000)
}

function Marketing(nome){
    Funcionario.call(this, nome, "Analista de Marketing", "Marketing & Comunicacao", "R$"+ 2500)
}


const novoAnalistaRecrutamento = new Recrutador("Gabrielly");

const novoAnalistaMarketing = new Marketing("Pedro")

console.log(novoAnalistaRecrutamento.conteudoFinal());
console.log(novoAnalistaMarketing.conteudoFinal());