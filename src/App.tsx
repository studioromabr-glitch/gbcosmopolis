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
} from 'lucide-react';

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    { label: 'Professor', href: '#professor' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src="/logo-gbcosm.jpg"
              alt="Logo Gracie Barra Cosmópolis"
              className="h-12 w-12 rounded-full object-cover border-2 border-red-600 group-hover:scale-105 transition-transform"
            />
            <div className="leading-tight">
              <span className="block font-extrabold tracking-wide text-white text-base sm:text-lg uppercase">
                Gracie Barra
              </span>
              <span className="block text-xs font-semibold tracking-widest text-red-500 uppercase">
                Cosmópolis • SP
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-red-600/20"
            >
              <MessageCircle className="w-4 h-4" />
              Aula Experimental
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-zinc-800 px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-base font-medium text-zinc-200 hover:text-red-500"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold px-5 py-3 rounded-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Aula Experimental
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative pt-20 min-h-[92vh] flex items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Shield className="w-3.5 h-3.5" />
              Jiu-Jitsu & Defesa Pessoal • Cosmópolis, SP
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]">
              Jiu-Jitsu para <span className="text-red-600">Todos.</span>
              <span className="block text-2xl sm:text-4xl font-light text-zinc-200 mt-3 normal-case">
                Evolução dentro e fora do tatame para adultos e crianças a partir de 5 anos.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed border-l-2 border-red-600 pl-4">
              Mais do que um lugar para treinar: um ambiente estruturado com a metodologia oficial
              Gracie Barra para desenvolver confiança, disciplina, condicionamento físico e defesa pessoal.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-red-600/25"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Aula Experimental Gratuita
              </a>
              <a
                href="#programas"
                className="inline-flex items-center justify-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700 font-semibold px-8 py-4 rounded-xl text-base transition-all"
              >
                Conhecer Turmas
                <ChevronRight className="w-4 h-4 text-red-500" />
              </a>
            </div>

            {/* Indicadores rápidos */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg pt-8 border-t border-zinc-800/80">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">5+</p>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">Crianças a partir de 5 anos</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-red-500">5º Grau</p>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">Professor Faixa Preta</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">GB</p>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">Metodologia Mundial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Cultura & Filosofia */}
      <section id="escola" className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-red-500 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-red-600" />
                Cultura & Metodologia
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight">
                Evoluir em <span className="text-red-600">Conjunto.</span>
              </h2>
              <p className="text-zinc-300 leading-relaxed">
                Na Gracie Barra Cosmópolis, acreditamos que o Jiu-Jitsu transforma vidas. Nossa estrutura
                de ensino segue o legado do Mestre Carlos Gracie Jr., oferecendo aulas seguras, organizadas
                e progressivas — tanto para quem nunca pisou em um tatame quanto para praticantes experientes.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  'Ambiente familiar, respeitoso e acolhedor para iniciantes',
                  'Aulas estruturadas com foco em defesa pessoal real',
                  'Comunidade unida dentro e fora das competições',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-200">
                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1200&q=80"
                  alt="Treino de Jiu-Jitsu na Gracie Barra"
                  className="w-full h-[400px] object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <div>
                    <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase px-3 py-1 rounded mb-2">
                      Irmandade • Integridade • Desenvolvimento
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Tradição Gracie Barra em Cosmópolis
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Programas / Turmas */}
      <section id="programas" className="py-24 bg-zinc-900/60 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-red-500">
              Para Todas as Idades
            </span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-black text-white uppercase">
              Nossos Programas
            </h2>
            <p className="mt-4 text-zinc-400">
              Escolha a turma ideal para você ou para seus filhos e dê o primeiro passo no tatame.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card Adultos */}
            <div className="bg-zinc-950 border border-zinc-800 hover:border-red-600/60 rounded-2xl p-8 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-600/30 flex items-center justify-center text-red-500 mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-white uppercase">
                  Jiu-Jitsu Adulto & Defesa Pessoal
                </h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">
                  Treinos completos para iniciantes e avançados. Melhore seu condicionamento físico,
                  alivie o estresse do dia a dia e aprenda técnicas eficientes de defesa pessoal.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    Fundamentos para quem está começando do zero
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    Defesa pessoal prática e condicionamento
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    Treinos avançados e preparação para equipe GB
                  </li>
                </ul>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-zinc-900 hover:bg-red-600 text-white font-bold border border-zinc-800 hover:border-red-600 transition-colors"
              >
                Agendar Aula Adulto
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card Kids */}
            <div className="bg-zinc-950 border border-zinc-800 hover:border-red-600/60 rounded-2xl p-8 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-600/30 flex items-center justify-center text-red-500 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-white uppercase">
                  GB Kids • Crianças a partir de 5 Anos
                </h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">
                  Muito além da luta: ensinamos respeito, foco, coordenação motora e autoconfiança
                  para que as crianças saibam lidar com desafios e bullying sem violência.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    Turmas divididas por faixa etária (5+ anos)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    Disciplina, concentração e trabalho em equipe
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    Didática lúdica, segura e acompanhada de perto
                  </li>
                </ul>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-zinc-900 hover:bg-red-600 text-white font-bold border border-zinc-800 hover:border-red-600 transition-colors"
              >
                Agendar Aula Infantil
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Professor */}
      <section id="professor" className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 lg:p-16 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-zinc-800 border-2 border-red-600/50 flex items-center justify-center overflow-hidden shadow-2xl">
                  <img
                    src="/logo-gbcosm.jpg"
                    alt="Gracie Barra Cosmópolis - Professor Anderson Caverna"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Faixa Preta 5º Grau
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold tracking-widest uppercase text-red-500">
                Liderança Técnica
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase">
                Professor Anderson Caverna
              </h2>
              <p className="text-lg font-medium text-zinc-200">
                Faixa Preta Quinto Grau • Líder da Gracie Barra Cosmópolis
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Com décadas de dedicação ao Jiu-Jitsu e à formação de alunos dentro e fora do tatame,
                o Professor Anderson Caverna lidera a unidade de Cosmópolis mantendo vivo o padrão de
                excelência, respeito e irmandade da equipe Gracie Barra.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.instagram.com/graciebarracosmopolis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-red-500 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-red-500" />
                  Acompanhe o dia a dia em @graciebarracosmopolis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final & Contato */}
      <section id="contato" className="py-24 bg-red-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Pronto para começar sua jornada no Jiu-Jitsu?
          </h2>
          <p className="mt-4 text-lg text-red-100 max-w-2xl mx-auto">
            Agende agora sua aula experimental na Gracie Barra Cosmópolis. Não precisa ter experiência
            prévia — nossa equipe vai te receber e orientar em cada passo.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-zinc-950 hover:bg-zinc-900 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl"
            >
              <MessageCircle className="w-5 h-5 text-red-500" />
              Falar no WhatsApp Agora
            </a>
            <a
              href="https://www.instagram.com/graciebarracosmopolis/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-8 py-4 rounded-xl text-base transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              Ver Instagram
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-red-500/60 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-red-100">
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Cosmópolis, SP
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Turmas Adulto e Infantil (5+ anos)
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-8 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Gracie Barra Cosmópolis. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{' '}
            <a
              href="https://romastudiobr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-red-500 font-semibold transition-colors"
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
        className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl shadow-red-600/40 hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;