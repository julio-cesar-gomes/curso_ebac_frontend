const alunos = [
    { nome: "Alice", nota: 7 },
    { nome: "Bob", nota: 5 },
    { nome: "Carlos", nota: 8 },
    { nome: "David", nota: 6 },
    { nome: "Eva", nota: 9 },
];

function alunosAprovados(aprovados) {
    return aprovados.filter(aluno => aluno.nota >= 6);
}

// Chamando a função para obter os alunos aprovados
const alunosAprovadosArray = alunosAprovados(alunos);

console.log(alunosAprovadosArray);