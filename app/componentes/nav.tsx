
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { GitBranch, Home, Settings, FolderGit2 } from "lucide-react"
import * as utils from "@/lib/utils"

const navItems = [
  {
    label: "Início",
    href: "/",
    icon: Home,
  },
  {
    label: "Configuração",
    href: "/paginas/configuracao",
    icon: Settings,
  },
  {
    label: "Repositórios",
    href: "/paginas/repositorio",
    icon: FolderGit2,
  },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors"
          >
            <div className="bg-gray-900 p-2 rounded-lg">
              <GitBranch className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-lg hidden sm:block">Guia GitHub</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={utils.cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
