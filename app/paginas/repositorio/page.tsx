
import { Terminal, GitBranch, Link2, Trash2, CheckCircle2 } from "lucide-react"

export default function GitHubGuidePage() {
  const steps = [
    {
      number: 1,
      title: "Criar um repositório no GitHub",
      description: "Acesse o GitHub e crie um novo repositório para seu projeto.",
      icon: GitBranch,
      instructions: [
        "Acesse github.com e faça login",
        "Clique no botão '+' no canto superior direito",
        "Selecione 'New repository'",
        "Dê um nome ao repositório e clique em 'Create repository'",
      ],
      command: null,
    },
    {
      number: 2,
      title: "Inicializar o Git no projeto",
      description: "Na pasta do projeto do Visual Studio, inicialize o Git.",
      icon: Terminal,
      instructions: ["Abra o terminal na pasta do seu projeto", "Execute o comando abaixo para inicializar o Git"],
      command: "git init",
      note: "Inicializa o GitHub dentro da pasta do projeto",
    },
    {
      number: 3,
      title: "Verificar repositório conectado",
      description: "Verifique se há algum repositório remoto conectado ao projeto.",
      icon: Link2,
      instructions: ["Execute o comando abaixo para verificar conexões remotas"],
      command: "git remote -v",
      note: "Se não retornar nada, significa que não há repositório conectado",
    },
    {
      number: 4,
      title: "Conectar ao repositório criado",
      description: "Adicione o repositório do GitHub como origin do seu projeto.",
      icon: CheckCircle2,
      instructions: ["Copie a URL do seu repositório no GitHub", "Execute o comando abaixo substituindo pela sua URL"],
      command: 'git remote add origin "https://github.com/seu-usuario/seu-repositorio"',
      example: 'git remote add origin "https://github.com/maru3236/lab_githubb"',
    },
    {
      number: 5,
      title: "Remover repositório (se necessário)",
      description: "Caso precise desconectar um repositório para conectar outro.",
      icon: Trash2,
      instructions: [
        "Execute o comando abaixo para remover a conexão atual",
        "Depois, conecte ao novo repositório usando o passo 4",
      ],
      command: "git remote remove origin",
      note: "Use este comando apenas se precisar trocar de repositório",
    },
  ]

  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-gray-900 p-4 rounded-full">
              <GitBranch className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Guia: Conectar Visual Studio ao GitHub
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Siga este passo a passo para conectar seu projeto do Visual Studio a um repositório do GitHub
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Step Number Badge */}
              <div className="absolute -left-4 -top-4 bg-gray-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.number}
              </div>

              {/* Step Content */}
              <div className="ml-4">
                <div className="flex items-center gap-3 mb-3">
                  <step.icon className="w-6 h-6 text-gray-700" />
                  <h2 className="text-xl font-semibold text-gray-900">{step.title}</h2>
                </div>

                <p className="text-gray-600 mb-4">{step.description}</p>

                {/* Instructions List */}
                <ul className="space-y-2 mb-4">
                  {step.instructions.map((instruction, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ul>

                {/* Command Box */}
                {step.command && (
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <Terminal className="w-4 h-4" />
                      <span>Terminal</span>
                    </div>
                    <code className="text-green-400">$ {step.command}</code>
                  </div>
                )}

                {/* Example */}
                {step.example && (
                  <div className="mt-3 bg-gray-100 rounded-lg p-4 font-mono text-sm">
                    <span className="text-gray-500">Exemplo: </span>
                    <code className="text-gray-800">{step.example}</code>
                  </div>
                )}

                {/* Note */}
                {step.note && (
                  <div className="mt-4 flex items-start gap-2 text-sm text-gray-500 italic">
                    <span>💡</span>
                    <span>{step.note}</span>
                  </div>
                )}
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1 top-full w-0.5 h-8 bg-gray-300" />
              )}
            </div>
          ))}
        </div>

        {/* Bonus Section */}
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            🚀 Comandos extras úteis
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <code className="text-sm font-mono text-gray-800">git add .</code>
              <p className="text-sm text-gray-600 mt-1">Adiciona todos os arquivos para commit</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <code className="text-sm font-mono text-gray-800">git commit -m &quot;mensagem&quot;</code>
              <p className="text-sm text-gray-600 mt-1">Cria um commit com uma mensagem</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <code className="text-sm font-mono text-gray-800">git push -u origin main</code>
              <p className="text-sm text-gray-600 mt-1">Envia os commits para o GitHub</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <code className="text-sm font-mono text-gray-800">git status</code>
              <p className="text-sm text-gray-600 mt-1">Verifica o status dos arquivos</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>Guia criado para auxiliar desenvolvedores iniciantes com Git e GitHub</p>
        </footer>
      </div>
    </main>
  )
}
