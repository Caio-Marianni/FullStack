import { Produto } from "@/core"

export default function ProdutoItem(props: ProdutoItemProps) {
  const { produto } = props
  return <div>{produto.nome}</div>
}

export interface ProdutoItemProps {
  produto: Produto
}