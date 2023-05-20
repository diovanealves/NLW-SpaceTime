import Link from 'next/link'

export default function Copyright() {
  return (
    <div className="text-sm leading-relaxed text-gray-200">
      Feito com 💜 no NLW da{' '}
      <Link
        href="https://www.rocketseat.com.br/"
        rel="noreferrer"
        target="_blank"
        className="underline hover:text-gray-100"
      >
        Rocketseat
      </Link>
    </div>
  )
}
