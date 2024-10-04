// Melhor escolha seria uma Classe, por motivos de arq. limpa e etc.
export default interface Especificacoes {
  destaques: string
  [chave: string]: string | number | boolean
}