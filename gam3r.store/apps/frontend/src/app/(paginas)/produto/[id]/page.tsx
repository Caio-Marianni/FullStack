import BannerCompra from '@/components/produto/BannerCompra'
import InformacoesProduto from '@/components/produto/InformacoesProduto'
import ProdutoNaoEncontrado from '@/components/produto/ProdutoNaoEncontrado'
import TituloProduto from '@/components/produto/TituloProduto'
import { produtos } from '@gstore/core'

// Definição do tipo para `props`
type PaginaProdutoProps = {
    params: {
      id: string; // Tipo da propriedade `id` dentro de `params`
    };
  };

export default function PaginaProduto({ params }: PaginaProdutoProps) {
    const id = +params.id
    const produto = produtos.find((produto) => produto.id === id)

    return produto ? (
        <div className="flex flex-col gap-20 container py-10">
            <div className="flex flex-col gap-10">
                <TituloProduto produto={produto} />
                <InformacoesProduto produto={produto} />
                <BannerCompra produto={produto} />
            </div>
        </div>
    ) : (
        <ProdutoNaoEncontrado />
    )
}
