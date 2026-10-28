'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ArrowRight, Check, ChevronDown, Menu, X, MessageCircle, Dumbbell, Monitor, MoveUpRight, Plus } from 'lucide-react';
import { navigation, site } from '@/config/site';

const steps = [ ['Avaliar.','Entender seu ponto de partida e seus objetivos.'], ['Planejar.','Construir uma direção para a sua rotina.'], ['Executar.','Transformar planejamento em movimento.'], ['Acompanhar.','Observar o processo e ajustar a estratégia.'], ['Evoluir.','Seguir em frente, um treino de cada vez.'] ];
const faqs = ['Como funciona a consultoria online?', 'Preciso ter experiência com academia?', 'Como recebo meus treinos?', 'Como funciona o acompanhamento?', 'Posso contratar de qualquer cidade?', 'Quais são as formas de pagamento?'];
const answers = ['O formato da consultoria online será informado após a confirmação dos serviços oferecidos.', 'Os critérios de atendimento e a avaliação inicial devem ser confirmados diretamente com o profissional.', 'A plataforma e a forma de entrega dos treinos ainda serão confirmadas.', 'A frequência de contato e dos ajustes depende do plano. As condições serão publicadas após confirmação.', 'A abrangência do atendimento online e a localização do presencial aguardam confirmação.', 'Os valores, as formas de pagamento e as condições de contratação ainda serão informados.'];

