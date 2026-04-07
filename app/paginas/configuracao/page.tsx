export default function Configuracao() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 p-8">
      
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Título */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Configuração do GitHub
          </h1>
          <p className="text-gray-400">
            Visual Studio + Next.js + TailwindCSS
          </p>
        </div>

        {/* Card 1 */}
        <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-700">
          <h2 className="text-lg font-semibold mb-3 text-blue-400">
            🚀 Instalar o Git
          </h2>
          <p className="text-gray-300 mb-3">
            Execute o comando abaixo no terminal do Visual Studio:
          </p>
          <pre className="bg-black/70 p-4 rounded-lg text-green-400 text-sm overflow-x-auto">
{`winget install --id Git.Git -e --source winget`}
          </pre>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-700">
          <h2 className="text-lg font-semibold mb-3 text-purple-400">
            👤 Configurar usuário
          </h2>
          <p className="text-gray-300 mb-3">
            Configure seu nome e email do GitHub:
          </p>
          <pre className="bg-black/70 p-4 rounded-lg text-green-400 text-sm overflow-x-auto">
{`git config --global user.email "seuemail@exemplo.com"
git config --global user.name "seuusuario"`}
          </pre>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-700">
          <h2 className="text-lg font-semibold mb-3 text-pink-400">
            🔐 Autorizar acesso
          </h2>
          <p className="text-gray-300">
            Ao fazer seu primeiro <span className="text-green-400 font-semibold">git push</span>, 
            o Visual Studio abrirá o navegador para login no GitHub.  
            Basta autorizar o acesso para concluir a configuração.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-xs pt-4">
          Feito com Next.js + TailwindCSS 💙
        </div>

      </div>
    </div>
  );
}