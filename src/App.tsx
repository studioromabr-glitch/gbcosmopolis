import { useState } from 'react';
import {
  Shield,
  Users,
  Award,
  MapPin,
  ExternalLink,
  MessageCircle,
  CheckCircle2,
  Menu,
  X,
  ChevronRight,
  Clock,
  Trophy,
  Star,
} from 'lucide-react';

type CavernaTab = 'trajetoria' | 'conquistas' | 'lideranca';

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<CavernaTab>('trajetoria');

  // Substitua pelo número oficial da academia no formato 5519999999999
  const whatsappNumber = '5519999999999';
  const whatsappMessage = encodeURIComponent(
    'Olá! Vim pelo site da Gracie Barra Cosmópolis e gostaria de agendar uma aula experimental.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'A Escola', href: '#escola' },
    { label: 'Programas', href: '#programas' },
    { label: 'Portfólio Caverna', href: '#portfolio-caverna' },
    { label: 'Contato', href: '#contato' },
  ];

  const cavernaTabs: {
    id: CavernaTab;
    label: string;
    badge: string;
    title: string;
    description: string;
    highlights: string[];
  }[] = [
    {
      id: 'trajetoria',
      label: 'Trajetória & Graduação',
      badge: 'Faixa Preta 5º Grau',
      title: 'Professor Anderson Caverna',
      description:
        'Líder da Gracie Barra Cosmópolis e Faixa Preta Quinto Grau, com trajetória consolidada no Jiu-Jitsu e na formação contínua de alunos, atletas e famílias dentro e fora do tatame.',
      highlights: [
        'Faixa Preta Quinto Grau com dedicação integral ao ensino',
        'Referência técnica e disciplinar na Gracie Barra Cosmópolis',
        'Acompanhamento próximo do iniciante ao atleta avançado',
      ],
    },
    {
      id: 'conquistas',
      label: 'Honra ao Mérito & Equipe',
      badge: 'Reconhecimento & Tatame',
      title: 'Legado em Competições e Formação',
      description:
        'Presença constante em eventos e campeonatos, como a CompNet, representando a Gracie Barra Cosmópolis com espírito de equipe, respeito e evolução coletiva.',
      highlights: [
        'Certificação de Honra ao Mérito vinculada à Gracie Barra Cosmópolis',
        'Presença ativa em tatames de competição e formação da equipe',
        'Incentivo à superação, respeito às regras e espírito esportivo',
      ],
    },
    {
      id: 'lideranca',
      label: 'Liderança GB Cosmópolis',
      badge: 'Adultos & GB Kids 5+',
      title: 'Cultura Gracie Barra em Cosmópolis',
      description:
        'Sob a orientação do Professor Caverna, a unidade oferece um ambiente seguro e estruturado para crianças a partir de 5 anos e adultos que buscam defesa pessoal, saúde e comunidade.',
      highlights: [
        'Foco em defesa pessoal eficaz e metodologia oficial GB',
        'Formação infantil (5+) com valores de disciplina e confiança',
        'Comunidade acolhedora conectada ao Instagram @graciebarracosmopolis',
      ],
    },
  ];

  const currentTab =
    cavernaTabs.find((tab) => tab.id === activeTab) ?? cavernaTabs[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-red-600 selection:text-white">
      {/* Barra superior de destaque em azul e vermelho */}
      <div className="bg-blue-950 text-white text-xs py-2 px-4 border-b border-blue-900">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <span className="font-semibold tracking-wide text-blue-100">
            GRACIE BARRA COSMÓPOLIS • JIU-JITSU & DEFESA PESSOAL (ADULTOS E CRIANÇAS 5+)
          </span>
          <span className="inline-flex items-center gap-1.5 font-bold text-red-400">
            <Award className="w-3.5 h-3.5" />
            Prof. Anderson Caverna — Faixa Preta 5º Grau
          </span>
        </div>
      </div>

      {/* Navbar clara */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src="/logo-gbcosm.jpg"
              alt="Logo Gracie Barra Cosmópolis"
              className="h-12 w-12 rounded-full object-cover border-2 border-red-600 ring-2 ring-blue-600/20 group-hover:scale-105 transition-transform"
            />
            <div className="leading-tight">
              <span className="block font-black tracking-wide text-slate-900 text-base sm:text-lg uppercase">
                Gracie Barra
              </span>
              <span className="block text-xs font-extrabold tracking-widest uppercase">
                <span className="text-red-600">Cosmópolis</span>{' '}
                <span className="text-blue-700">• SP</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-md shadow-red-600/25"
            >
              <MessageCircle className="w-4 h-4" />
              Aula Experimental
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-red-600"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-base font-semibold text-slate-800 hover:text-red-600 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-3 rounded-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Aula Experimental
            </a>
          </div>
        )}
      </header>

      {/* Hero Section com a 5ª imagem enviada e visual mais iluminado/claro */}
      <section
        id="inicio"
        className="relative min-h-[86vh] flex items-center overflow-hidden bg-slate-100"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/Sem-Titulo-1-q5s0g52hexjimeuion54na4gvpx99lblht9stos5dc.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-blue-950/35" />
        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-red-600 via-blue-700 to-red-600" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl bg-white/90 backdrop-blur-sm p-7 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-extrabold uppercase tracking-wider mb-5">
              <Shield className="w-3.5 h-3.5 text-red-600" />
              Jiu-Jitsu & Defesa Pessoal • Cosmópolis, SP
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 uppercase leading-[1.05]">
              Jiu-Jitsu para{' '}
              <span className="text-red-600 underline decoration-blue-600 decoration-4 underline-offset-4">
                Todos.
              </span>
              <span className="block text-xl sm:text-3xl font-semibold text-blue-950 mt-3 normal-case">
                Evolução dentro e fora do tatame para adultos e crianças a partir de 5 anos.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed border-l-4 border-red-600 pl-4">
              Treine com a metodologia oficial da Gracie Barra em um ambiente familiar, seguro e
              estruturado para desenvolver confiança, disciplina, condicionamento físico e defesa pessoal.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-4 rounded-xl text-base transition-all shadow-lg shadow-red-600/30"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Aula Experimental
              </a>
              <a
                href="#portfolio-caverna"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-7 py-4 rounded-xl text-base transition-all shadow-md shadow-blue-700/20"
              >
                Portfólio Prof. Caverna
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Indicadores claros com azul e vermelho */}
            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-slate-200">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                <p className="text-2xl sm:text-3xl font-black text-blue-800">5+</p>
                <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                  Crianças a partir de 5 anos
                </p>
              </div>
              <div className="bg-red-50/70 border border-red-200 rounded-xl p-3.5">
                <p className="text-2xl sm:text-3xl font-black text-red-600">5º Grau</p>
                <p className="text-xs sm:text-sm font-medium text-slate-700 mt-1">
                  Faixa Preta Caverna
                </p>
              </div>
              <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3.5">
                <p className="text-2xl sm:text-3xl font-black text-blue-900">GB</p>
                <p className="text-xs sm:text-sm font-medium text-slate-700 mt-1">
                  Metodologia Oficial
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção A Escola / Cultura */}
      <section id="escola" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold tracking-widest uppercase text-blue-700 flex items-center gap-2">
                <span className="w-8 h-[3px] bg-red-600 rounded-full" />
                Cultura & Metodologia Gracie Barra
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase leading-tight">
                Evoluir em <span className="text-red-600">Conjunto</span> no{' '}
                <span className="text-blue-700">Tatame.</span>
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                Na Gracie Barra Cosmópolis, cada aula é pensada para receber alunos de todos os níveis
                — desde quem nunca treinou até quem busca evolução contínua — unindo tradição,
                respeito, técnica e irmandade.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  'Ambiente acolhedor, familiar e organizado para iniciantes',
                  'Defesa pessoal aplicável e condicionamento físico completo',
                  'Comunidade unida em Cosmópolis com padrão Gracie Barra',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm sm:text-base font-medium text-slate-800 bg-slate-50 border border-slate-200/80 rounded-xl p-3.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-5">
              <div className="rounded-3xl overflow-hidden border-2 border-blue-100 bg-slate-50 shadow-lg">
                <img
                  src="/Sem-Titulo-1-q5s0g52hexjimeuion54na4gvpx99lblht9stos5dc.jpg"
                  alt="Kimono e escudo oficial Gracie Barra"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white border-t border-slate-200">
                  <span className="inline-block bg-red-600 text-white text-[11px] font-bold uppercase px-2.5 py-0.5 rounded">
                    Identidade GB
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 mt-1.5">
                    Tradição & Disciplina
                  </h3>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border-2 border-red-100 bg-slate-50 shadow-lg">
                <img
                  src="/WhatsApp Image 2026-11-19 at 18.30.50_2.jpeg"
                  alt="Praticante de Jiu-Jitsu com kimono Gracie Barra no tatame azul"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white border-t border-slate-200">
                  <span className="inline-block bg-blue-700 text-white text-[11px] font-bold uppercase px-2.5 py-0.5 rounded">
                    Tatame & Foco
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 mt-1.5">
                    Gracie Barra Cosmópolis • SP
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Programas */}
      <section id="programas" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest uppercase text-red-600">
              Para Todas as Idades
            </span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-black text-slate-900 uppercase">
              Nossos <span className="text-blue-700">Programas</span>
            </h2>
            <p className="mt-4 text-slate-600 text-base">
              Turmas estruturadas para adultos e crianças a partir de 5 anos em Cosmópolis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Adultos */}
            <div className="bg-white border-2 border-slate-200 hover:border-blue-600 rounded-3xl p-8 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700">
                  Jiu-Jitsu & Defesa Pessoal
                </span>
                <h3 className="text-2xl font-black text-slate-900 uppercase mt-1">
                  Turma Adulto
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Aulas completas para iniciantes e experientes. Desenvolva defesa pessoal, saúde,
                  foco e condicionamento físico em um ambiente motivador.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm font-medium text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    Acolhimento completo para quem começa do zero
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                    Técnicas eficientes de defesa pessoal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    Treinos dinâmicos e evolução contínua
                  </li>
                </ul>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold transition-colors shadow-md shadow-red-600/20"
              >
                Agendar Aula Adulto
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Infantil 5+ */}
            <div className="bg-white border-2 border-slate-200 hover:border-red-600 rounded-3xl p-8 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                  Crianças a partir de 5 Anos
                </span>
                <h3 className="text-2xl font-black text-slate-900 uppercase mt-1">
                  GB Kids (5+ Anos)
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Formação infantil com foco em disciplina, respeito, coordenação motora, foco e
                  autoconfiança dentro e fora do tatame.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm font-medium text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                    Indicado para crianças a partir de 5 anos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    Desenvolvimento motor, foco e respeito mútuo
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                    Supervisão atenta e metodologia segura
                  </li>
                </ul>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold transition-colors shadow-md shadow-blue-700/20"
              >
                Agendar Aula Infantil
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Aba / Seção Portfólio do Caverna */}
      <section id="portfolio-caverna" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-extrabold tracking-widest uppercase text-blue-700 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-red-600" />
                Portfólio Oficial
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-black text-slate-900 uppercase">
                Portfólio do <span className="text-red-600">Caverna</span>
              </h2>
              <p className="mt-2 text-slate-600">
                Professor Anderson Caverna • Faixa Preta Quinto Grau • Gracie Barra Cosmópolis
              </p>
            </div>

            {/* Botões de abas */}
            <div className="flex flex-wrap gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
              {cavernaTabs.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'text-slate-700 hover:text-blue-800 hover:bg-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Conteúdo da aba selecionada */}
          <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 grid lg:grid-cols-12 gap-10 items-center shadow-sm">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-blue-600/30 bg-white shadow-lg">
                <img
                  src="/gb-caverna.jpg"
                  alt="Professor Anderson Caverna segurando certificado de Honra ao Mérito Gracie Barra Cosmópolis"
                  className="w-full h-[420px] object-cover object-top"
                />
                <div className="bg-blue-950 text-white px-4 py-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-red-400">Prof. Anderson Caverna</span>
                  <span className="bg-red-600 text-white px-2.5 py-1 rounded">
                    Faixa Preta 5º Grau
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-extrabold uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 text-red-600" />
                {currentTab.badge}
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-slate-900">
                {currentTab.title}
              </h3>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                {currentTab.description}
              </p>

              <ul className="space-y-3 pt-2">
                {currentTab.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-3.5 text-sm sm:text-base font-medium text-slate-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md shadow-red-600/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar com a Equipe no WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/graciebarracosmopolis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-800 border border-blue-200 font-bold px-5 py-3.5 rounded-xl text-sm transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  @graciebarracosmopolis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato & CTA */}
      <section
        id="contato"
        className="py-20 bg-gradient-to-r from-red-600 via-red-600 to-blue-800 text-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Agende sua Aula Experimental em Cosmópolis
          </h2>
          <p className="mt-4 text-lg text-white/95 max-w-2xl mx-auto">
            Venha conhecer a Gracie Barra Cosmópolis com o Professor Anderson Caverna. Turmas para
            adultos e crianças a partir de 5 anos.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 text-red-700 font-extrabold px-8 py-4 rounded-xl text-base transition-all shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
            <a
              href="https://www.instagram.com/graciebarracosmopolis/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-950/70 hover:bg-blue-950 text-white border border-white/25 font-bold px-8 py-4 rounded-xl text-base transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              Instagram Oficial
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-white/25 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-semibold text-white/95">
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Cosmópolis, SP
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Adultos e Crianças (5+ anos)
            </span>
          </div>
        </div>
      </section>

      {/* Footer claro */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-medium">
            © {new Date().getFullYear()} Gracie Barra Cosmópolis. Todos os direitos reservados.
          </p>
          <p className="font-medium">
            Desenvolvido por{' '}
            <a
              href="https://romastudiobr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-red-600 font-bold transition-colors"
            >
              Roma Studio
            </a>
          </p>
        </div>
      </footer>

      {/* Botão Flutuante de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl border-2 border-white hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;