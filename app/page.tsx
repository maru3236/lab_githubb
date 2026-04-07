
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="flex flex-1 w-full max-w-4xl mx-auto flex-col items-center justify-center py-20 px-8 sm:items-start">
        
        {/* Ícone ou Badge */}
        <div className="mb-8 flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-sm font-medium text-zinc-800 dark:text-zinc-200">
          <span>🚀 Guia Rápido</span>
        </div>

        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-black dark:text-white">
            O que é o <span className="text-blue-600">GitHub?</span>
          </h1>
          
          <p className="max-w-2xl text-xl leading-8 text-zinc-600 dark:text-zinc-400">
            O GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o <strong>Git</strong>. 
            É como uma rede social para programadores, onde você pode hospedar seus projetos, colaborar com pessoas do mundo todo e manter um histórico de todas as alterações.
          </p>

          {/* Seção de Benefícios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
              <h3 className="font-bold text-lg mb-2 dark:text-white">Controle de Versão</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                Nunca mais perca código. O GitHub salva o histórico de cada linha escrita, permitindo voltar no tempo se algo quebrar.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
              <h3 className="font-bold text-lg mb-2 dark:text-white">Colaboração Online</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                Trabalhe em equipe no mesmo projeto simultaneamente sem sobrescrever o trabalho do colega.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-12 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black text-white px-8 transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 md:w-auto"
            href="https://github.com/join"
            target="_blank"
            rel="noopener noreferrer"
          >
            Criar conta gratuita
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-300 px-8 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900 md:w-auto"
            href="https://docs.github.com/pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentação
          </a>
        </div>
      </main>

      {/* Footer Simples */}
      <footer className="w-full py-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-zinc-500 text-sm">
        Desenvolvido com Next.js & Tailwind CSS
      </footer>
    </div>
  );
}