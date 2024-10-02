import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react"

export interface NotaReviewProps {
  nota: number
  tamnaho?: number
}

export default function NotaReview(props:NotaReviewProps) {
  function notaParaEstrelas(nota: number) {
    const estrelas = []
    for (let i = 1; i <= 5; i++) {
      if (nota >= i) {
        estrelas.push(<IconStarFilled size={props.tamnaho} />)
      } else if (nota >= i - 0.5) {
        estrelas.push(<IconStarHalfFilled size={props.tamnaho} />)
      } else {
        estrelas.push(<IconStar size={props.tamnaho} />)
      }
    }
    return estrelas
  }
  return <div className="flex gap-0.5 text-emerald-400">{notaParaEstrelas(props.nota)}</div>}