export default function Home() {
  const reduced = useReducedMotion();
  const [intro, setIntro] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('inicio');
  const [notice, setNotice] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && !sessionStorage.getItem('leo-intro')) {
      setIntro(true); sessionStorage.setItem('leo-intro','1');
      const timer = setTimeout(() => setIntro(false), 2100); return () => clearTimeout(timer);
    }
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); }, { rootMargin: '-15% 0px -65% 0px' });
    document.querySelectorAll('main section[id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(''), 7000); return () => clearTimeout(timer);
  }, [notice]);
  useEffect(() => {
    if (!menu) return;
    const handler = (e: KeyboardEvent) => { if(e.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown',handler); return () => window.removeEventListener('keydown',handler);
  }, [menu]);
  const contact = (kind: 'whatsapp' | 'checkout' | 'instagram' = 'whatsapp') => {
    const url = kind === 'whatsapp' && /^\d{10,15}$/.test(site.whatsapp) ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.message)}` : kind !== 'whatsapp' ? site[kind] : '';
    if (url && /^https:\/\//.test(url)) window.open(url, '_blank', 'noopener,noreferrer');
    else setNotice('Canal em configuração. Os contatos e links oficiais serão disponibilizados após confirmação pelo profissional.');
  };
  const reveal = { initial: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .12 }, transition: { duration: .65 } };
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <AnimatePresence>{intro && <motion.div className="intro" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .4 }}><motion.div initial={{ opacity: 0, letterSpacing: '0.3em' }} animate={{ opacity: 1, letterSpacing: '0em' }} transition={{ duration: 1 }} className="intro-logo">LEO<span>®</span><small>PERSONAL TRAINING</small></motion.div><button onClick={() => setIntro(false)}>Pular introdução <ArrowRight size={16}/></button></motion.div>}</AnimatePresence>
    <header className="header"><a href="#inicio" className="brand" aria-label="Leo Personal — Início">LEO<span>®</span><small>PERSONAL</small></a><nav className="desktop-nav" aria-label="Principal">{navigation.map(([id,label]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>)}</nav><a className="header-cta" href="#planos">COMEÇAR AGORA <ArrowUpRight size={15}/></a><button className="menu-toggle" aria-label={menu ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menu} aria-controls="mobile-nav" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></header>
    {menu && <nav id="mobile-nav" className="mobile-nav" aria-label="Menu móvel">{navigation.map(([id,label],i) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}><span>0{i+1}</span>{label}<ArrowUpRight size={20}/></a>)}</nav>}
    <main id="conteudo">
      <section id="inicio" className="hero">
        <div className="hero-photo"><Image src={site.heroImage} alt="Execução de supino em academia. Imagem ilustrativa, não representa o profissional." fill priority sizes="100vw" className="hero-image"/></div>
        <div className="hero-grid" aria-hidden="true"/>
        <div className="hero-content"><motion.div {...reveal}><div className="eyebrow"><span className="dot"/> DISCIPLINA ENCONTRA DIREÇÃO</div><h1>SEU PRÓXIMO<br/>NÍVEL <span>COMEÇA</span><br/><em>AQUI.</em></h1><p>Treinamento inteligente. Acompanhamento próximo.<br className="desktop-break"/> Uma estratégia construída para a sua evolução.</p><div className="hero-actions"><a href="#planos" className="button primary">CONHECER OS PLANOS <ArrowUpRight size={19}/></a><button className="button text-button" onClick={() => contact()}>FALAR COM O PERSONAL <ArrowUpRight size={18}/></button></div></motion.div></div>
        <div className="hero-side">FOCO NO PROCESSO. RESPEITO À SUA JORNADA.</div><div className="hero-bottom"><a href="#sobre"><span className="scroll-indicator">↓</span> EXPLORE SEU POTENCIAL</a><span>01 / 08</span><span className="image-caption">IMAGEM ILUSTRATIVA</span></div>
      </section>
      <div className="marquee" aria-hidden="true"><span>MAIS CONSTÂNCIA.</span><Plus/><span>MAIS MOVIMENTO.</span><Plus/><span className="outline">SUA MELHOR VERSÃO.</span><Plus/></div>
      <section id="sobre" className="section about"><motion.div {...reveal} className="about-art"><Image src={site.heroImage} alt="Imagem ilustrativa de treinamento com pesos" fill sizes="(max-width: 768px) 100vw, 45vw"/><div className="image-stamp">NÃO É SÓ<br/>SOBRE <em>TREINO.</em></div><span className="photo-note">FOTO DO PROFISSIONAL A INSERIR</span></motion.div><motion.div {...reveal} className="about-copy"><div className="eyebrow">01 / SOBRE O PROFISSIONAL</div><h2>UM OBJETIVO.<br/>UM PLANO.<br/><span>VOCÊ NO CENTRO.</span></h2><p className="lead">Sua evolução começa com uma direção.</p><p>{site.about}</p><div className="editor-note">CONTEÚDO EM PREPARAÇÃO <span>Nome, registro profissional e qualificações a confirmar.</span></div><a className="inline-link" href="#metodologia">CONHEÇA A PROPOSTA <ArrowUpRight size={19}/></a></motion.div></section>
      <section id="metodologia" className="section method"><motion.div {...reveal} className="section-heading"><div><div className="eyebrow">02 / O PROCESSO</div><h2>INTENÇÃO EM CADA TREINO.<br/><span>EVOLUÇÃO EM CADA ETAPA.</span></h2></div><p>Uma proposta de jornada.<br/>Etapas sujeitas à validação do profissional.</p></motion.div><div className="timeline">{steps.map(([title,desc],i) => <motion.article {...reveal} key={title}><span className="step-number">0{i+1}</span><div className="timeline-point"/><h3>{title}</h3><p>{desc}</p></motion.article>)}</div></section>
      <section id="servicos" className="section services"><motion.div {...reveal} className="section-heading"><div><div className="eyebrow">03 / FORMAS DE TREINAR</div><h2>SUA ROTINA.<br/><span>SUAS POSSIBILIDADES.</span></h2></div><p>Modalidades ilustrativas.<br/>Disponibilidade a confirmar.</p></motion.div><div className="service-grid">{[{icon: Monitor, title:'CONSULTORIA ONLINE',tag:'ONDE VOCÊ ESTIVER', text:'Espaço para detalhar a consultoria, a entrega dos treinos e os canais de acompanhamento.'},{icon:Dumbbell,title:'TREINAMENTO PRESENCIAL',tag:'PRESENÇA QUE DIRECIONA',text:'Espaço para informar a proposta presencial, local de atendimento e disponibilidade.'}].map(({icon:Icon,title,tag,text},i)=><motion.article {...reveal} className={`service service-${i}`} key={title}><div className="service-top"><Icon size={29} strokeWidth={1.25}/><span>0{i+1} / MODALIDADE A CONFIRMAR</span></div><div><div className="eyebrow">{tag}</div><h3>{title}</h3><p>{text}</p><button className="inline-link" onClick={()=>contact()}>SABER MAIS <ArrowUpRight size={20}/></button></div></motion.article>)}</div></section>
      <section id="planos" className="section plans"><motion.div {...reveal} className="section-heading"><div><div className="eyebrow">04 / SEU PRÓXIMO PASSO</div><h2>INVISTA EM VOCÊ.<br/><span>COMECE COM DIREÇÃO.</span></h2></div><p>Planos demonstrativos, sem oferta comercial.<br/>Nomes, valores e benefícios a confirmar.</p></motion.div><div className="plan-grid">{site.plans.map((plan,i)=><motion.article {...reveal} key={plan.name} className="plan"><div className="plan-index">0{i+1} <ArrowUpRight size={20}/></div><h3>{plan.name}</h3><span className="plan-period">{plan.period}</span><div className="price">Sob consulta<span>VALORES A CONFIRMAR</span></div><p>{plan.description}</p><ul>{plan.features.map(f=><li key={f}><Check size={15}/>{f}</li>)}</ul><button className="button" onClick={()=>contact(site.checkout ? 'checkout' : 'whatsapp')}>CONSULTAR DISPONIBILIDADE <ArrowUpRight size={16}/></button></motion.article>)}</div><p className="plan-footnote">Transparência em primeiro lugar. A contratação estará disponível após a confirmação das condições e do canal oficial.</p></section>
      <section id="resultados" className="section results"><motion.div {...reveal}><div className="eyebrow">05 / HISTÓRIAS REAIS</div><h2>O PROCESSO É INDIVIDUAL.<br/><span>CADA HISTÓRIA IMPORTA.</span></h2><div className="results-empty"><span className="quote-mark">“</span><p>O próximo capítulo<br/>será escrito com <em>histórias reais.</em></p><div>ESPAÇO RESERVADO PARA DEPOIMENTOS AUTORIZADOS</div><small>Resultados e relatos serão publicados com autorização dos alunos.<br/>Nenhum depoimento ou resultado foi criado para esta apresentação.</small></div></motion.div></section>
      <section id="duvidas" className="section faq"><motion.div {...reveal}><div className="eyebrow">06 / SEM DÚVIDAS NO CAMINHO</div><h2>VAMOS<br/><span>CONVERSAR?</span></h2><p>O primeiro passo também pode<br/>ser uma boa pergunta.</p><button className="inline-link" onClick={()=>contact()}>FALE COM O PERSONAL <ArrowUpRight size={19}/></button></motion.div><div className="faq-list">{faqs.map((q,i)=><div key={q} className={`faq-item ${openFaq===i?'open':''}`}><h3><button aria-expanded={openFaq===i} aria-controls={`answer-${i}`} onClick={()=>setOpenFaq(openFaq===i?null:i)}><span className="faq-index">0{i+1}</span>{q}<ChevronDown size={18}/></button></h3><div id={`answer-${i}`} hidden={openFaq!==i}><p>{answers[i]}</p></div></div>)}</div></section>
      <section id="contato" className="contact"><motion.div {...reveal}><div className="eyebrow">O SEU PRÓXIMO NÍVEL NÃO VAI ESPERAR.</div><h2>PRONTO PARA<br/>COMEÇAR SUA <em>EVOLUÇÃO?</em></h2><button className="button dark-button" onClick={()=>contact()}>VAMOS DAR O PRIMEIRO PASSO <ArrowUpRight size={21}/></button><p>Contatos oficiais em configuração.</p></motion.div><MoveUpRight className="contact-arrow" aria-hidden="true"/></section>
    </main>
    <footer><div className="footer-top"><a href="#inicio" className="brand">LEO<span>®</span><small>PERSONAL</small></a><p>DISCIPLINA. MOVIMENTO. EVOLUÇÃO.</p><div><button onClick={()=>contact('instagram')}>INSTAGRAM <ArrowUpRight size={15}/></button><button onClick={()=>contact()}>WHATSAPP <ArrowUpRight size={15}/></button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Leo Personal. Todos os direitos reservados.</span><span>Identidade provisória · Informações profissionais a confirmar.</span><a href="#inicio">VOLTAR AO TOPO ↑</a></div></footer>
    <button className="floating-contact" onClick={()=>contact()} aria-label="Conversar pelo WhatsApp"><MessageCircle size={23}/></button>
    {notice && <div className="notice" role="status"><p>{notice}</p><button aria-label="Fechar aviso" onClick={()=>setNotice('')}><X size={20}/></button></div>}
  </>;
}
