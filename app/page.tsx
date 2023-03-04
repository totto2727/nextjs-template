import Link from 'next/link'
import { Button } from 'src/component/Button'
import { InfoIcon } from 'src/component/Info'

export const metadata = {
  title: 'nextjs-template',
  description: 'This is Next.js Template Directory',
  icons: {
    icon: '/favicon.png',
  },
}

export default function Page() {
  return (
    <main>
      <div>Hello, World</div>
      <InfoIcon />
      <Button />
      <Link href='/markdown'>Markdown</Link>
    </main>
  )
}
