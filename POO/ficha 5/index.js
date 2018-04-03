//Exercicio 1 
//Clasee para representar um retangulo
class Retangulo {
    constructor(largura = 1, altura = 1){
        this.largura = largura
        this.altura = altura
        this._cor = "branco"
    }
    get largura(){
        return this._largura
    }
    set largura(novoValor){
        this._largura = novoValor
    }
    get altura(){
        return this._altura
    }
    set altura(novoValor){
        this._altura = novoValor
    }
    get cor(){
        return this._cor
    }
    getArea() {
        return this.largura * this.altura
    }
    getPerimetro() {
        return 2 * this.largura + this.altura
    }
}
let meuRet = new Retangulo(2,3)
console.log(meuRet.largura)
meuRet.largura = 5
console.log(meuRet.largura)
console.log(meuRet.getArea())
console.log(meuRet.getPerimetro())
let meuRet2 = new Retangulo()
console.log(meuRet2.getArea())

//Exercicio 5
class Pais {
    constructor(nome, area, populacao) {
        this.nome = nome
        this.area = area
        this.populacao = populacao
    }
    //propriedade nome
    get nome() {
        return this._nome
    }
    set nome(novoNome) {
        this._nome = novoNome
    }
    //propriedade area
    get area() {
        return this._area
    }
    set area(novaArea) {
        this._area = novaArea
    }
    // Método que devolve o nome do pais com a maior area
    static getNomePaisMaiorArea() {
        let maior = 0
        let nome = ""
        for (let i = 0; i < paises.length; i++){
            if (paises[i].area >= maior){
                maior = paises[i].area
                nome = paises[i].nome
            }
        }
        return nome
    }
    static getNomePaisMaiorPopulacao() {
        let maior = 0
        let nome = ""
        for (let i = 0; i < paises.length; i++){
            if (paises[i].populacao >= maior){
                maior = paises[i].populacao
                nome = paises[i].nome
            }
        }
        return nome
    }
    static getNomePaisMaiorDensidadePopulacional() {
        let maior = 0
        let nome = ""
        let densidadePopulacional = 0
        for (let i = 0; i < paises.length; i++){
            densidadePopulacional = paises[i].populacao / paises[i].area
            if (densidadePopulacional >= maior){
                maior = densidadePopulacional
                nome = paises[i].nome
            }
        }
        return nome
    }
    static sortNomePais() {
        let nomesPaises = []
        nomesPaises.push(meuPais1.nome, meuPais2.nome, meuPais3.nome, meuPais4.nome, meuPais5.nome )
        return nomesPaises.sort()
    }
 }

 let paises = []
 let meuPais1 = new Pais ("Portugal", 10000000, 325654)
 let meuPais2 = new Pais ("Espanha", 30000000, 176895564)
 let meuPais3 = new Pais ("Itália", 40000000, 1765124)
 let meuPais4 = new Pais ("Egito", 578973, 1765478)
 let meuPais5 = new Pais ("Timor", 667567, 17654456)
 paises.push(meuPais1, meuPais2, meuPais3, meuPais4, meuPais5)
 console.log(meuPais1.nome)
 console.log(Pais.getNomePaisMaiorArea())
 console.log(Pais.getNomePaisMaiorPopulacao())
 console.log(Pais.getNomePaisMaiorDensidadePopulacional())
 console.log(Pais.sortNomePais())
 

 
