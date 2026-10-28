// Preencha apenas com dados confirmados e imagens de uso autorizado.
export const site = {
  name: 'LEO', surname: 'PERSONAL',
  reference: 'https://pages.mfitpersonal.com.br/index?acao=page&tipo=1&page=118848&isCheckout=false',
  whatsapp: '', // Número internacional: somente dígitos.
  instagram: '', // URL completa do perfil confirmado.
  checkout: '', // URL de contratação confirmada.
  url: process.env.NEXT_PUBLIC_SITE_URL || '',
  message: 'Olá! Quero conhecer seu acompanhamento e os planos disponíveis.',
  about: 'Este espaço está reservado para a trajetória, formação e especializações do profissional. As informações serão publicadas após confirmação.',
  heroImage: '/training.jpg',
  plans: [
    { name: 'Essencial', period: 'Plano a confirmar', description: 'Estrutura de apresentação. Benefícios e condições aguardam confirmação.', features: ['Modalidade a confirmar', 'Duração a confirmar', 'Acompanhamento a confirmar'] },
    { name: 'Evolução', period: 'Plano a confirmar', description: 'Estrutura de apresentação. Benefícios e condições aguardam confirmação.', features: ['Modalidade a confirmar', 'Duração a confirmar', 'Acompanhamento a confirmar'] },
    { name: 'Performance', period: 'Plano a confirmar', description: 'Estrutura de apresentação. Benefícios e condições aguardam confirmação.', features: ['Modalidade a confirmar', 'Duração a confirmar', 'Acompanhamento a confirmar'] },
  ],
};
export const navigation = [['inicio','Início'],['sobre','Sobre'],['metodologia','Método'],['servicos','Serviços'],['planos','Planos'],['resultados','Resultados'],['duvidas','Dúvidas'],['contato','Contato']];
