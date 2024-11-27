import './globals.css';

export const metadata = {
  title: 'Mage Knight',
  description: 'Board game stats',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* iOS-specific Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/Icons/icon-192x192.png" />
        {/* Theme Color */}
        <meta name="theme-color" content="#000000" />
      </head>
      <body className='bg-orange-200 h-screen'>{children}</body>
    </html>
  );
}
