import { getUser } from '@/lib/auth'
import { LogOut } from 'lucide-react'
import Image from 'next/image'

export default function Profile() {
  const { name, avatarURL } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarURL}
        width={40}
        height={40}
        alt="Foto do avatar do perfil do Github"
        className="h-10 w-10 rounded-full"
      />

      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a
          href=""
          className="flex items-center gap-1 font-bold text-red-500 hover:text-red-400"
        >
          <LogOut size={20} />
          Sair
        </a>
      </p>
    </div>
  )
}
