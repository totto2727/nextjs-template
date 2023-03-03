import Link from "next/link"

export const metadata = {
  title: "nextjs-template",
  description: 'This is Next.js Template Directory',
  icons: {
    icon: '/favicon.png',
  }
}

export default function Home() {
  return (
    <main>
      <div>Hello, World</div>
      <Link href="/markdown">Markdown</Link>
    </main>
  )
}
