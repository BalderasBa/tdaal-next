import { NextIntlClientProvider, useMessages } from 'next-intl';
import { locales } from '../../navigation';
import './global.scss';

export const metadata = {
  title: 'Tdaal Platforme',
  description: 'Welcome to Tdaal Platforme app',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: (typeof locales)[number] };
}) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
      <body>{children}</body>

      </NextIntlClientProvider>
    </html>
  );
}
