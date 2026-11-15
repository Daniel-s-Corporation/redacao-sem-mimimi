// Conteúdo central do site — edite aqui links, textos e preços.

export const links = {
  whatsapp: 'https://wa.me/message/HXOMDKTNRURLO1',
  grupoWhatsapp: 'https://chat.whatsapp.com/Lmv2bpJSPwX3THSFOTzXxk?mode=gi_t',
  email: 'mailto:gleisonvercosa@gmail.com',
  instagram: 'https://www.instagram.com/gleison.vercosa/',
  youtube: 'https://www.youtube.com/@profVercosa/',
  livroAmazon: 'https://www.amazon.com.br/dp/1095448455',
  loja: 'https://www.redacaosemmimimi.com/category/loja',
  treinamentos: 'https://www.redacaosemmimimi.com/pricing-plans',
  matricula: 'https://www.redacaosemmimimi.com/book-online',
  privacidade: 'https://www.redacaosemmimimi.com/pol%C3%ADtica-de-privacidade',
}

export const nav = [
  { label: 'Método', href: '#metodo' },
  { label: 'Quem sou', href: '#quem-sou' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export interface Product {
  name: string
  description: string
  price: string
  access: string
  features: string[]
  href: string
  cta: string
  featured?: boolean
}

export const products: Product[] = [
  {
    name: 'Redação Sem Mimimi',
    description: 'O curso completo para dominar a redação discursiva de concursos.',
    price: 'R$ 299,99',
    access: '12 meses de acesso',
    features: ['Aulas gravadas', 'Aulas ao vivo', 'Exercícios práticos', 'Método de pontuação da banca'],
    href: links.matricula,
    cta: 'Quero minha vaga',
    featured: true,
  },
  {
    name: 'Português Sem Enrolação',
    description: 'Do básico ao avançado, com foco no que as bancas cobram.',
    price: 'R$ 129,99',
    access: '12 meses de acesso',
    features: ['Conteúdo do básico ao avançado', 'Foco em questões de concurso'],
    href: links.treinamentos,
    cta: 'Quero o curso',
  },
  {
    name: 'Manual Antifalha',
    description: 'Os erros gramaticais mais comuns — e como nunca mais cometê-los.',
    price: 'R$ 49,99',
    access: '6 meses de acesso',
    features: ['Erros gramaticais recorrentes', 'Correção rápida e direta'],
    href: links.loja,
    cta: 'Quero o manual',
  },
  {
    name: 'Modelos de Redação',
    description: 'Modelos comentados para você entender a estrutura que pontua.',
    price: 'R$ 49,99',
    access: '6 meses de acesso',
    features: ['Modelos prontos', 'Estruturas por tipo de texto'],
    href: links.loja,
    cta: 'Quero os modelos',
  },
]

export const pac = {
  name: 'PAC de Modelos',
  description: 'Estruturas prontas de redação discursiva para começar a treinar hoje.',
  price: 'R$ 10',
  href: links.loja,
}

export const credentials = [
  'Formado em Letras pela UFMG',
  'Ex-professor substituto concursado e membro de banca examinadora',
  'Corretor de redações em seleções de larga escala',
  'Servidor do Estado de Minas Gerais e da Prefeitura de Belo Horizonte',
  'Aprovado em mais de 10 concursos',
  'Autor de 3 livros, 2 deles sobre redação',
]

export const faq = [
  {
    q: 'Para quem são os cursos?',
    a: 'Para quem vai prestar concurso com prova de redação discursiva e/ou Língua Portuguesa — principalmente quem já tentou e sente que não sabe o que a banca espera.',
  },
  {
    q: 'Como funciona a garantia?',
    a: 'Você tem 7 dias para conhecer o curso. Se não for o que você esperava, devolvemos o seu dinheiro.',
  },
  {
    q: 'Por quanto tempo terei acesso?',
    a: 'O Redação Sem Mimimi e o Português Sem Enrolação têm 12 meses de acesso. Os materiais avulsos (Manual Antifalha e Modelos de Redação) têm 6 meses.',
  },
  {
    q: 'As aulas são gravadas ou ao vivo?',
    a: 'O Redação Sem Mimimi combina aulas gravadas, encontros ao vivo e exercícios, para você estudar no seu ritmo sem ficar sozinho.',
  },
  {
    q: 'Vocês têm escola física?',
    a: 'Não. Todo o conteúdo é on-line, para você estudar de onde estiver.',
  },
  {
    q: 'Existem treinamentos para concursos específicos?',
    a: 'Sim. Sempre que sai um edital relevante, abrimos turmas focadas na banca e no formato da prova. Fale com a gente no WhatsApp para saber das turmas abertas.',
  },
]
