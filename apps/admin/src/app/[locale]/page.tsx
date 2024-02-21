import { useTranslations } from 'next-intl';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <div className="text-center">
      <h1>
        <span>{t('tdaal')}</span>
        <span> Hello there, </span>
        Welcome admin 👋
      </h1>
    </div>
  );
}
