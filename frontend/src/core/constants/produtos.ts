import { Produto } from "../produto";


const produtos: Produto[] = [
  {
    // Produto
    id: 1,
    nome: 'Notebook Acer Nitro 5',
    descricao: 'sou apenas um mero notebook',
    marca: 'Acer',
    modelo: 'AN515-54-58CL',
    imagem: '',
    nota: 4.5,
    videoReview: '',
    tags: ['Baixou', 'Outras Tags'],
    // Extends -> Precificavel
    precoBase: 1299.99,
    precoPromocional: 999.99,
    precoMenor: 799.99,
    precoMaior: 1599.99,
    precoMedio: 999.99,
    // """Extends""" -> Especificações
    especificacoes: {
      destaques: 'NVIDIA GeForce',
      Processador: 'Intel Core i5',
      Tela: '15.6 polegadas Full HD',
      Peso: '2.5 Kg'
      // deve se colocar "destaques" e quantas
      // informaçoes quiser depois
    }
  }
]

export default produtos