import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  TrendingUp,
  Users,
  BarChart2,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ChevronDown,
  Building2,
  Shield,
  Award,
  CheckCircle,
} from 'lucide-react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['privacidade', 'contato', 'servicos', 'quem-somos', 'inicio'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: 'quem-somos', label: 'Quem Somos' },
    { href: 'servicos', label: 'Serviços' },
    { href: 'contato', label: 'Contato' },
    { href: 'privacidade', label: 'Privacidade' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/95 shadow-sm'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo('inicio')}
            className="text-blue-800 font-bold text-base md:text-lg leading-tight tracking-tight hover:text-blue-700 transition-colors"
          >
            Carlos Eduardo Gomes Carbobiak
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/554196604511"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2 bg-blue-700 text-white rounded-md text-sm font-semibold hover:bg-blue-800 transition-colors duration-200"
            >
              Falar Agora
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://wa.me/554196604511"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-3 bg-blue-700 text-white rounded-md text-sm font-semibold text-center hover:bg-blue-800 transition-colors"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="pt-16">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-700/40 border border-blue-500/40 rounded-full px-4 py-1.5 text-sm font-medium text-blue-100 mb-6">
              <Award size={14} />
              Consultoria Estratégica Empresarial
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 text-white">
              Fazemos sua empresa crescer
              <br className="hidden md:block" />
              <span className="text-blue-300"> por conta própria.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-10">
              Consultoria estratégica que capacita sua equipe e processos internos para resultados
              sustentáveis e duradouros — sem dependência externa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/554196604511"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-800 rounded-lg font-semibold text-base hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <MessageCircle size={18} />
                Conversar no WhatsApp
              </a>
              <button
                onClick={() => scrollTo('servicos')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white rounded-lg font-semibold text-base hover:bg-white/10 transition-all duration-200"
              >
                Ver Serviços
                <ChevronDown size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '100%', label: 'Transparência nas Operações' },
              { value: 'LGPD', label: 'Conformidade de Dados' },
              { value: 'CNPJ', label: 'Empresa Registrada' },
              { value: '24h', label: 'Suporte e Atendimento' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-bold text-blue-700">{stat.value}</span>
                <span className="text-xs text-gray-500 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="quem-somos" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Identidade e Transparência</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Quem Somos</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Prezamos pela clareza total sobre quem opera este serviço e como atuamos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                <Users size={20} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nossa Atuação</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Somos uma consultoria estratégica com foco em capacitar empresas a crescerem por meio de
                seus próprios processos e equipes internas. Não terceirizamos resultados — ensinamos,
                estruturamos e acompanhamos cada etapa do desenvolvimento do seu negócio.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nosso diferencial está no comprometimento com práticas éticas, transparência total nas
                operações e no desenvolvimento de competências que permanecem com a sua empresa.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                <Building2 size={20} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-5">Dados Oficiais</h3>
              <ul className="space-y-4">
                {[
                  { label: 'Responsável', value: 'Carlos Eduardo Gomes Carbobiak' },
                  { label: 'CNPJ', value: '65.543.950/0001-08' },
                  { label: 'Endereço', value: 'Rua Francisco de Almeida Filho, 59 — Cidade Industrial, Curitiba/PR — CEP 81279-215' },
                  { label: 'E-mail', value: 'caducarbobiak@gmail.com' },
                  { label: 'Telefone / WhatsApp', value: '(41) 9660-4511' },
                ].map((item) => (
                  <li key={item.label} className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{item.label}</span>
                    <span className="text-gray-800 text-sm font-medium">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">O que oferecemos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Nossos Serviços</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Cada serviço é desenhado para fortalecer as capacidades internas da sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Consultoria de Crescimento Estratégico',
                description:
                  'Análise completa do seu negócio, identificação de gargalos e desenvolvimento de um plano de crescimento personalizado com metas claras e mensuráveis.',
                items: ['Diagnóstico empresarial', 'Planejamento estratégico', 'Definição de KPIs'],
              },
              {
                icon: Users,
                title: 'Capacitação de Equipes Internas',
                description:
                  'Treinamentos práticos e acompanhamento contínuo para desenvolver as habilidades da sua equipe, garantindo que o conhecimento fique dentro da empresa.',
                items: ['Treinamentos customizados', 'Gestão e liderança', 'Processos e metodologias'],
              },
              {
                icon: BarChart2,
                title: 'Estruturação de Processos e Dados',
                description:
                  'Organização e otimização dos processos operacionais e criação de uma cultura baseada em dados para decisões mais assertivas e rentáveis.',
                items: ['Mapeamento de processos', 'Dashboards e relatórios', 'Cultura data-driven'],
              },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-700 transition-colors duration-300">
                    <Icon size={20} className="text-blue-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={14} className="text-blue-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-300 uppercase tracking-widest">Entre em contato</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Fale com a Consultoria</h2>
            <p className="text-blue-200 max-w-xl mx-auto">
              Disponíveis para tirar dúvidas, apresentar nossa metodologia e iniciar um diagnóstico gratuito do seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              {
                Icon: MessageCircle,
                title: 'WhatsApp',
                value: '(41) 9660-4511',
                href: 'https://wa.me/554196604511',
                label: 'Enviar mensagem',
                external: true,
              },
              {
                Icon: Mail,
                title: 'E-mail',
                value: 'caducarbobiak@gmail.com',
                href: 'mailto:caducarbobiak@gmail.com',
                label: 'Enviar e-mail',
                external: false,
              },
              {
                Icon: Phone,
                title: 'Telefone',
                value: '(41) 9660-4511',
                href: 'tel:+554196604511',
                label: 'Ligar agora',
                external: false,
              },
            ].map((contact) => (
              <a
                key={contact.title}
                href={contact.href}
                target={contact.external ? '_blank' : undefined}
                rel={contact.external ? 'noopener noreferrer' : undefined}
                className="group bg-blue-700/50 border border-blue-600/40 rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:bg-white hover:border-white transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-white/10 group-hover:bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300">
                  <contact.Icon size={22} className="text-white group-hover:text-blue-700 transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-blue-900 transition-colors text-sm">{contact.title}</p>
                  <p className="text-blue-200 group-hover:text-blue-600 text-sm transition-colors">{contact.value}</p>
                </div>
                <span className="text-xs font-semibold text-blue-300 group-hover:text-blue-600 transition-colors">{contact.label} →</span>
              </a>
            ))}
          </div>

          <div className="bg-blue-700/30 border border-blue-600/30 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <MapPin size={20} className="text-blue-300 flex-shrink-0 mt-0.5 md:mt-0" />
            <div>
              <p className="text-sm font-semibold text-white mb-0.5">Endereço para Correspondência</p>
              <p className="text-blue-200 text-sm">
                Rua Francisco de Almeida Filho, 59 — Cidade Industrial, Curitiba/PR — CEP 81279-215 — Brasil
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POLÍTICA DE PRIVACIDADE */}
      <section id="privacidade" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Conformidade Legal</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Política de Privacidade</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Nosso compromisso com a proteção de dados e conformidade com a LGPD.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-700 px-8 py-5 flex items-center gap-3">
              <Shield size={20} className="text-blue-200" />
              <div>
                <p className="font-semibold text-white text-sm">Proteção de Dados — LGPD</p>
                <p className="text-blue-200 text-xs">Lei Geral de Proteção de Dados · Lei nº 13.709/2018</p>
              </div>
            </div>

            <div className="p-8 space-y-8 text-gray-700 text-sm leading-relaxed">
              {[
                {
                  num: '1',
                  title: 'Informações Coletadas',
                  body: 'Coletamos exclusivamente informações de contato (nome, e-mail, telefone) fornecidas voluntariamente para fins de comunicação comercial e execução dos serviços contratados. Dados sensíveis nunca são coletados sem consentimento explícito e formalizado.',
                },
                {
                  num: '2',
                  title: 'Finalidade do Uso',
                  body: 'Os dados coletados são utilizados estritamente para: (a) execução e entrega dos serviços de consultoria contratados; (b) comunicação sobre o progresso dos projetos; (c) cumprimento de obrigações legais e contratuais aplicáveis.',
                },
                {
                  num: '3',
                  title: 'Compartilhamento de Dados',
                  body: 'Nenhuma informação pessoal é comercializada ou cedida a terceiros. Eventualmente, dados poderão ser compartilhados apenas com ferramentas operacionais estritamente necessárias à prestação do serviço (ex.: plataformas de gestão, sistemas de comunicação), sempre sob cláusulas de confidencialidade.',
                },
                {
                  num: '4',
                  title: 'Direitos do Titular (LGPD)',
                  body: 'O titular tem direito a solicitar a qualquer momento: acesso aos seus dados, correção de informações desatualizadas, portabilidade, eliminação ou revogação do consentimento. Para exercer esses direitos, entre em contato pelo e-mail caducarbobiak@gmail.com.',
                },
                {
                  num: '5',
                  title: 'Segurança das Informações',
                  body: 'Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição indevida, seguindo as melhores práticas de segurança da informação.',
                },
                {
                  num: '6',
                  title: 'Conformidade Regulatória',
                  body: 'Todas as atividades desta consultoria são conduzidas em conformidade com a legislação brasileira vigente, incluindo a LGPD (Lei nº 13.709/2018) e demais normas aplicáveis às atividades empresariais de prestação de serviços.',
                },
              ].map((topic) => (
                <div key={topic.num} className="flex gap-5">
                  <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-700 text-xs font-bold">{topic.num}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{topic.title}</h3>
                    <p>{topic.body}</p>
                  </div>
                </div>
              ))}

              <p className="text-xs text-gray-400 text-center pt-4 border-t border-gray-100">
                Última atualização: Janeiro de 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <p className="text-white font-bold text-base mb-1">Carlos Eduardo Gomes Carbobiak</p>
              <p className="text-sm">CNPJ: 65.543.950/0001-08</p>
              <p className="text-sm mt-1">
                Rua Francisco de Almeida Filho, 59 — Cidade Industrial
                <br />
                Curitiba/PR — CEP 81279-215 — Brasil
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:caducarbobiak@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                <Mail size={14} /> caducarbobiak@gmail.com
              </a>
              <a href="tel:+554196604511" className="hover:text-white transition-colors flex items-center gap-2">
                <Phone size={14} /> (41) 9660-4511
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
            <p>&copy; 2026 Carlos Eduardo Gomes Carbobiak. Todos os direitos reservados.</p>
            <button
              onClick={() => scrollTo('privacidade')}
              className="hover:text-white transition-colors"
            >
              Política de Privacidade
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
