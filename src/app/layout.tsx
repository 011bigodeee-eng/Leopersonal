import type { Metadata } from 'next';
import { site } from '@/config/site';
import './globals.css';
export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title: 'Leo Personal | Seu próximo nível começa aqui',
  description: 'Conheça a proposta de treinamento, metodologia e acompanhamento do Leo Personal. Seu próximo passo começa com uma conversa.',
  openGraph: { title: 'Leo Personal | Seu próximo nível', description: 'Disciplina. Movimento. Evolução.', locale: 'pt_BR', type: 'website', images: [{ url: '/training.jpg', width: 1400, height: 1000, alt: 'Academia — imagem ilustrativa' }] },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
