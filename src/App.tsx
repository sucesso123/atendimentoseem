import { MessageCircle, FileText, Wrench, MoreHorizontal, Phone } from 'lucide-react';

function App() {
  const whatsappNumber = '5511952019716';

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-12 pt-8">
          <div className="inline-block bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-4 rounded-2xl shadow-lg mb-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Sejam bem-vindos</h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 font-light">Central de Atendimento</p>
        </header>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => openWhatsApp('Olá! Gostaria de iniciar um atendimento.')}
              className="group relative overflow-hidden bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" />
                <span className="text-lg font-semibold">Iniciar Atendimento Seguro</span>
              </div>
            </button>

            <button
              onClick={() => openWhatsApp('Olá! Preciso falar com o suporte.')}
              className="group relative overflow-hidden bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-6 h-6" />
                <span className="text-lg font-semibold">Falar com Suporte</span>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Serviços Disponíveis</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => openWhatsApp('Olá! Preciso da 2ª via de boleto.')}
              className="group flex items-center gap-4 bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 border-2 border-rose-200 hover:border-rose-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-rose-600 to-pink-600 rounded-lg flex items-center justify-center text-white shadow-md">
                <FileText className="w-7 h-7" />
              </div>
              <span className="text-lg font-semibold text-gray-800 text-left">2ª Via de Boleto</span>
            </button>

            <button
              onClick={() => openWhatsApp('Olá! Preciso de suporte técnico.')}
              className="group flex items-center gap-4 bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 border-2 border-rose-200 hover:border-rose-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-rose-600 to-pink-600 rounded-lg flex items-center justify-center text-white shadow-md">
                <Wrench className="w-7 h-7" />
              </div>
              <span className="text-lg font-semibold text-gray-800 text-left">Suporte Técnico</span>
            </button>

            <button
              onClick={() => openWhatsApp('Olá! Gostaria de tratar de outros assuntos.')}
              className="group flex items-center gap-4 bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 border-2 border-rose-200 hover:border-rose-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-rose-600 to-pink-600 rounded-lg flex items-center justify-center text-white shadow-md">
                <MoreHorizontal className="w-7 h-7" />
              </div>
              <span className="text-lg font-semibold text-gray-800 text-left">Outros Assuntos</span>
            </button>

            <button
              onClick={() => openWhatsApp('Olá! Gostaria de entrar em contato.')}
              className="group flex items-center gap-4 bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 border-2 border-rose-200 hover:border-rose-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-rose-600 to-pink-600 rounded-lg flex items-center justify-center text-white shadow-md">
                <MessageCircle className="w-7 h-7" />
              </div>
              <span className="text-lg font-semibold text-gray-800 text-left">Fale Conosco</span>
            </button>
          </div>
        </div>

        <footer className="text-center mt-12 pb-8">
          <p className="text-gray-600 text-sm">
            Atendimento disponível via WhatsApp
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Responderemos sua mensagem o mais breve possível
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
