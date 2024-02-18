import { NextIntlClientProvider, useMessages } from 'next-intl';
import './global.scss';

export const metadata = {
  title: 'Tdaal Platforme',
  description: 'Welcome to Tdaal Platforme app',
};


export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
