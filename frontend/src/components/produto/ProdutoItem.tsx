"use client";
// Pois estou usando o onClick,
// funcionalidade do browser e nao do servidor
import { Moeda, Produto } from "@/core";
import Link from "next/link";
import Image from "next/image";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import NotaReview from "../shared/NotaReview";

export default function ProdutoItem(props: ProdutoItemProps) {
  const { produto } = props;
  return (
    <Link
      href={`/produto/${props.produto.id}`}
      className="flex flex-col p-2 bg-violet-dark border border-gray-700"
    >
      <div className="w-96 h-48 relative">
        {/* Nota */}
        <div className="absolute flex justify-end top-2.5 right-2.5">
          <NotaReview nota={props.produto.nota} />
        </div>
        {/* Cover */}
        <Image
          src={produto.imagem}
          fill
          className="object-contain"
          alt="Imagem do Produto"
        />
      </div>
      {/* Info */}
      <div className="flex-1 flex flex-col gap-3 border-t border-white/10">
        <span className="text-sm text-gray-400 line-through">
          {produto.nome}
        </span>

        <div className="self-start text-sm border-b border-dashed">
          {produto.especificacoes.destaques}
        </div>

        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">
            de {Moeda.formatar(props.produto.precoBase)}
          </span>
          <span className="text-xl font-semibold text-emerald-400">
            de {Moeda.formatar(props.produto.precoPromocional)}
          </span>
          {/* <span className="text-xs text-gray-400">
            até {parcelamento.qtdParcelas}x de{' '}
            {Moeda.formatar(parcelamento.valorParcela)}
          </span> */}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="flex justify-center items-center gap-2 h-8 bg-violet-700 hover:border-2 border-emerald-500 rounded-sm"
        >
          <IconShoppingCartPlus size={20} />
          Adicionar
        </button>
      </div>
    </Link>
  );
}

export interface ProdutoItemProps {
  produto: Produto;
}
