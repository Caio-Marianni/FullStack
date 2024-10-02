import ProdutoItem from "@/components/produto/ProdutoItem";
import { produtos } from "@/core";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1>Chamada de todos os elementos</h1>
      {/* Chamada de todos os elementos */}
      {produtos.map((produto) => (<ProdutoItem key={produto.id} produto={produto} />
      ))}
    </div>
  );
}
