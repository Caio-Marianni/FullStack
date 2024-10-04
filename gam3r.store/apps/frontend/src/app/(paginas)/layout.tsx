import Pagina from '@/components/template/Pagina'

// Definição do tipo para `props`
type LayoutProps = {
    params: {
      children: string; // Tipo da propriedade `id` dentro de `params`
    };
  };

export default function Layout({params}: LayoutProps) {
    return <Pagina>{params.children}</Pagina>
}
