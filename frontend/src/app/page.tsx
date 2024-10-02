import Rodape from "@/components/template/Rodape";
import ProdutoItem from "../components/produto/ProdutoItem";
import { produtos } from "@/core";
import Pagina from "@/components/template/Pagina";

export default function Home() {
  return (
    <Pagina>
      <div className="container grid grid-cols-4 gap-4 py-10">
        {produtos.map((produto) => (
          <ProdutoItem key={produto.id} produto={produto} />
        ))}
      </div>
    </Pagina>
  );
}
