//Crie uma classe chamada Filme com os atributos nome, anoDeLancamento e diretor. Fora do escopo dessa classe, instancie ela e preencha os campos acessando seus atributos por meio do ponto (.).

class Filme {
    nome;
    anoDeLancamento;
    diretor;
}

const filmeNovo = new Filme();
    filmeNovo.nome = "Tropa de Elite";
    filmeNovo.anoDeLancamento = 2007;
    filmeNovo.diretor = "José Padilha";

console.log(filmeNovo);