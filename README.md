# Leo Personal

Site responsivo em Next.js App Router, TypeScript, Tailwind CSS, Motion e Lucide.

## Desenvolvimento

Requer Node.js 20.9 ou superior (validado com Node.js 24).

```sh
npm ci
npm run dev
```

## Validação e produção

```sh
npm run typecheck
npm run build
npm run start
```

Na Vercel, importe este repositório usando o preset Next.js. Não exige banco de dados ou credenciais para renderizar o site.

## Conteúdo e publicação

Edite `src/config/site.ts` para configurar nome, biografia, planos, número de WhatsApp internacional (apenas dígitos), URL HTTPS de Instagram e checkout. Defina `NEXT_PUBLIC_SITE_URL` com o domínio definitivo para os metadados absolutos de compartilhamento. Nunca inclua segredos neste arquivo público.

A página de referência MFIT retornou bloqueio de rede (HTTP 403 no proxy), portanto seus dados não foram verificados. Identidade Leo é provisória e derivada do nome do repositório. Planos, modalidades e metodologia são estruturas demonstrativas explicitamente identificadas. Preços, credenciais, resultados e depoimentos não foram inventados. Revise e substitua os campos pendentes antes da divulgação comercial. Respostas do FAQ estão em `src/components/home.tsx`.

A imagem `public/training.jpg` é ilustrativa e não representa o profissional ou seus alunos. Fonte: [Free Exercise DB](https://github.com/yuhonas/free-exercise-db), apresentado pelo mantenedor como dataset de domínio público / Unlicense; caminho original `exercises/Barbell_Bench_Press_-_Medium_Grip/0.jpg`. Substitua por fotografias profissionais autorizadas para a identidade final.

Sem contato configurado, os botões apresentam um aviso acessível e não abrem checkout fictício. Com valores confirmados, WhatsApp inclui mensagem preenchida e checkout/Instagram abrem o destino configurado. Não há formulário que armazene dados pessoais.

Introdução de 2,1 segundos com botão de pular, exibida uma vez por sessão e desativada para redução de movimento. FAQ acessível, menu móvel com Escape, navegação por seções e destaque da seção ativa.
