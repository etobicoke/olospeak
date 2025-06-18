export const metadata = {
  title: 'OloSpeak',
  description: "Olospeak l'intelligence artificiel du future",
   icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
