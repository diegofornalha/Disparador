'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { LogOut } from 'lucide-react'
import { logout } from '@/utils/auth'
import { LanguageSelector } from './language-selector'

export default function Header() {
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <div className="fixed top-0 right-0 p-4 z-50 flex items-center gap-2">
      <LanguageSelector />
      <Button
        onClick={handleLogout}
        variant="ghost"
        className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
      >
        <LogOut className="h-4 w-4 mr-2" />
        Sair
      </Button>
    </div>
  )
}
