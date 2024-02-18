import { useTranslations } from 'next-intl';

export default async function Index() {
  const t = useTranslations('Index');

  return (
    <div className="text-center">
      <h1>
        <span className='text-green-900'> Hello there, {t('home')}</span>
        Welcome admin 👋
      </h1>
    </div>
  );
}
