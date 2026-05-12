import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bohème Évasion | Cocon Romantique Airbnb près de Lille',
  description: 'Escapade romantique avec spa privatif : sauna, baignoire balnéo, lit king size à Armentières, à 20 min de Lille.',
  keywords: 'airbnb, spa, romantiques, Lille, Armentières, bien-être, sauna, balnéo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}