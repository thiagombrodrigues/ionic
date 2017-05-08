export class Registro {

    public chave: string;
    public nome: string;
    public idade: number;
    public sexo: string;

    constructor(
        nome: string,
        idade: number,
        sexo: string
    ) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
}
