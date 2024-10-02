import ProdutoItem from "@/components/produto/ProdutoItem";
import { produtos } from "@/core";

export default function Home() {
  return (
    <div>
      <h1>Chamada de um elemento</h1>
      {/* Chamada individual para cada elemento */}
      <ProdutoItem produto={produtos[0]} /> 
      <h1>Chamada de todos os elementos</h1>
      {/* Chamada de todos os elementos */}
      {produtos.map((produto) => (<ProdutoItem key={produto.id} produto={produto} />
      ))}
    </div>
  );
}
